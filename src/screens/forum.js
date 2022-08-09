import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Blog from "../components/blog";
import { useState } from "react";

const Forum = () => {
  return (<div>
    <div className="container bg-primary d-flex flex-column">
      <div className="row">
        <div className="col p-3 text-center">
          <Navbar />
          <h1>Rabbit Water Cooler</h1>
        </div>
      </div>
      <div className="container bgnd_img-forum ">
        <div className="row">
          <div className="col-9">
            <Blog />
          </div>
          <div className="col-sm-3 p-5 text-dark forumBlog">
            <h4>Rabbits:</h4>
            <ul>
              <li>Username</li>
              <li>Username</li>
              <li>Username</li>
              <li>Username</li>
            </ul>
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
