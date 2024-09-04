import React from 'react';

const Breadcrumb = ({title, content, contentTwo, image, color}) => {
    return (
        <div className="page-title-section section section-bg-image section-padding-top overlay-two" style={{backgroundImage: `url(${image})`}}>
            <div className="page-title">
                <div className="container">
                    <h1 className="title" style={{color: color}}>{title}</h1>
                </div>
            </div>
            <div className="page-breadcrumb position-static">
                <div className="container">
                    <ul className="breadcrumb justify-content-center">
                        <li ><a href="/" style={{color: color}}>{content}</a></li>
                        <li className="current" style={{color: color}}>{contentTwo}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;
