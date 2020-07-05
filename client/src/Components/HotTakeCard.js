import React from "react";

const HotTakeCard = () => {
    return (
        <div className={`card text-white bg-primary my-3`} style={{ height: "150px" }}>
            <div className="card-header d-flex justify-content-between">
                <span>test</span>
                <span className="ml-auto">
                    2 <i className="fab fa-hotjar"></i> | 3 <i className="fas fa-snowflake"></i>
                </span>
            </div>
            <div className="card-body">
                <div className="card-text text-left">
                    <h6>Test maybe long lol maybe lol maybe it is long lol</h6>
                    <p>This is a test</p>
                </div>
            </div>
        </div>
    );
};

export default HotTakeCard;
