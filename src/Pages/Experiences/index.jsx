// EXPERIENCES DATAS
import ExperiencesDatas from '../../Datas/ExperiencesDatas';

// EXPERIENCES
function Experiences() {
  /* REVERSE */
  const ReverseList = ExperiencesDatas.slice().reverse();

  // RETURN
  return (
    <section className="Experiences">
      <h2>EXPERIENCES</h2>
      {ReverseList.map((experience, index) => (
        <article key={index} className="PopUp">
          {/* Experience */}
          <p>{experience[0]}</p>
          <h3>{experience[1]}</h3>
          <p>{experience[2]}</p>
          {/* Square */}
          <div className="smallCircle"></div>
        </article>
      ))}
    </section>
  );
}

export default Experiences;
