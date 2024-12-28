"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Busca realizada:', query);
    };

    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Buscar..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <FaSearch 
                onClick={handleSearch} 
                className="search-icon"
            />
        </div>
    );
}
