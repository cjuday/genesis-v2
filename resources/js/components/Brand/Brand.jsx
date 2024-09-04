import React from 'react';

const Brand = ({ data }) => {
    return (
        <div className="brand">
            <a href={"/"}>
                <img src={data} alt="client image" />
            </a>
        </div>
    )
}


export default Brand;
