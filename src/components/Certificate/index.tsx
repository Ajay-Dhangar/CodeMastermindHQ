import React, { useRef } from 'react';
import './Certificate.css';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

interface CertificateProps {
  learnerName: string;
  courseName: string;
}

const Certificate: React.FC<CertificateProps> = ({ learnerName, courseName }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  // const downloadCertificate = async () => {
  //   try {
  //     if (certificateRef.current) {
  //       const canvas = await html2canvas(certificateRef.current);
  //       const pdf = new jsPDF({ orientation: 'portrait' });
  //       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
  //       pdf.save('Certificate.pdf');
  //     } else {
  //       throw new Error('Certificate element not found');
  //     }
  //   } catch (error) {
  //     console.error('Error generating or saving the certificate:', error);
  //   }
  // };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="certificate" ref={certificateRef}>
      <div className="header">
        <img src="/img/logo.png" alt="Site Logo" />
        <div className="site-info">
          <p>{currentDate}</p>
          <p>{'https://cmhq.tech/'}</p>
        </div>
      </div>
      <div className="content">
        <h2>Certificate of Completion</h2>
        <p>This is to certify that</p>
        <h3>{learnerName}</h3>
        <p>has successfully completed the course</p>
        <h3>{courseName}</h3>
      </div>
      <div className="signature">
        <p className="signature-text">Ajay</p>
        <p>Ajay Dhangar</p>
        <p>Founder & CEO</p>
      </div>
      <div className="message">
        <p>Congratulations on your achievement!</p>
      </div>
      <button className="download-button">
        Download Certificate
      </button>
      {/* <button className="download-button" onClick={downloadCertificate}>
        Download Certificate
      </button> */}
    </div>
  );
};

export default Certificate;
