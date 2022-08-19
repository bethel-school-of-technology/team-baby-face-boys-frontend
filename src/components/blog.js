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



  useEffect(() => {

    getPosts();

    getGamerID();


  }, [])



  const addPost = () => {
    axios.post("http://localhost:3000/forum/" + token, {
      postTitle: postTitle,
      postBody: postBody,
    }).then(() => {
      setPostList([...postList, {
        postTitle: postTitle,
        postBody: postBody,
      },
      ]);
    });
  };


  const getGamerID = () => {
    axios.get("http://localhost:3000/forum/" + token).then((response) => {
      setGamerID(response.data.gamerID);
    });
  };

  const getPosts = () => {
    axios.get("http://localhost:3000/forum/" + token).then((response) => {
      setPostList(response.data.postList);
    });
  };

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
      setPostList(
        postList.map((val) => {
          return val.id == id
            ? { id: val.id, postTitle: newPostTitle, postBody: newPostBody }
            : val;
        })
      );
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
            <label className="mr-3">Post Title:</label>
            <input
              className="my-3 input"
              type="text"
              onChange={(event) => {
                setPostTitle(event.target.value);
              }}
            />
            <br></br>
            <label className="mr-2">Post Body:</label>
            <input
              className="my-3 input"
              type="text"
              onChange={(event) => {
                setPostBody(event.target.value);
              }}
            />
            <br></br>

            <button className="mt-3" onClick={addPost}>
              Add a New Post
            </button>
          </div>
        </div>
        <h4>Forum Posts:</h4>
        <div className="row forumBlog_plate p-5 my-3">
          <div>
            {/* <button onClick={getPosts}>Get All Posts</button> */}
            {postList.map((val, key) => {
              console.log(val);
              return (
                <div>
                  <div>
                    <h5>{val.gamerID}</h5>
                    <h4>{val.postTitle}</h4>
                    <h5>{val.postBody}</h5>
                  </div>
                  <div>
                    <input
                      type="text"
                      onChange={(event) => {
                        setNewPostTitle(event.target.value);
                      }}
                    /><br></br>
                    <input
                      type="text"
                      onChange={(event) => {
                        setNewPostBody(event.target.value);
                      }}
                    /><br></br>
                    <br></br>
                    <button onClick={() => {
                      updatePost(val.id);
                    }}
                    >
                      Update
                    </button>
                    {/* <button
                      onClick={() => {
                        updatePostTitle(val.id);
                      }}
                    >
                      Update
                    </button> */}
                    {/* <input
                      type="text"
                      onChange={(event) => {
                        setNewPostBody(event.target.value);
                      }}
                    /> */}
                    {/* <button
                      onClick={() => {
                        updatePostBody(val.id);
                      }}
                    >
                      Update
                    </button> */}
                    <button
                      onClick={() => {
                        deletePost(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
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
