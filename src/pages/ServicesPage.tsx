function ServicesPage() {
  return (
    <>
      <div className='service-header'>
        <h2>
          OUR SERVICES
        </h2>
      </div>

      <div className='content'>
        <div className='service'>
          <h3>
            RESIDENTIAL WINDOW CLEANING
          </h3>
          <span>
            Give your home curb appeal with crystal-clear windows that shine from the street.
          </span>

          <div className='section'>
            <p>
              What's Included:
            </p>
            <ul>
              <li>
                Full exterior window glass cleaned using purified deionized water
              </li>
              <li>
                Frame edges wiped and detailed
              </li>
              <li>
                Screens removed and hand-washed
              </li>
              <li>
                Safe ground-level work — no high ladders, no mess
              </li>
              <li>
                Streak-free guarantee
              </li>
            </ul>
          </div>

          <div className='section'>
            <h4>
              Annual Service Available
            </h4>
            <p>
              Schedule once a year and we'll take care of the rest — perfect for 
              spring refreshes or yearly home maintenance.
            </p>
            <ul>
              <li>
                Preferred scheduling
              </li>
              <li>
                Locked-in pricing for repeat clients
              </li>
              <li>
                Annual reminder so you don't have to remember
              </li>
            </ul>
          </div>

          <a href='/request'>
            <button type='button'>REQUEST A QUOTE</button>
          </a>
        </div>

        <div className='service'>
          <h3>
            COMMERCIAL WINDOW CLEANING
          </h3>
          <span>
            Keep your storefront, office, or small building looking professional with clean, 
            spot-free windows.
          </span>

          <div className='section'>
            <p>
              What's Included:
            </p>
            <ul>
              <li>
                Exterior window glass cleaned with high-reach deionized water system
              </li>
              <li>
                Ideal for retail locations, office buildings, and ground-level commercial 
                properties
              </li>
              <li>
                Flexible scheduling — including early morning or weekend options
              </li>
              <li>
                Uniformed, respectful technicians who work efficiently and safely Annual 
                Service Available
              </li>
            </ul>
          </div>

          <div className='section'>
            <h4>
              Annual Service Available
            </h4>
            <p>
              Our annual cleaning option is perfect for business owners who want reliable, 
              no-hassle results.
            </p>
            <ul>
              <li>
                One-time yearly visits
              </li>
              <li>
                Scheduled around your hours
              </li>
              <li>
                Locked-in quote for consistent budgeting
              </li>
            </ul>
          </div>

          <a href='/request'>
            <button type='button'>REQUEST A QUOTE</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default ServicesPage;