// LOISIRS DATAS
import LoisirsDatas from '../../Datas/LoisirsDatas';

// LOISIRS
function Loisirs() {
  return (
    <section className="Loisirs">
      <h2>LOISIRS</h2>
      {LoisirsDatas.map((loisir, index) => (
        <article className="PopUp">
          <i key={index} className={loisir[0]}></i>
          <h3>{loisir[1]}</h3>
          <p>{loisir[2]}</p>
          <div className="circle"></div>
        </article>
      ))}
    </section>
  );
}

export default Loisirs;
