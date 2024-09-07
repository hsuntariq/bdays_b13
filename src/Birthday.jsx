import React, { useState } from "react";
import SingleBirthday from "./SingleBirthday";
import { bdays } from "./data";

const Birthday = () => {
  const [data, setData] = useState(bdays);

  const handleDelete = () => {
    if (data.length == 0) {
      setData(bdays);
    } else {
      setData([]);
    }
  };

  const remove = (id) => {
    const newBdays = data.filter((item, index) => {
      return item.id !== id;
    });

    setData(newBdays);
  };

  return (
    <>
      <div className="container col-lg-4 mx-auto shadow rounded-3 p-5">
        <h1 className="text-center display-4">{data.length} Birthdays today</h1>

        {data.map((item, index) => {
          return <SingleBirthday rem={remove} {...item} key={item.id} />;
        })}
        <button
          onClick={handleDelete}
          className={`btn ${
            data.length > 0 ? "btn-danger" : "btn-success"
          } w-100 my-2`}
        >
          {data.length > 0 ? "Remove All" : "Refresh All"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
