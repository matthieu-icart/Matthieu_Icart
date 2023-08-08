// PORTFOLIO DATAS
import PortfolioDatas from '../../Datas/PortfolioDatas';

// PORTFOLIO
function Portfolio() {
  return (
    <section className="Portfolio">
      <h2>PORTFOLIO</h2>
      {PortfolioDatas.map((projet, index) => (
        <article key={index} className="PopUp">
          <a href={projet[2]} target="_blank" rel="noreferrer">
            <h3>{projet[0]}</h3>
            <p>{projet[1]}</p>
          </a>
        </article>
      ))}
    </section>
  );
}

export default Portfolio;
