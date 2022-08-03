import React from 'react';

const List = ({ items }) => {
    return (
        <div className="list">
            {items.map((item, idx) => {
                return (
                    <div key={idx}>
                        {item.name}
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default List;