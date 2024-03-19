import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__link-item">
            <a href="/home">Home</a>
          </li>
          <li className="footer__link-item">
            <a href="/about">About</a>
          </li>
          <li className="footer__link-item">
            <a href="/contactus">Contact Us</a>
          </li>
          <li className="footer__link-item">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="footer__link-item">
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 Your Blog Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
