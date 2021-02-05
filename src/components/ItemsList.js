import React from "react";
import Item from "./Item";

const ItemsList = ({ items, setItems, title }) => {
    return (
        <div className="list-container">
            <h1 className="class-title">{title}</h1>
            <ul className="items-list">
                {items.map((item) => (
                    <Item
                        text={item.text}
                        key={items.id}
                        items={items}
                        item={item}
                        setItems={setItems}
                        type={item.type}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ItemsList;