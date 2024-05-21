import React from 'react';
import DownloadButton from './DownloadButton';


function ISPDetail({ isp }) {
  if (!isp) return <div>Loading...</div>;

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: isp.name,
        text: isp.description,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Your browser does not support the Share API');
    }
  }

  return (
    <div className="isp-detail" id="isp-detail">
      <h2>{isp.name}</h2>
      <img src={isp.image} alt={isp.name} />
      <p>{isp.description}</p>
      <p>Max Speed: {isp.max_speed}</p>
      <p>Rating: {isp.rating} stars</p>
      <p>Contact: {isp.contact_no}</p>
      <p>Email: {isp.email}</p>
      <p>Min Plan: ₹ {isp.lowest_price}</p>
      <div className="isp-actions">
        <button onClick={() => window.open(isp.url, "_blank", "noreferrer")}>Visit Website</button>
        <button onClick={handleShareClick}>Share</button>
        <DownloadButton isp={isp} />
      </div>
      <button className="isp-actions" onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default ISPDetail;
