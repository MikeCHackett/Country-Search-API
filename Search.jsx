import React, { useState } from 'react'
import axios from 'axios';

export const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        const response = await axios.get (
            `https://restcountries.com/v3.1/name/${searchQuery}`
        );
        setLoading(false);
        setCountry(response.data[0]);
    }


  return (
    <div className='search-container'>
        <div className='input-button-container'>
            <input
            className='input-text'
            type="text"
            placeholder="Enter country name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
        {country && !loading && (
            <div className='country-container'>
            <p>
                <span>Capital</span>:{country.capital[0]}
            </p>
            <p>
                <span>Population</span>:{country.population}
            </p>
            <p>
                <span>Currency</span>:{country.currencies.EUR.symbol}
            </p>
            <p>
                <span>Continent</span>:{country.continents}
            </p>
        </div>
        )}

        {loading && <h2 className='loading'>Loading...</h2>}
    </div>
  )
};
