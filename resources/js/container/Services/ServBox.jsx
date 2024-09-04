import PropTypes from "prop-types";
import React from 'react';

const ServBox = ({ data,  classOption="icon-box text-center" }) => {
    return (
        <div className={`icon-box serv text-center ${classOption}`}>
            <div className="icon">
                <img src={data.img} className="service-icon"/>
            </div>
            <div className="content">
                <div className="desc">
                    <p>{data.txt}</p>
                </div>
            </div>
        </div>
    )
}

ServBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

export default ServBox;
