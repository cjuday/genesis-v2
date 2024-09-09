import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'swiper/css';
import 'aos/dist/aos.css';
import './assets/css/custom.css';
import './assets/css/admin_styls.css'
import './assets/css/topbar.css'

createInertiaApp({
    resolve: name => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <I18nextProvider i18n={i18n}>
                <App {...props} />
            </I18nextProvider>
        );
    },
});
