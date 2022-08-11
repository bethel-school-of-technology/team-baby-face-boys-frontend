import React from 'react';


function WAMModal({closeWAM}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeWAM(false)}>X</button>
                <div className="modalHeader">
                    <h3>Whack-A-Mole</h3>
                </div>
                <div className="modalBody">
                    <p>Whack-A-Mole Game Placeholder</p>
                </div>
                <div className="modalFooter">
                </div>
            </div>
        </div>
    );
};

export default WAMModal;