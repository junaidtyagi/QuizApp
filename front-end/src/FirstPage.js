import React, { useState, useRef, useEffect } from 'react';
import './FirstPage.css';

export const FirstPage = ({ records }) => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(records[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    setQuestion(records[index]);
  }, [index, records]);

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === records.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setLock(false);
      optionArray.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(records[0]);
    setLock(false);
    setScore(0);
    setResult(false);
  };

  return (
    <>
      <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        {result ? (
          <>
            <h2> You Scored {score} out of {records.length}</h2>
            <button className='button' onClick={reset}>
              Reset
            </button>
          </>
        ) : (
          <>
            {question ? (
              <>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                  <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
                    {question.option1}
                  </li>
                  <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
                    {question.option2}
                  </li>
                  <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
                    {question.option3}
                  </li>
                  <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
                    {question.option4}
                  </li>
                </ul>
                <button className='button' onClick={next}>
                  Next
                </button>
                <div className='index'>
                  {index + 1} of {records.length} Questions
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};
