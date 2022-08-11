import React, { useState } from "react";

const API_URL = "http://api.icndb.com/jokes/random";

function Dadjokes() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  return (<div className="">
    
    <div className="row">
      <div className="col text-center">

        <div className="joke_text">
          <p className=" jokeholder">{joke}</p>
        </div><div class="joke_button">
        <button onClick={generateJoke}>Get a Joke</button></div></div>
      </div></div>
  );
}

export default Dadjokes;
