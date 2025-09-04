import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

const ContactFrom = () => {
    const { t } = useTranslation();
    // Define validation schema using Yup
    const schema = yup.object().shape({
        name: yup.string().required(t('nameRequired')),
        email: yup.string().email(t('emailEmail')).required(t('emailRequired')),
        subject: yup.string().required(t('subjectRequired')),
        message: yup.string().required(t('msgRequired')),
    });
        const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });
    const [msg, setMsg] = React.useState('');

    // Handle form submission
    const onSubmit = (data) => {
        router.post('/contact/send', data, {
            onSuccess: () => {
                setMsg(t('contactSuccess'));
            }
        });
    };

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            {msg && <p className='alert alert-success text-center'>{msg}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            {...register("name")}
                        />
                        {errors.name && <b className='text-danger'>x {errors.name.message}</b>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input
                            type="email"
                            placeholder="Email *"
                            {...register("email")}
                        />
                        {errors.email && <b className='text-danger'>x {errors.email.message}</b>}
                    </div>
                    <div className="col-md-12 col-12 mb-6">
                        <input
                            type="text"
                            placeholder="Subject *"
                            {...register("subject")}
                        />
                        {errors.subject && <b className='text-danger'>x {errors.subject.message}</b>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea
                            placeholder="Message"
                            {...register("message")}
                        ></textarea>
                        {errors.message && <b className='text-danger'>x {errors.message.message}</b>}
                    </div>
                    <div className="col-12 text-left mb-6">
                        <button aria-label="submitQuery" disabled={isSubmitting} className="btn btn-primary">
                            {isSubmitting ? <span className="spinner-grow spinner-grow-sm"></span> : 'Send Query'}
                            
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactFrom;
