import React, { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  const [postList, setPostList] = useState([]);
  const [gamerID, setGamerID] = useState([]);
  

  let token = JSON.parse(localStorage.getItem("token"))

  let user = JSON.parse(localStorage.getItem("user"))


  function fetchPostList() {

      axios.get("http://localhost:3000/forum/" + token).then((response) => {
        setGamerID(response.data.postList)

        console.log('response postList', setPostList(response.data.postList))
        setPostList(response.data.postList);
      });
    
  }

  useEffect(() => {


    // getPosts();

    fetchPostList();

    getGamerID();


  }, [])

  
  const handleSubmit = e => {
    e.preventDefault();
    const postList = { postTitle, postBody };

    console.log(postList)

    fetch("http://localhost:3000/forum/" + token, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postList)
    }).then(() => {
      setPostBody('');
      setPostTitle('');
      console.log('new post added');
      fetchPostList();
    })
  };

  // const addPost = () => {
  //   axios.post("http://localhost:3000/forum/" + token, {
  //     postTitle: postTitle,
  //     postBody: postBody,
  //   }).then(() => {
  //     setPostList([...postList, {
  //       postTitle: postTitle,
  //       postBody: postBody,
  //     },
  //     ]);
  //   });
  // };


  const getGamerID = () => {
    axios.get("http://localhost:3000/forum/" + token).then((response) => {
      setGamerID(response.data.gamerID);
    });
  };

  // const getPosts = () => {
  //   axios.get("http://localhost:3000/forum/" + token).then((response) => {
  //     console.log('response postlost', setPostList(response.data.postList))
  //     setPostList(response.data.postList);
  //   });
  // };

  // const updatePostTitle = (id) => {
  //   axios.put("http://localhost:3000/forum/" + token, {
  //     postTitle: newPostTitle,
  //     id: id,
  //   }).then(() => {
  //     setPostList(
  //       postList.map((val) => {
  //         return val.id == id
  //           ? { id: val.id, postTitle: newPostTitle, postBody: val.postBody }
  //           : val;
  //       })
  //     );
  //   });
  // };

  // const updatePostBody = (id) => {
  //   axios.put("http://localhost:3000/forum/" + token, {
  //     postBody: newPostBody,
  //     id: id,
  //   }).then(() => {
  //     setPostList(
  //       postList.map((val) => {
  //         return val.id == id
  //           ? { id: val.id, postTitle: val.postTitle, postBody: newPostBody }
  //           : val;
  //       })
  //     );
  //   });
  // };

  const updatePost = (id) => {
    axios.put("http://localhost:3000/forum/" + token, {
      postTitle: newPostTitle,
      postBody: newPostBody,
      id: id,
    }).then(() => {
      // setPostList(
      //   postList.map((val) => {
      //     return val.id == id 
      //       ? { id: val.id, postTitle: newPostTitle, postBody: newPostBody }
      //       : val;
      //   })
      // );
      fetchPostList();
    });
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:3000/forum/${token}/${id}`).then(() => {
      setPostList(
        postList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="row text-primary m-3">
      <div className="col forumBlog p-5">
        <div className="row mb-4">
          <div>

<h2 className=" bold">Share a Carrot!</h2>
            <label className="mt-3 mr-3 bold">Title:</label>
            <input
              className="my-1 input"
              type="text" value={postTitle}
              onChange={(event) => {
                setPostTitle(event.target.value);
              }}
            />
            <br></br>
            <label className="mt-3 mr-2 bold">Message:</label>
            <input
              className="my-1  input"
              type="text" value={postBody}
              onChange={(event) => {
                setPostBody(event.target.value);
              }}
            />


            <br></br>

            <button className="mt-3 rounded btn-success" onClick={handleSubmit}>
              Add Message
            </button>
          </div>
        </div>
        <div className=" bold row forumBlog_plate p-5 my-3">
          <div>
            
        <h4 className="mb-4">Bunny Blog:</h4>
            {postList.map((val) => {
              console.log(val);
              return (
                <div>
                  <div>
                    <h5 className="mt-4">Posted By: {val.User.gamerID}</h5>
                    <h6>{val.postTitle}</h6>
                    <p>{val.postBody}</p>
                  </div>

                  {user.id == val.UserId && 
                    <div>
                      <input className="mb-2"
                        type="text" placeholder="Edit Title"
                        onChange={(event) => {
                          setNewPostTitle(event.target.value);
                        }}
                      /><br></br>
                      <input
                        type="text" placeholder="Edit Message"
                        onChange={(event) => {
                          setNewPostBody(event.target.value);
                        }}
                      />
                      <br></br>
                      <button className="mt-2 mr-1  forum-btn-success" onClick={() => {
                        updatePost(val.id);
                      }}
                      >
                        Update
                      </button>
                      <button className="mr-3  btn-warning"
                        onClick={() => {
                          deletePost(val.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
