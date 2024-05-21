import React from 'react';
import { useNavigate } from 'react-router-dom';

function ISPList({ providers, onSelectISP }) {
    const navigate = useNavigate();

    if (!providers.length) return <div>No ISPs found.</div>;

    const handleSelectISP = (provider) => {
        onSelectISP(provider);
        navigate(`/provider/${provider.name}`);
    };
    

    return (
        <table className="isp-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Lowest Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {providers.map(provider => (
                    <tr className="table-item" key={provider.name}>
                        <td><img src={provider.image} alt={provider.name} width={20} height={20}/></td>
                        <td>{provider.name}</td>
                        <td>₹ {provider.lowest_price}</td>
                        <td>{provider.rating}</td>
                        <button onClick={() => handleSelectISP(provider)}>Open</button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ISPList;







