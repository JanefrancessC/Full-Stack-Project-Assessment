import React, { useState } from "react";

const OrderedData = ({ videos, setVideos }) => {
  const [orderedData, setOrderedData] = useState(true);

  const preferedOrder = () => {
    let tempArray = [...videos];

    if (orderedData) {
      let desc = tempArray.sort((a, b) => b.rating - a.rating);
      setVideos(desc);
    } else {
      let asc = tempArray.sort((a, b) => a.rating - b.rating);
      setVideos(asc);
    }
    console.log(orderedData);
    setOrderedData(!orderedData);
  };
  return (
    <div>
      <button className="buttons Sort" onClick={preferedOrder}>
        Sort
      </button>
    </div>
  );
};

export default OrderedData;
