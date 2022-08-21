import React, { useState } from "react";

const API_URL = "http://api.icndb.com/jokes/random";

function Dadjokes() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  return (
    <div className="">
        <div className="row mb-3">
          <div className="col text-center">
              <button  className="joke_button" onClick={generateJoke}>Get Joke</button>
          </div>
        </div>
      <div className="row">
        <div className="col text-center">
          <div>
            <p className=" jokeholder">{joke}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dadjokes;
