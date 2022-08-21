import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";
import Dadjokes from "../components/dadjokes";

const Profilepage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [user, setUserProfile] = useState({});
  const [post, setPost] = useState("");

  let token = JSON.parse(localStorage.getItem("token"))

  function fetchProfile() {
    console.log(token)

    axios.get("http://localhost:3000/profile/" + token).then(response => {


      setUserProfile(response.data)

      console.log(response.data.Posts)
    })

    // axios.get("http://localhost:3000/profile/:jwt").then((response) => {
    //     setPost.JSON.stringify(response.data);
    //   });
  }

  useEffect(() => {

    fetchProfile();

  }, [])


  const handleSubmit = e => {
    e.preventDefault();
    const Posts = { postTitle, postBody };

    console.log(Posts)

    fetch("http://localhost:3000/profile/" + token, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Posts)
    }).then(() => {
      setPostBody('');
      setPostTitle('');
      console.log('new post added');
      fetchProfile();
    })
  };


  // const generatePosts = () => {
  //   if (user.Posts === null || !user.Posts) return;

  //   return user.Posts.map((p, i) => (
  //     <>
  //      <p> {p.postTitle}</p><br></br>
  //       <p>{p.postBody}</p>
  //     </>
  //   ))

  // }


  return (
    <div className="container bg-primary d-flex flex-column">
            <div className="row">
        <div className="col p-3 text-center">
          <Navbar />
        </div>
      </div>

      <div className="row px-5 mt-3 text-center">
        <div
          className="col-sm  
 mx-auto"
        >
          <div>
            <h4 className="titles">Welcome, {user.gamerID}!</h4>
          </div>
          <div>
            <img
              className="profpic mx-auto d-block my-5"
              src={require("../../src/images/page_bkgnds/jan.jpg")}
            />
          </div>
        </div>{/* ---- Look down there, Between these col is missing the "-sm" annotation */}
        <div className="col-sm ">
          <div className="high-scores_profpage mx-auto  p-4">
            <h1 className="titles mb-3">Your High Scores:</h1>
            <div className="scores"><br></br>
            <h4 className="">Breakout: 9,900</h4><br></br>
            <h4>Connect 4: 600</h4><br></br>
            <h4>Rock, Paper, Scissors: 850</h4></div>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-sm my-auto ">
          <div>
            <div className="post_area py-4 px-3 ">
              <div>
                <h4 className="titles  text-md-left text-center">Your Most Recent Post:</h4>
                </div><br></br>
                <div>
                  {/* {generatePosts()} */}
                  <h5>{user.postTitle}</h5><br></br>
                  <h5>{user.postBody}</h5>
                </div><br></br>
              <form>
                <label className="font-weight-bold mr-3 prof_label">Post Title:</label>
                <input className="mt-1 mb-3 input" type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} /><br></br>
                <label className="mt-2 font-weight-bold prof_label">Post Body:</label>
                <textarea className="mt-1 mb-3 " value={postBody} onChange={(e) => setPostBody(e.target.value)} /><br></br>
                <button className="forum_button-g btn-success rounded mt-4 mr-5" onClick={handleSubmit}>
                  Add Post
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm mt-3 mx-auto text-center">
          <Dadjokes />
        </div>
      </div>
      <div className="row height align-items-end text-center">
        <div className="col ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
