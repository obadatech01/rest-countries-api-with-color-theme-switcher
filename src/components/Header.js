import { useState } from 'react';

function Header() {
  const body = document.body;
  let GetTheme = localStorage.getItem('PageTheme');
  const [theme, setTheme] = useState(GetTheme);
  if (GetTheme && GetTheme === 'dark') {
    body.classList.add("dark");
  }
     
  
  const handleToggleTheme = () => {
    body.classList.toggle('dark');
    
    if(!body.classList.contains("dark")){
      localStorage.setItem("PageTheme" , "light");
      setTheme('light');
    }else{
      localStorage.setItem("PageTheme" , "dark");
      setTheme('dark');
    }    
    
  }

  return (
    <>
      <header>
        <div className='container'>
          <h2>Where in the world?</h2>
          <button onClick={handleToggleTheme}><i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`} ></i> {theme} Mode</button>
        </div>
      </header>
    </>
  );
}

export default Header;
