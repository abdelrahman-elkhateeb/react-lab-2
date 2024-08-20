import plus from "../../imgs/plus.svg";
import minus from "../../imgs/minus.svg";
import { useState } from "react";

function Question({ questions }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setActiveQuestion((prevId) => (prevId === id ? null : id));
  };

  return (
    <ul>
      {questions.map((question) => (
        <li
          className="mb-5 flex items-center justify-between rounded-xl bg-cyan-400 p-5 shadow-lg"
          key={question.id}
          onClick={() => toggleQuestion(question.id)}
        >
          <div>
            <h4 className="text-xl font-bold">{question.question}</h4>
            <p
              className={
                activeQuestion === question.id
                  ? `mt-2 h-auto italic text-gray-700`
                  : `h-0 overflow-hidden`
              }
            >
              {question.answer}
            </p>
          </div>
          <img src={activeQuestion === question.id ? minus : plus} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default Question;
