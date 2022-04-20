import React, { useEffect, useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  //state variables for questions
  const [questions, setQuestions] = useState(data);
  console.log(questions);

  return (
    <main>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </main>
  );
}

export default App;
