import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CertificateCard from "@/components/CertificateCard";

const Certificates = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      setError("Please enter a search value");
      return;
    }

    // Validate certificate number length
    const trimmedValue = searchValue.trim();
    if (!/^\d{14,16}$/.test(trimmedValue)) {
      setError("Certificate number must be 14 to 16 digits");
      return;
    }

    setError('');
    setResult(null);
    setLoading(true);

    try {
      const body = {
        certificate_number: searchValue.trim(),
      };

      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.status === 'VALID') {
        setResult(data.data);
      } else {
        setError('No record found');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      {/* Form Section - Narrow and Centered */}
      <div className="container mx-auto max-w-md mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Certificate Verification
        </h1>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Verify Certificate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-center">
              Enter certificate number to verify
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Certificate Number</label>
                <Input
                  type="text"
                  placeholder="Enter Certificate Number"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">Must be 14 to 16 digits</p>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-maritime-teal hover:bg-maritime-teal-light text-primary-foreground"
              >
                <Search className="mr-2 h-4 w-4" />
                {loading ? 'Verifying...' : 'Verify Certificate'}
              </Button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </CardContent>
        </Card>
      </div>

      {/* Result Section - Full Width */}
      {result && (
        <div className="w-full max-w-none">
          <div className="max-w-7xl w-full mx-auto px-4 animate-fade-in">
            <CertificateCard data={result} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
