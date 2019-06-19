import React from "react";

const StorageSelector = ({ Storage, selectedAttributes, attributeSelector }) => {
  return (
    <div className="attribute_selector_container">
      {Storage.map(storage => {
        let { _id, name } = storage;
        let isSelected = selectedAttributes.storageSelection === _id;

        return (
          <div
            key={_id}
            onClick={() => {
              attributeSelector && attributeSelector("Storage", _id);
            }}
            className="size_selector_box"
            style={{
              backgroundColor: isSelected ? "#d9d9d9" : "white"
            }}
          >
            <span className="text-secondary" style={{ fontSize: 10 }}>
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StorageSelector;
