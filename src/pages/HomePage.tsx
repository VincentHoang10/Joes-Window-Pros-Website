import QuestionAnswerBoxes from "../components/QuestionAnswerBoxes";

function HomePage() {
  return (
    <>
      <div className='title'>
        <h2>
          TRUST THE PROS, <br />
          JOE'S WINDOW PROS
        </h2>

        <span>PROFESSIONAL WINDOW CLEANING SERVICING BLAINE, MINNESOTA.</span>

        <a href='/request'>
          <button type='button'>REQUEST A QUOTE</button>
        </a>
      </div>

      <div className='content'>
        <div className='intro'>
          <h3>
            JOE'S WINDOWS PROS: CLEAN WINDOWS, ANYWHERE YOU NEED THEM
          </h3>

          <p>
            With Joe's Window Pros, we take pride in making your windows shine. We specialize
            in high-quality residential and commercial window cleaning, offering everything 
            from exterior glass to screens, tracks, and sills. Whether it's a one-time clean 
            or routine maintenance, our mission is to make your windows crystal-clear — saving 
            you time, energy, and hassle.
          </p>

          <p>
            We're proud to serve Blaine and surrounding communities with trusted, on-time service
            backed by our streak-free guarantee. Whether it's your home or your business, Joe's 
            Window Pros is the trusted name for the clean, clear, and polished windows — done 
            right the first time.
          </p>

          <p>
            Trust the pros — Joe's Window Pros.
          </p>
        </div>

        <div className='why'>
          <h3>WHY CHOOSE JOE'S WINDOW PROS?</h3>

          <ol>
            <li>
              <strong>01.</strong><br />
              <h4>SATISFACTION GUARANTEE</h4>
              <p>
                We stand behind our work. If any detail falls short of your expectations, we
                will promptly return to make it right — no questions asked.
              </p>
            </li>
            <li>
              <strong>02.</strong><br />
              <h4>FAMILY-OWNED & OPERATED</h4>
              <p>
                As a family-owned business, we take pride in building trust with each client. 
                Our reputation is built one window — and one relationship — at a time.
              </p>
            </li>
            <li>
              <strong>03.</strong><br />
              <h4>RELIABLE & PROFESSIONAL SERVICE</h4>
              <p>
                Punctual, courteous, and fully equiped — our team delivers consistent,
                high-quality service with every visit, respecting both your time and property.
              </p>
            </li>
            <li>
              <strong>04.</strong><br />
              <h4>ADVANCED DEIONIZATION TECHNOLOGY</h4>
              <p>
                We use professional-grade, deionized water systems that eliminate minerals and 
                impurities — ensuring a spotless, streak-free finish that protects your glass
                and leaves no residue behind.
              </p>
            </li>
            <li>
              <strong>05.</strong><br />
              <h4>HONEST & COMPETITIVE PRICING</h4>
              <p>
                Our pricing is transparent and fair, with no hidden costs. We deliver premium-quality
                results at a price point that reflects real value.
              </p>
            </li>
          </ol>
        </div>

        <QuestionAnswerBoxes />
      </div>
    </>
  )
}

export default HomePage;