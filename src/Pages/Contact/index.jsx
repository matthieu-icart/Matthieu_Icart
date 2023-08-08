// CONTACT
function Contact() {
  return (
    <section className="Contact">
      <h2>CONTACT</h2>
      <article className="PopUp">
        <a
          href="https://github.com/matthieu-icart"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          <p>Mon Profil GitHub</p>
        </a>
        <div className="circle"></div>
      </article>

      <article className="PopUp">
        <a href="mailto:matthieuicartpro@gmail.com">
          <i className="fa-solid fa-envelope"></i>
          <p>matthieuicartpro@gmail.com</p>
        </a>
        <div className="circle"></div>
      </article>

      <article className="PopUp">
        <a href="http://chess.com/" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-chess"></i>
          <p>Et vous pouvez me défier sur Chess.com : Matthieu_Icart 🤓</p>
        </a>
        <div className="circle"></div>
      </article>
    </section>
  );
}

export default Contact;
