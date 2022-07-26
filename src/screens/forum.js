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
    <div className="container descroller bg-primary d-flex flex-column">
      <div className="row">
        <div className="col pt-3 text-center">
          <Navbar />
        </div>
      </div>
          <h1 className="rabbit-title py-3 text-center">Rabbit Water Cooler</h1>
      <div className="container bgnd_img-forum ">
        <div className="row">
          <div className="col md-3 col mx-auto">
            <Blog />
          </div>
          <div className="col-md-3  m-3 d-none d-sm-none d-md-block  p-4 text-dark rabbits_list ">
            <h4 className="text-center underline">Rabbits</h4>
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
        <div className="col text-center mb-5 forum_footer">
          <Footer />
        </div>
    </div>
  </div>
  );
};

export default Forum;
