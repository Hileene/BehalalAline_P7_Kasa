import React from 'react'
import './footer.css'
import LogoFooter from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer>
      <div className="kasa-footer">
        <img src={LogoFooter} alt="Logo Kasa" className="logo-footer" />
        <p className="copyrights-text">
          &copy; 2023{' '}
          <a
            href="https://github.com/Hileene/BehalalAline_P7_Kasa/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Aline Behalal
          </a>{' '}
          - Tous droits reservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
