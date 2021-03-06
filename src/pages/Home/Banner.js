import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen px-12 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img width={'700px'} src={chair} />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;