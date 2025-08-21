import QuoteForm from "../components/QouteForm";

function RequestPage() {
  return (
    <>
      <div className='request-header'>
        <h2>
          REQUEST A QUOTE
        </h2>
      </div>

      <div className='content'>
        <div className='request'>
          <div className='section'>
            <p>
              Fill out the form below and we'll get back to you shortly with a fast, 
              no-obligation estimate.
            </p>
          </div>

          <div className='section'>
            <p>
              We provide professional window cleaning for both residential and commercial 
              properties throughout Blaine and surrounding areas.
            </p>
          </div>

          <div className='ending'>
            <p>
              In Your Message, Please Include:
            </p>
            <ul>
              <li>
                Number of windows
              </li>
              <li>
                Screens to be cleaned (Yes / No / Unsure)
              </li>
              <li>
                Timeline or preferred date
              </li>
              <li>
                Any special instructions or access notes (e.g. locked gates, pets, etc.)
              </li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </div>
    </>
  )
}

export default RequestPage;