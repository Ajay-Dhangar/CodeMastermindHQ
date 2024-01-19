import React from 'react';
import Certificate from '../../src/components/Certificate';

const CertificateComponent = () => {
  const learnerName = "John Doe";
  const courseName = "React Fundamentals";

  return (
    <div>
      <Certificate learnerName={learnerName} courseName={courseName} />
    </div>
  );
};

export default CertificateComponent;