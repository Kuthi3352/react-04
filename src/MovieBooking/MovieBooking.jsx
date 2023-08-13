import React from "react";
import ChairList from "./ChairList";
import Result from "./Result";
import data from "./data.json";

const MovieBooking = () => {
  return (
    <div className="background">
      <div className="filter">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="text-center mb-5"style={{
              color:"yellow"
            }}>Đặt vé xem phim </h1>
            <div className="p-2 fs-3 text-white text-center mb-3 manHinh">
              Màn Hình
            </div>
            <ChairList data={data} />
          </div>
          <div className="col-4">
            <Result />
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default MovieBooking;
