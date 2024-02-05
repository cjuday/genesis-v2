import PropTypes from "prop-types";
import React from 'react';


const Logo = ({image}) => {
    return(
        <div className="header-logo">
            <a href="/">
                <img className="dark-logo" src={image} alt="Agency Logo" />
            </a>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
