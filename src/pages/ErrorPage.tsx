import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ErrorPage() {
  return (
    <>
      <div className="layout-wrapper">
        <NavBar />

        <div className="layout-content">
          <div className='error-header'>
            <h2>
              404 NOT FOUND
            </h2>
          </div>

          <div className='content'>
            <div className='error'>
              <span>
                The page you are looking for cannot be found.
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ErrorPage;