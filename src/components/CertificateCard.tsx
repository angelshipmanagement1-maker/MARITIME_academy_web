import React from 'react';

interface CertificateData {
  firstname: string;
  lastname: string;
  certificate_name: string;
  certificate_number: string;
  start_date: string;
  end_date: string;
  issue_date: string;
  expiry_date: string;
  validity_status: string;
  certificate_image: string | null;
  certificate_image_base64?: string;
  image_message?: string;
}

interface CertificateCardProps {
  data: CertificateData;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ data }) => {
  // Format date from YYYY-MM-DD to DD-MM-YYYY
  const formatDate = (dateStr: string) => {
    if (!dateStr || dateStr === 'N/A') return dateStr;
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  const getValidityColor = (status: string) => {
    if (status === 'Certificate is valid') return 'text-green-600';
    if (status === 'Certificate is invalid') return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-maritime-gold/10 p-4 border-b">
        <h2 className="text-2xl font-bold text-primary text-center">Certificate Details</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Candidate Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary border-b pb-2">Candidate Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">First Name</p>
              <p className="font-semibold text-foreground">{data.firstname}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Name</p>
              <p className="font-semibold text-foreground">{data.lastname}</p>
            </div>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="space-y-4 border-t pt-6">
          <h3 className="text-lg font-semibold text-primary border-b pb-2">Certificate Details</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Certificate Name</p>
              <p className="font-semibold text-foreground">{data.certificate_name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Certificate Number</p>
              <p className="font-semibold text-foreground">{data.certificate_number}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Start Date</p>
              <p className="font-semibold text-foreground">{formatDate(data.start_date)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">End Date</p>
              <p className="font-semibold text-foreground">{formatDate(data.end_date)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Issue Date</p>
              <p className="font-semibold text-foreground">{formatDate(data.issue_date)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expiry Date</p>
              <p className="font-semibold text-foreground">{formatDate(data.expiry_date) || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Status & Image */}
        <div className="space-y-4 border-t pt-6">
          <h3 className="text-lg font-semibold text-primary border-b pb-2">Status & Image</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Validity Status */}
            <div>
              <p className="text-sm text-muted-foreground">Validity Status</p>
              <p className={`font-semibold text-lg ${getValidityColor(data.validity_status)}`}>
                {data.validity_status}
              </p>
            </div>

            {/* Certificate Image */}
            <div className="flex flex-col items-center space-y-2">
              {data.certificate_image_base64 ? (
                <img
                  src={`data:image/png;base64,${data.certificate_image_base64}`}
                  alt="Certificate"
                  className="max-w-full max-h-48 object-contain rounded border"
                />
              ) : data.certificate_image ? (
                <img
                  src={data.certificate_image}
                  alt="Certificate"
                  className="max-w-full max-h-48 object-contain rounded border"
                />
              ) : (
                <div className="w-full max-w-xs h-32 bg-gray-100 rounded border flex items-center justify-center">
                  <p className="text-sm text-muted-foreground text-center px-4">
                    {data.image_message || 'Image not available'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">
            This certificate is issued by Angel Maritime Academy Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;