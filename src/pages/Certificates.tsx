import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CertificateCard from "@/components/CertificateCard";

const Certificates = () => {
  const [searchType, setSearchType] = useState("certificate");
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
    if (searchType === 'certificate') {
      const trimmedValue = searchValue.trim();
      if (!/^\d{15}$/.test(trimmedValue)) {
        setError("Certificate number must be exactly 15 digits");
        return;
      }
    }

    setError('');
    setResult(null);
    setLoading(true);

    try {
      const body: any = {};
      if (searchType === 'passport') {
        body.passport = searchValue.trim();
      } else if (searchType === 'certificate') {
        body.certificate_number = searchValue.trim();
      }

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
              Enter certificate details to verify
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Verify By</label>
                <Select value={searchType} onValueChange={setSearchType}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select verification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certificate">Certificate Number</SelectItem>
                    <SelectItem value="passport">Passport Number</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder={
                    searchType === "certificate" ? "Enter Certificate Number (must be 15 digits)" :
                    searchType === "name" ? "Enter Participant Name" :
                    "Enter Passport Number"
                  }
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full"
                />
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
