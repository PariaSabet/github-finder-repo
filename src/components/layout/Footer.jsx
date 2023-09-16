function Footer() {

    const FooterYear = new Date().getFullYear();


  return (
    <footer className="footer p-10 bg-10 bg-gray-700 text-primary-content footer-center">
      <div className="container">
        <span className="text-muted">Footer</span>
        <p> Copyright {FooterYear} </p>
      </div>
    </footer>
  );
}

export default Footer;