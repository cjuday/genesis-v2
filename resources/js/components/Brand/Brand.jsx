import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const Brand = ({ data }) => {
    return (
        <div className="brand">
            <a href={"/"}>
                <img src={data.img_src} alt="client image" />
            </a>
        </div>
    )
}

Brand.propTypes = {
    data: PropTypes.object
}



export default Brand;
