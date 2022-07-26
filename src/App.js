import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import FetchData from './store/data';

function App() {  
  const {data} = FetchData("https://restcountries.com/v2/all");
  const getCountryName = (code) => {
    let countryName;
    const country = data.filter((element)=>{
      return element.alpha3Code === code;
    })  
    countryName = country[0].name
    return countryName;
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:about' element={<About getCountryName={getCountryName} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
