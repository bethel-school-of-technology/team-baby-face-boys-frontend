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


  useEffect(() => {


    function fetch() {
      console.log(token)

      axios.get("http://localhost:3000/profile/" + token).then(response => {


        setUserProfile(response.data)

        console.log(response.data.Posts)
      })

      axios.get("http://localhost:3000/profile/:jwt").then((response) => {
          setPost.JSON.stringify(response.data);
        });
    }

    fetch();

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
      console.log('new post added')
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

      <div className="row mt-3">
        <div
          className="col-sm  
 mx-auto"
        >
          <div>
            <h3>Welcome, {user.gamerID}!</h3>
          </div>
          <div>
            <img
              className="profpic mx-auto d-block my-5"
              src={require("../../src/images/page_bkgnds/jan.jpg")}
            />
          </div>
        </div>
        <div className="col-sm ">
          <div className="high-scores_profpage mx-auto  p-4">
            <h3>Your High Scores:</h3>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-sm  my-auto ">
          <div>
            <div className="Post ">


              <div>
                <h3>Your Most Recent Post:</h3>
                </div><br></br>
                <div>
                  {/* {generatePosts()} */}
                  <h5>{user.postTitle}</h5><br></br>
                  <h5>{user.postBody}</h5>
                </div><br></br>
              <form>
                <label className="mr-3">Post Title:</label>
                <input className="my-3 input" type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} /><br></br>

                <label className="mr-3">Post Body:</label>
                <textarea value={postBody} onChange={(e) => setPostBody(e.target.value)} /><br></br>
                <button className="mt-3" onClick={handleSubmit}>
                  Add New Post:
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
