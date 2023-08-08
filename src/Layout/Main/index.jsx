// STYLE
import '../../style.scss';

// PAGES
import Formation from '../../Pages/Formation/index';
import Experiences from '../../Pages/Experiences/index';
import Skills from '../../Pages/Skills/index';
import Home from '../../Pages/Home/index';
import Loisirs from '../../Pages/Loisirs/index';
import Portfolio from '../../Pages/Portfolio/index';
import Contact from '../../Pages/Contact/index';

// MAIN
function Main({ selection }) {
  return (
    <main>
      {selection === 'Formation' ? <Formation /> : null}
      {selection === 'Expériences' ? <Experiences /> : null}
      {selection === 'Skills' ? <Skills /> : null}
      {selection === 'Home' ? <Home /> : null}
      {selection === 'Loisirs' ? <Loisirs /> : null}
      {selection === 'Portfolio' ? <Portfolio /> : null}
      {selection === 'Contact' ? <Contact /> : null}
    </main>
  );
}

export default Main;
