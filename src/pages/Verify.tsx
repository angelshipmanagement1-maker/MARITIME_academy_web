import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

interface CertificateData {
  candidate_name: string;
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
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<CertificateData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCertificate = useCallback(async (certNum: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`/api/verify?certificate_number=${encodeURIComponent(certNum)}`);
      const result: ApiResponse = await response.json();

      if (response.status === 200 && result.status === 'VALID') {
        setData(result.data!);
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
  }, []);

  useEffect(() => {
    const certNum = searchParams.get('certificate_number');
    if (certNum) {
      fetchCertificate(certNum);
    }
  }, [searchParams, fetchCertificate]);

  const certNum = searchParams.get('certificate_number');

  if (!certNum) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Certificate Verification</h1>
        <p className="text-lg text-muted-foreground">Scan a QR code to verify a certificate.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Certificate Verification</h1>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Verifying certificate...</span>
        </div>
      )}

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
              <Badge className={data.validity_status === 'Certificate is valid' ? 'bg-green-500 text-white' : ''} variant={data.validity_status === 'Certificate is valid' ? 'default' : 'destructive'}>
                {data.validity_status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-semibold">Name</Label>
                <p className="text-lg">{data.candidate_name}</p>
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
            {data.certificate_image && (
              <div>
                <Label className="font-semibold">Certificate Image</Label>
                <div className="mt-2">
                  <img src={data.certificate_image} alt="Certificate" className="max-w-full h-auto rounded" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Verify;