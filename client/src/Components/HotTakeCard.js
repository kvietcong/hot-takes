import React from "react";

const HotTakeCard = ({ take }) => {
    console.log(take)
    return (
        <div className={`card text-white bg-primary my-3`} style={{ height: "150px" }}>
            <div className="card-header d-flex justify-content-between">
                <span>{take.userID}</span>
                <span className="ml-auto">
                    {take.likes} <i className="fab fa-hotjar"></i>
                     | {take.dislikes} <i className="fas fa-snowflake"></i>
                </span>
            </div>
            <div className="card-body">
                <div className="card-text text-left">
                    <h6>{take.title}</h6>
                    <p>{take.body}t</p>
                </div>
            </div>
        </div>
    );
};

export default HotTakeCard;
