import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';
import axios from 'axios';
import Blog from '../components/blog';


const Profilepage = () => {
    const [user, setUserProfile] = useState({
        gamerID: "",
        postTitle: "",
        postBody: ""
    });

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');

    // const [newTitle, setNewTitle] = useState('');

    // const [postList, setPostList] = useState([]);

    // const addPost = () => {
    //     axios.post('http://localhost:3000/forum', {
    //         postTitle: setTitle,
    //         postBody: setBody
    //     }).then(response => {
    //         setPostList([...postList, response
    //         ]);
    //     });
    // };

    // const getPosts = () => {
    //     axios.get('http://localhost:3000/forum').then((response) => {
    //         setPostList(response)
    //     });
    // };

    // const updateTitlePost = (id) => {
    //     axios.put('http://localhost:3000/forum', { postTitle: newTitle, id: id }).then(
    //         (response) => {
    //             setPostList(postList.map((val) => {
    //                 return val.id == id ? { id: val.id, postTitle: newTitle, postBody: val.postBody } : val
    //             }))
    //         }
    //     );
    // };

    // const deletePost = (id) => {
    //     axios.delete(`http://localhost:3000/forum/${id}`).then((response) => {
    //         setPostList(postList.filter((val) => {
    //             return val.id != id
    //         }))
    //     })
    // };


    // const handleChange = (event) => {

    //     setUser((preValue) => {
    //         return {
    //             ...preValue,
    //             [event.target.name]: event.target.value
    //         }
    //     })

    // }

    // const onTitleChange = e => setTitle(e.target.value);
    // const onBodyChange = e => setBody(e.target.value);

    // let userId = JSON.parse(localStorage.getItem("userId"))


    // axios.get("http://localhost:3000/User" + user.gamerID ).then(userProfile => {
    //     console.log(userProfile)
    //     setUserProfile(userProfile);
    // })





    useEffect(() => {

        console.log(user)

        function fetch() {
            axios.get("http://localhost:3000/profile").then(response => {
                console.log(response)

                setUserProfile(response.data)
            })
        }

        fetch();

    }, [])


    // const handleSubmit = e => {
    //     e.preventDefault();

    //     const data = { title, body };
    //     const requestOptions = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(data)
    //     };
    //     fetch("https://localhost:3000/User", requestOptions)
    //         .then(response => response.json())
    //         .then(res => console.log(res));
    // };
    return (
        <div>
            <Navbar />
            <div>
                <h1>Welcome,  {user.gamerID}</h1>
            </div>
            <div>
                <h3>Profile Photo Placeholder</h3>
            </div>
            <div>
                <h3>High Scores Placeholder</h3>
            </div>
            <div>
                <h3>Joke of the Day Placeholder</h3>
            </div>
            <div>
            <div>
                <Blog/>
            </div>
                {/* <div className="Post"> */}
                    {/* <label>Post Title:</label>
                    <input type="text" onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    />
                    <label>Post Body:</label>
                    <input type="text" onChange={(event) => {
                        setBody(event.target.value);
                    }}
                    />
                    <button onClick={addPost}>Submit Post</button> */}
                {/* </div> */}
                <div>
                    {/* <h4>Forum Posts:</h4> */}
                    {/* {postList.map((val, key) => {
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
                    })} */}
                    {/* <form>
                        <input value={title}
                            onChange={handleChange} required /><br></br>
                        <textarea value={body}
                            onChange={handleChange} required /><br></br>
                        <button type="submit" onClick={handleChange}>
                            Create Post
                        </button>
                    </form> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profilepage;
