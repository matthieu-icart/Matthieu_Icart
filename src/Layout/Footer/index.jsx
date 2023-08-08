// LOGOS DATAS
import LogosDatas from '../../Datas/LogosDatas';

// FOOTER
function Footer() {
  return (
    <footer className="PopUp">
      {LogosDatas.map((logo, index) => (
        <div key={index} className={`logo logo${index}`}>
          <i className={logo[1]}></i>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
