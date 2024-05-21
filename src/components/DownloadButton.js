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
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = pageWidth - 20; 
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                const heightLeft = pageHeight - imgHeight;
                const position = heightLeft / 2; 
                pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
                pdf.save(`${isp.name}.pdf`);
            });
    };

    return (
        <button onClick={downloadPDF}>Download</button>
    );
}

export default DownloadButton;