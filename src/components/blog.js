import React, { useState } from 'react';
import axios from 'axios';

function Blog() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [newTitle, setNewTitle] = useState('');

    const [postList, setPostList] = useState([]);

    // const addPost = () => {
    //     axios.post('http://localhost:3000/forum', {
    //         postTitle: setTitle,
    //         postBody: setBody
    //     }).then(response => {
    //         setPostList([...postList, response
    //         ]);
    //     });
    // };

    const getPosts = () => {
        axios.get('http://localhost:3000/forum').then((response) => {
            setPostList(response)
        });
    };

    const updateTitlePost = (id) => {
        axios.put('http://localhost:3000/forum', { postTitle: newTitle, id: id }).then(
            (response) => {
                setPostList(postList.map((val) => {
                    return val.id == id ? { id: val.id, postTitle: newTitle, postBody: val.postBody } : val
                }))
            }
        );
    };

    const deletePost = (id) => {
        axios.delete(`http://localhost:3000/forum/${id}`).then((response) => {
            setPostList(postList.filter((val) => {
                return val.id != id
            }))
        })
    };

    return (
        <div className="forumBlog">
            <div>
                <label>Post Title:</label>
                <input type="text" onChange={(event) => {
                    setTitle(event.target.value);
                }}
                />
                <label>Post Body:</label>
                <input type="text" onChange={(event) => {
                    setBody(event.target.value);
                }}
                />
                <button onClick={addPost}>Submit Post</button>
            </div>
            <div>
                <h4>Forum Posts:</h4>
                {postList.map((val, key) => {
                    return (<div>
                        <div>
                            <strong>{val.postTitle}</strong> - {val.postBody}
                        </div>
                        <div>
                            <input type="text" placeholder="New Title" onChange={(event) => {
                                setNewTitle(event.target.value);
                            }} />
                            <button onClick={() => { updateTitlePost(val.id) }}>Update</button>
                            <button onClick={() => { deletePost(val.id) }}>Delete</button>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}


export default Blog;