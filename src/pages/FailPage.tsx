import { useLocation, Navigate } from 'react-router-dom';

function FailPage() {
  const location = useLocation();
  const fromForm = location.state?.fromForm;

  if (!fromForm) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className='fail-header'>
        <h2>Oops!</h2>
      </div>

      <div className='content'>
        <div className='fail'>
          <span>
            Something went wrong while submitting your request. Please try again later 
            or contact us directly. We apologize for the inconvenience.
          </span>
        </div>
      </div>
    </>
  );
}

export default FailPage;