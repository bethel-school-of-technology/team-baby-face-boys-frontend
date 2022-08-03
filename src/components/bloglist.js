import React from 'react';

const List = ({ items, onComplete }) => {
    return (
        <div className="list">
            {items.map((item, idx) => {
                return (
                    <div>
                        <Item item={item} idx={idx} onComplete={onComplete} />
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}



const Item = ({item, idx, onComplete}) => {

    const complete = (e) => {
        onComplete(e.target.checked, idx)
    }
    return (
        <div className="item">
            <input type="checkbox" checked={item.completed} onChange={complete} />
            <span>{item.name}</span>
        </div>
    )
}

export default List;