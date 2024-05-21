import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ISPList from './components/ISPList';
import ISPDetail from './components/ISPDetail';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import './styles.css';

function App() {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [selectedISP, setSelectedISP] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data to simulate API response
    const mockData = {
      providers: [
        {
          name: "ISP Name 1",
          lowest_price: 450,
          rating: 4.5,
          max_speed: 100,
          description: "Description for ISP 1",
          contact_no: "1234567890",
          email: "contact@isp1.com",
          image: "https://via.placeholder.com/150",
          url: "https://isp1.com"
        },
        {
          name: "ISP Name 2",
          lowest_price: 600,
          rating: 4.0,
          max_speed: 200,
          description: "Description for ISP 2",
          contact_no: "0987654321",
          email: "contact@isp2.com",
          image: "https://via.placeholder.com/150",
          url: "https://isp2.com"
        },
        {
          name: "ISP Name 3",
          lowest_price: 350,
          rating: 3.0,
          max_speed: 150,
          description: "Description for ISP 3",
          contact_no: "6789054321",
          email: "contact@isp3.com",
          image: "https://via.placeholder.com/150",
          url: "https://isp3.com"
        },
        {
          name: "ISP Name 4",
          lowest_price: 500,
          rating: 4.2,
          max_speed: 250,
          description: "Description for ISP 4",
          contact_no: "6789054321",
          email: "contact@isp4.com",
          image: "https://via.placeholder.com/150",
          url: "https://isp4.com"
        },
        {
          name: "ISP Name 5",
          lowest_price: 450,
          rating: 4.5,
          max_speed: 100,
          description: "Description for ISP 5",
          contact_no: "1234567890",
          email: "contact@isp5.com",
          image: "https://via.placeholder.com/150",
          url: "https://isp5.com"
        },
        


      ]
    };

    setProviders(mockData.providers);
    setFilteredProviders(mockData.providers);
    setIsLoading(false);

    // Uncomment the following lines when you have the real API endpoint
    // axios.get('https://your-api-url.com/providers')
    //   .then(response => {
    //     console.log("API Response:", response.data);
    //     setProviders(response.data.providers || []);
    //     setFilteredProviders(response.data.providers || []);
    //   })
    //   .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSearch = (query) => {
    const filtered = providers.filter(provider => 
      provider.name.toLowerCase().includes(query.toLowerCase()) ||
      provider.lowest_price.toString().includes(query) ||
      provider.rating.toString().includes(query)
    );
    setFilteredProviders(filtered);
  };

  const handleSort = (criteria) => {
    const sorted = [...filteredProviders].sort((a, b) => {
      if (criteria === 'price') {
        return a.lowest_price - b.lowest_price;
      } else if (criteria === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
    setFilteredProviders(sorted);
  };

  return (
    <Router>
      <div className="App">
        <Header totalISP={filteredProviders.length} apiHits={748} />
        <SearchBar onSearch={handleSearch} />
        <SortBar onSort={handleSort} />
        <Routes>
          <Route path="/" element={<ISPList providers={filteredProviders} onSelectISP={setSelectedISP} />} />
          <Route path="/provider/:id" element={<ISPDetail isp={selectedISP} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
