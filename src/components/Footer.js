import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer bg-dark text-light">
      Made by
      <a
        href="https://github.com/Clumsynite"
        title="Github Profile"
        target="_blank"
        rel="noreferrer"
      >
        Clumsyknight
      </a>
      with
      <i className="material-icons heart">favorite</i>
    </footer>
  );
};

export default Footer;
