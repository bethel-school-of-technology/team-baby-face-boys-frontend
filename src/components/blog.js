import React, { useState } from 'react';

import Input from './bloginput';
import List from './bloglist';

const Blog = () => {

    let [items, setItems] = useState([]);
    let [inputTxt, setInputTxt] = useState("");

/*     const changeTitle = (e) => {
        setInputTxt(e.target.value)
    } */

    const changeText = (e) => {
        setInputTxt(e.target.value)
    }

    const submitInput = (e) => {
        let newItems = [...items];
        newItems.push({
            name: inputTxt,
            completed: false
        })

        setItems(newItems)
    }

    const onComplete = (complete, idx) => {
        let updatedItems = [...items];

        updatedItems[idx].completed = complete

        setItems(updatedItems)
    }

    return (
        <div>
            <label>Post Title: </label>
           {/*  <Input onChange={changeTitle} onClick={submitInput} title={'Add Post'} /> */}
            <label>Post Body : </label>
            <Input onChange={changeText} onClick={submitInput} title={'Add Post'} />
            <h4>Forum Posts:</h4>
            <List items={items} onComplete={onComplete} />
        </div>
    );

}

export default Blog;