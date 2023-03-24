import React from "react";

const Item = ({ index, value, onChange, className }) => (
  <div className={className} key={index}>
    <span>{index + 1}.</span>
    <input type="text" value={value} onChange={(e) => onChange(e, index)} />
  </div>
);
export default Item;
