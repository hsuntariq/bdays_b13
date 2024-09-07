import React from "react";

const SingleBirthday = ({ id, name, image, age, rem }) => {
  return (
    <>
      <div className="d-flex my-2 justify-content-between align-items-center">
        <div className="left">
          <div className="d-flex align-items-center gap-4">
            <img
              width={70}
              height={70}
              className="rounded-circle"
              src={image}
              alt=""
            />
            <div className="d-flex flex-column">
              <h4 className="m-0">{name}</h4>
              <p className="text-secondary m-0">{age} years</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button onClick={() => rem(id)} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleBirthday;
