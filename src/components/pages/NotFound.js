import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import '../../index.css';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className='container about'>
        <Link to='/'><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Go To Home</Link>
        <div className='not__found'>
          <h3>Page Not Found</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;