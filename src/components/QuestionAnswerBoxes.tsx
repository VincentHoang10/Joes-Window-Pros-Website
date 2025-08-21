import { useState } from 'react';
import addIcon from '../assets/images/add.svg';
import minusIcon from '../assets/images/minus.svg';


const questions = [
  'What services do you offer?',
  'Do you offer recurring or annual plans?',
  'What areas do you serve?',
  'Do I need to be home during the cleaning?',
  'Do you clean window screens and sills?',
  'How much does it cost?',
  'How do I book a service?',
]

const answers = [
  `We specialize in exterior residential and commercial window cleaning. 
  This includes windows, screens, sills, and frames. We also handle 
  post-construction cleanups and offer annual cleaning plans.`,
  `Yes! We offer customizable annual cleaning plans to keep your windows 
  looking great year-round. Reach out to set one up that fits your schedule 
  and needs.`,
  `We serve Blaine, MN and nearby areas including Ham Lake, Andover, Coon Rapids, 
  and surrounding neighborhoods.`,
  `Nope — as long as windows are accessible and screens are left out (if needed), 
  you do not need to be home for exterior cleanings.`,
  `Yes, we clean screens and sills as part of our full exterior service — just let us 
  know what you need when booking.`,
  `Pricing depends on the number of windows, size, and access. Get a fast, free quote by 
  submitting your info through the Request a Quote page or by contacting us directly.`,
  `Just fill out the Request a Quote form on our website or contact us by phone or email. 
  We’ll respond quickly to confirm everything.`,
]

function QuestionAnswerBoxes() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(questions.length).fill(false));
  
  function toggleQuestion(index: number) {
    setOpenIndexes(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  }
  
 return (
  <div className='questionsAnswers'>
    {
      questions.map((question, index) => (
        <div className='box' key={index}>
          <div className='question'>
            <span>{question}</span>
            <button type='button' className='toggle-button' onClick={() => toggleQuestion(index)}>
              {openIndexes[index] ? <img src={minusIcon} alt='Minus Icon'/> : <img src={addIcon} alt='Add Icon'/>}
            </button>
          </div>
                
          {
            openIndexes[index] && (
              <div className='answer'>
                <p>
                  { answers[index] }
                </p>
              </div>
            )
          }
        </div>
      ))
    }
  </div>
 );
}

export default QuestionAnswerBoxes;