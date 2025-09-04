import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import SEO from '../components/SEO';

function Login() {
    // Use default values if errors or error are undefined
    const { errors = {}, error = {} } = usePage().props;

    const { data, setData, post, processing } = useForm({
        email: '',
        password: ''
    });

    function submit(e) {
        e.preventDefault();
        post('/login-attempt');
    }

    return (
        <React.Fragment>
            <SEO title="Genesis - One Stop Business Solution in Bangladesh" />
            <div className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-custom">
                <div className="form-container p-5 rounded bg-white">
                    <form onSubmit={submit}>
                        <h3 className="text-center">Sign In</h3>
                        <div className="mb-2">
                            <label htmlFor="email" className="mb-1">Email</label>
                            <input
                                type="text"
                                placeholder="Enter email/Username"
                                className={errors.email ? 'form-control is-invalid' : 'form-control'}
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            {errors.email && <div><span className="text-danger text-sm">{errors.email}</span></div>}
                            {error.email && <div><span className="text-danger text-sm">{error.email}</span></div>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className={errors.password ? 'form-control is-invalid' : 'form-control'}
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                            {errors.password && <div><span className="text-danger text-sm">{errors.password}</span></div>}
                        </div>
                        <div className="d-grid mt-2">
                            <button aria-label="signingIn" className="btn btn-light btn-outline-custom" type="submit" disabled={processing}>
                                {processing ? 'Signing In...' : 'Sign In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
