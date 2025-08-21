import logo from '../assets/images/Logo.webp';

function NavBar() {
  return (
    <>
      <div className='nav-bar'>
        <a href='/home'>Home</a>
        <a href='/services'>Services</a>
        <a href='/about'>About</a>

        <a href='/request'>
          <button type='button'>REQUEST A QUOTE</button>
        </a>
      </div>

      <div className='top-title'>
        <img src={logo} alt="Joe's Window Pros Logo" />

        <h1>
          JOE'S WINDOW PROS
        </h1>
      </div>
    </>
  );
}

export default NavBar;