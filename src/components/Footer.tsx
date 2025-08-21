import logo from '../assets/images/Logo.webp';
import facebookLogo from '../assets/images/facebook.svg';
import instagramLogo from '../assets/images/instagram.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-img'>
        <img src={logo} alt="Joe's Window Pros Logo" />
      </div>

      <div className='contact'>
        <div>
          <h5>Contact Us</h5>
          <p>
            joeswindowpros@gmail.com<br />
            (612) 478-8428
          </p>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/joeswindowpros/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" />
          </a>
          <a href="https://www.facebook.com/people/Joes-Window-Pros/61578314305058/" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook Logo" />
          </a>
        </div>
      </div>

      <div className='copyright'>
        <p>&copy; 2025 Joe's Window Pros. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;