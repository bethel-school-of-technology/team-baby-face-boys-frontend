import React from 'react';


function RPSModal({closeRPS}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeRPS(false)}>X</button>
                <div className="modalHeader">
                    <h3>Rock, Paper, Scissors</h3>
                </div>
                <div className="modalBody">
                    <p>Rock, Paper, Scissors Game Placeholder</p>
                </div>
                <div className="modalFooter">
                </div>
            </div>
        </div>
    );
};

export default RPSModal;