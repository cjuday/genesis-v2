import React, { useEffect, lazy, Suspense } from "react";
import SEO from '../components/SEO';
import ScrollToTop from '../components/ScrollToTop';

// Lazy-loaded components
const Header = lazy(() => import('../partials/header/Header'));
const IntroSlider = lazy(() => import("../container/IntroSlider/IntroSlider"));
const HomeAbout = lazy(() => import('../components/About/HomeAbout'));
const BrandContainer = lazy(() => import("../container/Brand/BrandContainer"));
const CertContainer = lazy(() => import("../container/Certificate/CertContainer"));
const Footer = lazy(() => import('../container/Footer/Footer'));

const Home = () => {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                throttleDelay: 99,
                debounceDelay: 50,
                once: true, // animate only once
            });
        });
    }, []);

    return (
        <React.Fragment>
            <SEO title="Genesis - One Stop Business Solution in Bangladesh" />
                <Header />
                <IntroSlider />

            <Suspense>
                <HomeAbout />
            </Suspense>

            <Suspense>
                <BrandContainer />
            </Suspense>

            <Suspense>
                <CertContainer />
            </Suspense>

            <Suspense>
                <Footer />
            </Suspense>

            <ScrollToTop />
        </React.Fragment>
    );
}

export default Home;
