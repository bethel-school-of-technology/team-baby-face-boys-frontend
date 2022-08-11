import React, { useState } from "react";
import Axios from "axios";

function Blog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [newTitle, setNewTitle] = useState("");

  const [postList, setPostList] = useState({
    UserId: "",
    postTitle: "",
    postBody: ""
  });

  const addPost = () => {
    Axios.post("http://localhost:3000/forum", {
      postTitle: setTitle,
      postBody: setBody,
    }).then((response) => {
      setPostList([...postList, response]);
    });
  };

  const getPosts = () => {
    Axios.get("http://localhost:3000/forum").then((response) => {
      setPostList.JSON.stringify(response);
    });
  };

  const updateTitlePost = (id) => {
    Axios.put("http://localhost:3000/forum", {
      postTitle: newTitle,
      id: id,
    }).then((response) => {
      setPostList(
        postList.map((val) => {
          return val.id == id
            ? { id: val.id, postTitle: newTitle, postBody: val.postBody }
            : val;
        })
      );
    });
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3000/forum/${id}`).then((response) => {
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
              className="my-3"
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <br></br>
            <label className="mr-2">Post Body:</label>
            <input
              type="text"
              onChange={(event) => {
                setBody(event.target.value);
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
            {postList.map((val, key) => {
              return (
                <div>
                  <div>
                    <strong>{val.postTitle}</strong> - {val.postBody}
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
                        updateTitlePost(val.id);
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
