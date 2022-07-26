import { useState, useEffect } from 'react';
import FetchData from '../store/data';
import { Link } from 'react-router-dom';

let url;
const Card = ({searchFilter, regionFilter}) => {
  
  url = searchFilter ? `https://restcountries.com/v2/name/${searchFilter}` : "https://restcountries.com/v2/all";  

  const {loading, data} = FetchData(url);
  const [countries,setCountries] = useState([]);

  useEffect(() => {
    if(searchFilter) {
       setCountries(data)
    } else {
        if(regionFilter === "All") setCountries(data);        
        else {
          setCountries(data.filter((country)=>{
            return country.region === regionFilter;
          }));
        }
    }
  },[searchFilter,data,regionFilter]);

  return (
    <>
      {loading && <h1 className='loading'>Loading ...</h1>}
      {!loading && countries.length && countries.map((country) => {
          return (
            <Link key={country.name} to={`/${country.name}`} style={{width:'22%'}}>
              <div className="countries-body_items">
                <img src={country.flag} alt={country.name} />
                <p>{country.name}</p>
                <div>
                  <p>Population:&nbsp;</p><span>{country.population.toLocaleString('en-US')}</span>
                </div>
                <div>
                  <p>Region:&nbsp;</p><span>{country.region}</span>
                </div>
                <div>
                  <p>Capital:&nbsp;</p><span>{country.capital}</span>
                </div>
              </div>
            </Link>
        )})}   
    </>
  );
}

export default Card;
