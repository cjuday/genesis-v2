import React from "react";

const ProductList = () => {
    return(
        <div className="container-fluid">
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 pt-6 text-center">
                {brnData && brnData.length>0 ? brnData.map((data) => {
                    return(
                        <div key={data.id} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                <img src={data.image_url} className="prod-img"
                                onMouseOver={e => (e.currentTarget.src = data.image_url2)}
                                onMouseOut={e => (e.currentTarget.src =data.image_url)}/>
                                <h6 className="text-center pt-2 mb-2">{data.name}</h6>
                        </div>
                    ); 
                }) : <div className="container text-center pb-4 mb-10">
                    <h2>No data has been added for this particular category yet.</h2>
                </div>}
            </div>
        </div>
    )
}

export default ProductList;