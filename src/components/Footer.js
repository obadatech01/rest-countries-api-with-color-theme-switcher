import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
          <p>Challenge by: <Link target="_blank" to="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"> Frontend Mentor</Link></p>
          <p>Coded by: <Link target="_blank" to="https://github.com/obadatech01/rest-countries-api-with-color-theme-switcher"> Obada Yehia</Link></p>
      </footer>
    </>
  );
}

export default Footer;
