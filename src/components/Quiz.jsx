import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import axios from 'axios'
import base64 from 'base-64'

export default function Quiz() {

  const [quote, setQuote] = useState(localStorage.getItem("quote"));
  const [favorites, setFavorites] = useState(localStorage.getItem("favorites"));
  const [save_string, setsave_string] = useState(localStorage.getItem("save_string") ? localStorage.getItem("save_string") : base64.encode('[]'));

  useEffect(() => {
    localStorage.setItem("quote", quote);
  }, [quote])

  useEffect(() => {
    localStorage.setItem("favorites", favorites);
  }, [favorites])

  useEffect(() => {
    localStorage.setItem("save_string", save_string);
  }, [save_string])

  

  function add_object() {
    // Unwrap my Base64 string back into an object
    let my_obj = JSON.parse(base64.decode(save_string));
    
    // Make any modifications to the object. In this case I'm adding something to the array.
    my_obj = my_obj.concat([{
      quote: quote,
      color: "red",
      author: "Somebody"
    }])

    // Wrap my object back into a base64 string
    let encoded_obj = base64.encode(JSON.stringify(new_object))

    // I can then save this base64 string to state.
    setsave_string(encoded_obj);
  }


  const api_url = "https://api.api-ninjas.com"; 
  const api_function = "/v1/quotes"; //?limit=1
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY)
  const headers = {
    headers: {
      "X-Api-Key": API_KEY
    }
  }



  function generateQuiz() {
    axios.get(api_url + api_function, headers)
    .then(response => {
      console.log(response.data);
      setQuote(response.data[0].quote);
    })
    .catch(err => {
      console.error("Error retrieving data, did you set you .env file?");
      console.log(err);
    })
  }

  return (
    <>
    <Button text="Generate Quote" onClick={() => generateQuiz()} />
    <Button text="Add Example" onClick={() => add_object()} />
    <Button text="Get Example" onClick={() => get_object()} />
    <div>{quote}</div>
    </>
  )
}
