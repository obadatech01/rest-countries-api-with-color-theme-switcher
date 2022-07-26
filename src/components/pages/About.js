import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FetchData from '../../store/data';
import Footer from '../Footer';
import Header from '../Header';

function About({getCountryName}) {
  const {about} = useParams();
  const {data} = FetchData(`https://restcountries.com/v2/name/${about}?fullText=true`);
  const [country,setCountry] = useState(data);
  useEffect(() => {
      setCountry(data);
  },[data]); 

  return (
    <>
      <Header />
      <div className='container about'>
        <Link to='/'><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Back</Link>
        {country.length ===1 && (
          <div className='about-body'>
          <img src={country[0].flag} alt={country[0].name} />
          <div className='about-content'>
            <p>{country[0].name}</p>
            <div>
              <div className='side-items'>
                <div>
                  <p>Native Name:&nbsp;</p><span>{country[0].nativeName}</span>
                </div>
                <div>
                  <p>Population:&nbsp;</p><span>{country[0].population.toLocaleString('en-US')}</span>
                </div>
                <div>
                  <p>Region:&nbsp;</p><span>{country[0].region}</span>
                </div>
                <div>
                  <p>Sub Region:&nbsp;</p><span>{country[0].subregion}</span>
                </div>
                <div>
                  <p>Capital:&nbsp;</p><span>{country[0].capital}</span>
                </div>
              </div>
              <div className='side-items'>
                <div>
                  <p>Top Level Domain:&nbsp;</p><span>{country[0].topLevelDomain.map(val => (<>{val + ", "}</>))}</span>
                </div>
                <div>
                  <p>Currencies:&nbsp;</p><span>{country[0].currencies.map(val => (<>{val.code + ", "}</>))}</span>
                </div>
                <div>
                  <p>Languages:&nbsp;</p><span>{country[0].languages.map(val => (<>{val.name + ", "}</>))}</span>
                </div>
                <div>
                  <p>Region Blocs:&nbsp;</p><span>{country[0].regionalBlocs.map(val => (<>{val.name + ", "}</>))}</span>
                </div>
              </div>
            </div>
            <div>
              <p>Border Countries:&nbsp;</p>
              {country[0].borders.length >= 1 && country[0].borders.map((element) => {
                    const countryName = getCountryName(element);
                    return (
                      <Link to={`/${countryName}`} key={element}>
                        {countryName}
                      </Link>
                    );
                  }
              )}
            </div>
          </div>
        </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default About;
