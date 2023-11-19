import React from 'react';

const subTitle = "Save the day"
const title = (
    <h2 className='title'>Lorem, ipsum dolor sit <b>advance <span>Mastering</span></b>on sales</h2>
)

const desc = "Limited the  offer ! Harruy up"

const Register = () => {
    return (
        <div className='register-section padding-tb pb-0'>
            <div className='container'>
                <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                    <div className='col'>
                        <div className='section-header'>
                            <span className='subtitle'>{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='section-wrapper'>
                            <h4>Register now</h4>
                            <form action="" className='register-form'>
                                <input type="text" name='name' placeholder='userName' className='reg-input'/>
                                <input type="email" name='email' placeholder='Email address' className='reg-input'/>
                                <input type="number" name='number' placeholder='Phone' className='reg-input'/>
                                <button type='submit' className='lab-btn'>
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;