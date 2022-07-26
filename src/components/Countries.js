import { useState } from 'react';
import Card from './Card';




function Countries() { 
  const [regionFilter, setRegionFilter] = useState('All');
  const [searchFilter, setSearchFilter] = useState(undefined); 
  const [inputSearch, setInputSearch] = useState(undefined); 
    
  const region = ['All', 'Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic'];   
  const handleRegionFilter = (e) => {
    setRegionFilter(e.target.value)
    setSearchFilter(undefined);
    setInputSearch('');
  }

  return (
    <div className="countries  container">
      <div className='countries-header'>
        <div className="search">
          <form onSubmit={e => e.preventDefault()}>
            <i className="fas fa-search"></i>
            <input type='search' value={searchFilter} onChange={(e) => {setSearchFilter(e.target.value);setInputSearch(e.target.value)}} placeholder='search for a country...' />
          </form>
        </div>
        <div className='filter'>
          <select onChange={handleRegionFilter} id="region">
            {region.map((value, index) => <option key={index}>{value}</option>)}
          </select>
        </div>
      </div>
      <div className='countries-body'>
        <Card searchFilter={searchFilter} regionFilter={regionFilter} />
      </div>
    </div>
  );
}

export default Countries;
