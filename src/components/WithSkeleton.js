import React from "react";
import "../App.css";

import Skeleton from "./Skeleton";

const WithSkeleton = props => {
  return (
    <div>
      <h4 className="mt-5">With Skeleton</h4>
      {props.isLoading
        ? new Array(10).fill(1).map((_, i) => {
            return <Skeleton key={i} />;
          })
        : props.data.map(item => {
            return (
              <li key={item.id} className="item">
                <div>
                  <img className="img" src={item.avatar} alt="" />
                </div>
                <div className="info">
                  <p>
                    <strong>
                      {item.first_name} {item.last_name}
                    </strong>
                  </p>
                  <p>{item.email}</p>
                </div>
              </li>
            );
          })}
    </div>
  );
};

export default WithSkeleton;
