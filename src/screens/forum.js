import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Blog from "../components/blog";
import { useState, useEffect } from "react";
import axios from "axios";


const Forum = () => {

  // let user = JSON.parse(localStorage.getItem("user"))

  let token = JSON.parse(localStorage.getItem("token"))

  const [userList, setUserList] = useState([]);

  useEffect(() => {

    getUserList();


  }, [])

  const getUserList = () => {
    axios.get("http://localhost:3000/forum/" + token).then((response) => {
      setUserList(response.data.userList);
    });

  };

  return (<div>
    <div className="container bg-primary d-flex flex-column">
      <div className="row">
        <div className="col p-3 text-center">
          <Navbar />
        </div>
      </div>
      <div className="container bgnd_img-forum ">
        <div className="row">
          <div className="col md-3 col mx-auto">
          <h1 className="title_text mt-3">Rabbit Water Cooler</h1>
            <Blog />
          </div>
          <div className="col-md-3  m-3 d-none d-sm-none d-md-block  p-4 text-dark forumBlog ">
            <h4>Rabbits:</h4>
            {userList.map((val, key) => {
              console.log(val);
              return (
                <div>
                  <div>
                    <h5>{val.gamerID}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row footer">
        <div className="col text-center p-3">
          <Footer />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Forum;
