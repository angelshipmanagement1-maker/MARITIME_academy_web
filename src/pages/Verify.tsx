import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

interface CertificateData {
  firstname: string;
  lastname: string;
  passport: string;
  certificate_name: string;
  certificate_number: string;
  start_date: string;
  end_date: string;
  issue_date: string;
  expiry_date: string;
  validity_status: string;
  certificate_image: string | null;
  image_message: string;
}

interface ApiResponse {
  status: 'VALID' | 'INVALID';
  data?: CertificateData;
  message?: string;
  error?: string;
}

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [certificateNumber, setCertificateNumber] = useState('');
  const [data, setData] = useState<CertificateData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCertificate = useCallback(async (certNum: string) => {
    if (!certNum.trim()) {
      setError('Please enter a certificate number');
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`/api/verify?certificate_number=${encodeURIComponent(certNum)}`);
      const result: ApiResponse = await response.json();

      if (response.status === 200 && result.status === 'VALID') {
        setData(result.data!);
        setSearchParams({ certificate_number: certNum });
      } else if (response.status === 404 || result.status === 'INVALID') {
        setError('Certificate not found or invalid');
      } else if (response.status === 400) {
        setError(result.error || 'Invalid request');
      } else if (response.status === 429) {
        setError('Too many requests. Please try again later.');
      } else {
        setError(result.message || 'An error occurred while verifying the certificate');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [setSearchParams]);

  useEffect(() => {
    const certNum = searchParams.get('certificate_number');
    if (certNum) {
      setCertificateNumber(certNum);
      fetchCertificate(certNum);
    }
  }, [searchParams, fetchCertificate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCertificate(certificateNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Certificate Verification</h1>

      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Enter Certificate Number</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="certificate-number">Certificate Number</Label>
              <Input
                id="certificate-number"
                type="text"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                placeholder="Enter certificate number"
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Certificate'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert className="max-w-2xl mx-auto mb-8">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {data && (
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Certificate Details
              <Badge variant={data.validity_status === 'Certificate is valid' ? 'default' : 'destructive'}>
                {data.validity_status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-semibold">First Name</Label>
                <p className="text-lg">{data.firstname}</p>
              </div>
              <div>
                <Label className="font-semibold">Last Name</Label>
                <p className="text-lg">{data.lastname}</p>
              </div>
              <div>
                <Label className="font-semibold">Passport Number</Label>
                <p className="text-lg">{data.passport}</p>
              </div>
              <div>
                <Label className="font-semibold">Certificate / Course Name</Label>
                <p className="text-lg">{data.certificate_name}</p>
              </div>
              <div>
                <Label className="font-semibold">Certificate Number</Label>
                <p className="text-lg font-mono">{data.certificate_number}</p>
              </div>
              <div>
                <Label className="font-semibold">Start Date</Label>
                <p className="text-lg">{data.start_date}</p>
              </div>
              <div>
                <Label className="font-semibold">End Date</Label>
                <p className="text-lg">{data.end_date}</p>
              </div>
              <div>
                <Label className="font-semibold">Issue Date</Label>
                <p className="text-lg">{data.issue_date}</p>
              </div>
              <div>
                <Label className="font-semibold">Expiry Date</Label>
                <p className="text-lg">{data.expiry_date}</p>
              </div>
            </div>
            <div>
              <Label className="font-semibold">Certificate Image</Label>
              {data.certificate_image ? (
                <div className="mt-2">
                  <img src={data.certificate_image} alt="Certificate" className="max-w-full h-auto rounded" />
                  <Button className="mt-2">View Full Certificate</Button>
                </div>
              ) : (
                <p className="text-lg text-muted-foreground">{data.image_message}</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Verify;