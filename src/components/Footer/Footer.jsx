import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Copyright © 2024, CryptoPlace by{' '}
        <a
          href="https://github.com/pratyaushghosh"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold' }}
        >
          Pratyaush Ghosh
        </a>{' '}
        - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
