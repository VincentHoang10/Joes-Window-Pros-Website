import { useLocation, Navigate } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const fromForm = location.state?.fromForm;

  if (!fromForm) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className='success-header'>
        <h2>
          THANK YOU!
        </h2>
      </div>

      <div className='content'>
        <div className='success'>
          <span>
            We've received your request and will reach out shortly to provide 
            your estimate. We appreciate the opportunity to earn your business!
          </span>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;