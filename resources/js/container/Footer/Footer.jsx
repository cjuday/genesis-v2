import React from 'react';
import Logo from '../../components/logo/Logo';
import { useTranslation } from 'react-i18next';
import FooterLinkContact from '../../components/Footer/FooterLinkContact';
import LogoImg from '../../assets/images/logo/logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer-section section footer-bg-color">
            <div className="container-fluid abtx">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 col-12 mb-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={LogoImg}
                                />
                                <div className="footer-widget-content">
                                    {t('footerSub')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 col-12 mb-6">
                        <FooterLinkContact/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
