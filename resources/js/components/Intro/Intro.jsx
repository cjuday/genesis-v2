import React from 'react';

const Intro =  ({data}) => {
    return (
        <div className="intro-section overlay section" style={{backgroundImage: `url(${data.img})`}}>

            <div className="container">
                <div className="row">

                    <div className="col align-self-center">
                        <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8" style={{textAlign: `${data.text_align}`}}>
                            <h2 className="title" style={{color:`${data.color}`}}>{data.title}</h2>
                            <h2 className="title2" style={{color:`${data.color}`}}>{data.title_2}</h2>
                            <h2 className="title3" style={{color:`${data.color}`}}>{data.title_3}</h2>
                            <h2 className="title4" style={{color:`${data.color}`}}>{data.title_4}</h2>
                            <a href={"/contact"} className="btn btn-primary btn-hover-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Intro
