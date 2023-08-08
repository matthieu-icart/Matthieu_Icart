// HOME
function Home() {
  // NAMES
  const name = 'Icart';
  const letterName = name.split('');
  const preName = 'Matthieu';
  const letterPreName = preName.split('');

  // RETURN
  return (
    <section className="Home">
      <h2>HOME</h2>
      {/* Name */}
      <div className="Name">
        {letterName.map((letter, index) => (
          <p key={index} className={`PopUp letterName${index}`}>
            {letter}
          </p>
        ))}
      </div>
      {/* FirstName */}
      <div className="PreName">
        {letterPreName.map((letter, index) => (
          <p key={index} className={`PopUp letterPreName${index}`}>
            {letter}
          </p>
        ))}
      </div>
      <h1 className="PopUp">Développeur Web</h1>
      <div className="homePageCircle"></div>
    </section>
  );
}

export default Home;
