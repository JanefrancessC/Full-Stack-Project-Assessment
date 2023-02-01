import React, { useState } from "react";

const OrderedData = ({ videos }) => {
  const [orderedData, setOrderedData] = useState(true);

  const preferedOrder = () => {
    const asc = videos.sort((a, b) => a.rating - b.rating);
    const desc = videos.sort((a, b) => b.rating - a.rating);

    orderedData ? setOrderedData(asc) : setOrderedData(desc);
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
