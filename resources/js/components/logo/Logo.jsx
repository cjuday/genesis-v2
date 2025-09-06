import PropTypes from "prop-types";
import React, {useState, useEffect} from 'react';


const Logo = ({image, image2}) => {
     const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return(
        <div className="header-logo">
            <a href="/">
                <img
                    src={isDesktop ? image : image2}
                    alt="Logo"
                    width={isDesktop ? "190" : "140"}
                    height={isDesktop ? "48" : "35"}
                    loading="lazy"
                />
            </a>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
