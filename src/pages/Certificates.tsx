import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    setError('');
    setResult(null);
    setLoading(true);

    const params = new URLSearchParams();
    if (searchType === "certificate") {
      params.append('certificate_number', searchValue);
    } else if (searchType === "name") {
      params.append('participant_name', searchValue);
    } else if (searchType === "passport") {
      params.append('passport_number', searchValue);
    }

    try {
      const response = await fetch(`http://localhost:8000/api/verify?${params}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        const err = await response.json();
        setError(err.detail);
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Certificate Verification
        </h1>
        <Card className="mb-8">
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
                    <SelectItem value="name">Participant Name</SelectItem>
                    <SelectItem value="passport">Passport Number</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder={
                    searchType === "certificate" ? "Enter Certificate Number" :
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

        {result && (
          <Card className="border-maritime-gold animate-fade-in">
            <CardHeader className="bg-maritime-gold/10">
              <CardTitle className="text-xl text-primary">Certificate Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-semibold text-foreground">{result.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Course</p>
                  <p className="font-semibold text-foreground">{result.course}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Certificate ID</p>
                  <p className="font-semibold text-foreground">{result.certificate_id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Issue Date</p>
                  <p className="font-semibold text-foreground">{result.issue_date}</p>
                </div>
              </div>
              {result.image_url && (
                <div className="flex justify-center pt-4">
                  <img
                    src={result.image_url}
                    alt="Certificate"
                    className="max-w-full max-h-96 object-contain"
                  />
                </div>
              )}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  This certificate is issued by Angel Maritime Academy Pvt. Ltd. and is valid.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Certificates;
