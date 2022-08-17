import React, { useState } from "react";
import axios from "axios";

function Blog() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const [postList, setPostList] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"))

  
  const addPost = () => {
    axios.post("http://localhost:3000/forum/:jwt/" + token, {
      postTitle: setPostTitle,
      postBody: setPostBody,
    }).then(() => {
      setPostList([...postList, {
        postTitle: postTitle,
        postBody: postBody,
      },
      ]);
    });
  };

  // const getPosts = () => {
  //   axios.get("http://localhost:3000/forum/" + token).then((response) => {
  //     setPostList.JSON.stringify(response.data);
  //   });
  // };

  const getPosts = () => {
    axios.get ("http://localhost:3000/forum/" + token, {
      postTitle:setPostTitle,
      postBody: setPostBody,
    }).then((response) => {
      setPostList([...postList, response]);
    });
  };

  const updatePostTitle = (id) => {
    axios.put("http://localhost:3000/forum/:id", {
      postTitle: newTitle,
      id: id,
    }).then(() => {
      setPostList(
        postList.map((val) => {
          return val.id == id
            ? { id: val.id, postTitle: newTitle, postBody: val.postBody }
            : val;
        })
      );
    });
  };

  const updatePostBody = (id) => {
    axios.put("http://localhost:3000/:id", {
      postTitle: newBody,
      id: id,
    }).then(() => {
      setPostList(
        postList.map((val) => {
          return val.id == id
            ? { id: val.id, postTitle: newBody, postBody: val.postBody }
            : val;
        })
      );
    });
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:3000/forum/${id}`).then((response) => {
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
              Submit Post
            </button>
          </div>
        </div>
        <h4>Forum Posts:</h4>
        <div className="row forumBlog_plate p-5 my-3">
          <div>
            <button onClick={getPosts}></button>
            {postList.map((val, key) => {
              return (
                <div>
                  <div>
                    <strong>{val.user.postTitle}</strong>
                    <strong> {val.user.postBody}</strong>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="New Title"
                      onChange={(event) => {
                        setNewTitle(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updatePostTitle(val.id);
                      }}
                    >
                      Update
                    </button>
                    <input
                      type="text"
                      placeholder="New Body"
                      onChange={(event) => {
                        setNewBody(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        updatePostBody(val.id);
                      }}
                    >
                      Update
                    </button>
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
