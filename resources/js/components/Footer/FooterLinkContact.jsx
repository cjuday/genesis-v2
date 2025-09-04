import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterLinkContact = () => {
    const { t } = useTranslation();
    return (
        <div className="footer-widget">
            <h4 className="footer-widget-title">{t('contact')}</h4>
            <div className="footer-widget-content">
                <ul>
                    <li>
                        <i className="fa-solid fa-location-dot"></i> House # 320(1st Floor), Road # 04,
                        <p className="ftr">Mirpur D.O.H.S, Dhaka-1216, Bangladesh</p>
                    </li>
                    <li>
                        <i className="fa-solid fa-phone"></i> 880251040131
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i> info@genesis-bd.com
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default FooterLinkContact;
