// SKILLS DATAS
import SkillsDatas from '../../Datas/SkillsDatas';

// SKILLS
function Skills() {
  return (
    <section className="Skills">
      <h2>SKILLS</h2>
      {SkillsDatas.map((skill, index) => (
        <article key={index} className="PopUp">
          <div className="triangle"></div>
          <h3>{skill[0]}</h3>
          <p>{skill[1]}</p>
        </article>
      ))}
    </section>
  );
}

export default Skills;
