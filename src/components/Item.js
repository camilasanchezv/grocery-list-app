import React from "react";

const Item = ({ text, item, items, setItems, key }) => {
    const deleteHandler = () => {
        setItems(items.filter((el) => el.id !== item.id))
    }

    const inCartHandler = () => {
        setItems(items.map(i => {
            if (i.id === item.id) {
                return {
                    ...i, incart: !i.incart
                };
            }
            return i;
        }))
    }
    return (
        <div className={`Item ${item.incart ? "incart" : ""}`}>
            <li>{text}</li>
            <div>
                <button onClick={inCartHandler} className="button incart-button">
                    <i className="fas fa-cart-plus"></i>
                </button>
                <button onClick={deleteHandler} className="button delete-button">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div >
    );
};

export default Item;