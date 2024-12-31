import React from 'react';
import Bannercard from './Bannercard'; 
import './Homebanner.css';

const Homebanner = () => {
    return (
        <div className='Homebanner'>
            <div className='slider-items text-white px-4 pt-[300px] pb-[300px]'>
                <div className='container'>
                    <h1>
                        <span className='text-yellow'>Limousine</span> <br />
                        VIP Transfers
                    </h1>
                    <p className='body-text-big'>for your Success in Business</p>
                </div>
            </div>
            <div>
                <div className='banner-cards py-[70px] bg-dark px-[4px]'>
                    <div className='container overflow-hidden px-4'>
                        <div className='banner-card gap-[90px] grid grid-cols-3'>
                            <Bannercard
                                Cardimage="/images/bannerbg.png"
                                heading="Airport Transfers"
                                content="Pellentesque semper dui eget fermentum sagittis. Cur abitur bibendum id ante."
                            
                            />
                            <Bannercard
                                Cardimage="/images/bannerbg.png"
                                heading="Airport Transfers"
                                content="Pellentesque semper dui eget fermentum sagittis. Cur abitur bibendum id ante."
                            />
                            <Bannercard
                                Cardimage="/images/bannerbg.png"
                                heading="Airport Transfers"
                                content="Pellentesque semper dui eget fermentum sagittis. Cur abitur bibendum id ante."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homebanner;
