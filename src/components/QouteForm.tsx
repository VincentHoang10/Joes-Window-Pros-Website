import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuoteForm() {
  const navigate = useNavigate();
  const formInitialDetails = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Submit');
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  function onFormUpdate(category: keyof typeof formInitialDetails, value: string) {
    setFormDetails({
      ...formDetails,
      [category]: value.trimStart(),
    });
  }

  // helper function to validate form inputs
  function validateForm() {
    const { name, street, city, state, zip, email, phone, message } = formDetails;
    let isValid = true;
    let errors: { [key: string]: string } = {};

    // check for empty required fields and add errors to the object
    if (!name) {
      errors.name = 'Name is required.';
      isValid = false;
    }

    if (!street) {
      errors.street = 'Street address is required.';
      isValid = false;
    }

    if (!city) {
      errors.city = 'City is required.';
      isValid = false;
    }

    if (!state) {
      errors.state = 'State is required.';
      isValid = false;
    }

    if (!zip) {
      errors.zip = 'Zip code is required.';
      isValid = false;
    } else {
      const zipPattern = /^\d{5}(-\d{4})?$/;

      if (!zipPattern.test(zip)) {
        errors.zip = 'Please enter a valid ZIP code.';
        isValid = false;
      }
    }

    if (!email) {
      errors.email = 'Email is required.';
      isValid = false;
    } else {
      if (!email.includes('@')) {
        errors.email = 'Email must include an "@" symbol.';
        isValid = false;
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
          errors.email = 'Please enter a valid email address format.';
          isValid = false;
        }
      }
    }

    if (!phone) {
      errors.phone = 'Phone number is required.';
      isValid = false;
    } else {
      const digitsOnly = phone.replace(/\D/g, '');
    
      if (digitsOnly.length !== 10) {
        errors.phone = 'Please enter a valid 10-digit US phone number.';
        isValid = false;
      }
    }

    if (!message) {
      errors.message = 'Message is required.';
      isValid = false;
    }

    setFieldErrors(errors);

    return isValid;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // validate before submission
    if (!validateForm()) {
      return; // stop the form submission if there are validation errors
    }

    setButtonText('Submitting...');

    const formData = new FormData(e.target as HTMLFormElement);

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    setButtonText('Submit');
    setFormDetails(formInitialDetails);

    if (res.success) {
      console.log('Message sent successfully');
      navigate('/success', { state: { fromForm: true } });
    } else {
      console.error('Submission failed:', res.message);
      navigate('/fail', { state: { fromForm: true } });
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='input'>
          <input
            name='name'
            type='text'
            value={formDetails.name}
            placeholder='Name'
            onChange={(e) => onFormUpdate('name', e.target.value)}
          />
          {
            fieldErrors.name && 
            <span className='error-message'>
              { fieldErrors.name }
            </span>
          }
        </div>

        <div className='input'>
          <input
            name='street'
            type='text'
            value={formDetails.street}
            placeholder='Street Address'
            onChange={(e) => onFormUpdate('street', e.target.value)}
          />
          {
            fieldErrors.street && 
            <span className='error-message'>
              { fieldErrors.street }
            </span>
          }
        </div>
        
        <div className='input'>
          <input
            name='city'
            type='text'
            value={formDetails.city}
            placeholder='City'
            onChange={(e) => onFormUpdate('city', e.target.value)}
          />
          {
            fieldErrors.city && 
            <span className='error-message'>
              { fieldErrors.city }
            </span>
          }
        </div>
        
        <div className='input'>
          <input
            name='state'
            type='text'
            value={formDetails.state}
            placeholder='State'
            onChange={(e) => onFormUpdate('state', e.target.value)}
          />
          {
            fieldErrors.state && 
            <span className='error-message'>
              { fieldErrors.state }
            </span>
          }
        </div>
        
        <div className='input'>
          <input
            name='zip'
            type='text'
            value={formDetails.zip}
            placeholder='Zip (e.g. 12345 or 12345-6789)'
            onChange={(e) => onFormUpdate('zip', e.target.value)}
            maxLength={10}
          />
          {
            fieldErrors.zip && 
            <span className='error-message'>
              { fieldErrors.zip }
            </span>
          }
        </div>

        <div className='input'>
          <input
            name='email'
            type='text'
            value={formDetails.email}
            placeholder='Email (e.g. user@example.com)'
            onChange={(e) => onFormUpdate('email', e.target.value)}
          />
          {
            fieldErrors.email && 
            <span className='error-message'>
              { fieldErrors.email }
            </span>
          }
        </div>

        <div className='input'>
          <input
            name='phone'
            type='tel'
            value={formDetails.phone}
            placeholder='Phone (e.g. 1234567890)'
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/\D/g, '');
              onFormUpdate('phone', digitsOnly);
            }}
            maxLength={10}
          />
          {
            fieldErrors.phone && 
            <span className='error-message'>
              { fieldErrors.phone }
            </span>
          }
        </div>

        <div className='input'>
          <textarea
            name='message'
            value={formDetails.message}
            placeholder='Message'
            onChange={(e) => onFormUpdate('message', e.target.value)}
          />
          {
            fieldErrors.message && 
            <span className='error-message'>
              { fieldErrors.message }
            </span>
          }
        </div>

        <button type='submit'><span>{buttonText}</span></button>
      </form>
    </>
  );
}

export default QuoteForm;