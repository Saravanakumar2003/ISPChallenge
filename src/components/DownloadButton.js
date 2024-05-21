import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function DownloadButton({ isp }) {
  const downloadPDF = () => {
    const input = document.getElementById('isp-detail');
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 300;
        const pageHeight = 300; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const heightLeft = pageHeight - imgHeight;
        const position = heightLeft / 2; // Center the image vertically
        pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
        pdf.save(`${isp.name}.pdf`);
      });
  };

  return (
    <button onClick={downloadPDF}>Download</button>
  );
}

export default DownloadButton;