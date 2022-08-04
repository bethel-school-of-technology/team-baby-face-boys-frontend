import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Leaderboard = () => {
    return (
        <div class="container">
            <Navbar />
            <h2>Top Rabbit Leaderboard</h2>
            <div>
                <h4>Breakout</h4>
                <ol>
                    <li>Winner</li>
                </ol>
            </div>
            <div>
                <h4>Connect 4</h4>
                <ol>
                    <li>Winner</li>
                </ol>
            </div>
            <div>
                <h4>Memory Game</h4>
                <ol>
                    <li>Winner</li>
                </ol>
            </div>
            <div>
                <h4>Rock Paper Scissors</h4>
                <ol>
                    <li>Winner</li>
                </ol>
            </div>
            <div>
                <h4>Whack-A-Mole</h4>
                <ol>
                    <li>Winner</li>
                </ol>
            </div>
            <Footer />
        </div>
    );
};

export default Leaderboard;

