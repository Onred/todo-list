import React, { useState } from 'react'
import Button from '../common/Button'
import axios from 'axios'

export default function Quiz() {

  const [quizData, setQuizData] = useState([]);

  const api_url = "https://quizapi.io"; 
  const api_function = "/api/v1/questions"; //?limit=1
  const api_key = import.meta.env.VITE_API_KEY;
  console.log(api_key)
  const headers = {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": api_key
    }
  }

  function generateQuiz() {
    axios.get(api_url + api_function, headers)
    .then(response => {
      console.log(response.data);
      setQuizData(response.data);
    })
    .catch(err => {
      console.error("Error retrieving data, did you set you .env file?");
      console.log(err);
    })
  }

  return (
    <>
    <Button text="Generate Quiz" onClick={() => generateQuiz()} />
    {quizData.map((question) =>
    <div key={question.id}>{question.question}</div>)}
    </>
  )
}
