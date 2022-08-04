import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blog from '../components/blog';
import { useState } from 'react';

const Forum = () => {
    return (
        <div class="container">
            <Navbar />
            <h1>Rabbit Water Cooler</h1>
            <h4>Create Post:</h4>
            <Blog />
            <h4>Rabbits:</h4>
            <ul>
                <li>Users</li>
            </ul>
            <Footer />
        </div>

    );
};

export default Forum;