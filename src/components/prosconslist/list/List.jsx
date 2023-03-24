import React, { useState, useCallback, useRef } from "react";
import Item from "./item/Item";
import styles from "./List.module.css";

const List = ({ title }) => {
  const itemsRef = useRef([""]);
  const [items, setItems] = useState(itemsRef.current);

  const handleInputChange = useCallback((e, index) => {
    const { value } = e.target;
    const updatedItems = [...itemsRef.current];
    updatedItems[index] = value;

    if (index === itemsRef.current.length - 1 && value !== "") {
      updatedItems.push("");
    }

    if (index !== itemsRef.current.length - 1 && value === "") {
      updatedItems.splice(index, 1);
    }

    itemsRef.current = updatedItems;
    setItems(updatedItems);
  }, []);

  return (
    <div className={styles.list_column}>
      <h3>{title}</h3>
      <div className={styles.list_item}>
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            value={item}
            onChange={handleInputChange}
            className={styles.single_item}
          />
        ))}
      </div>
    </div>
  );
};

export default List;