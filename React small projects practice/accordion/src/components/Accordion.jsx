import React, { useState } from "react";
import { accordionData } from "./data";

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [enableMultiSel, setEnableMultiSel] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelectedItem(getCurrentId === selectedItem ? null : getCurrentId);
  }
  function multiHandleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSel(!enableMultiSel);
        }}
        className="btn"
      >
        Enable multi Selection
      </button>
      <div className="accordian">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((accordionDataItem) => (
            <div className="item" key={accordionDataItem.id}>
              <div
                onClick={
                  enableMultiSel
                    ? () => multiHandleSelection(accordionDataItem.id)
                    : () => handleSingleSelection(accordionDataItem.id)
                }
                className="title"
              >
                {accordionDataItem.title}
                <span>+</span>
              </div>
              <div className="content">
                {selectedItem === accordionDataItem.id ||
                multiple.indexOf(accordionDataItem.id) !== -1 ? (
                  <div>{accordionDataItem.content}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
