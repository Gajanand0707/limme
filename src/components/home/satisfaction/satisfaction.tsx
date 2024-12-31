import React from 'react';
import Satisfactionimage from '../../../../public/images/about-limmo.png.png'
import Image from 'next/image';
import Luxurycarscard from './Luxurycarscard';
const Satisfaction = () => {
    return (
        <div className='satisfaction py-28'>
            <div className='container'>
                <div className='grid grid-cols-12 items-center gap-14'>
                    <div className='col-span-4'>
                        <h3><span className='text-yellow'>Luxury Cars</span> for Maximum Satisfaction</h3>
                            <p className='mt-2 mb-14'>Nullam sed ultricies erat, nec euismod metus. Morbi porttitor
                            sapien vitae leo scelerisque. Nullam sed ultricies erat.</p>
                            <button className='button bg-yellow text-dark'>Read More</button>
                    </div>
                    <div className='col-span-8'>
                        <Image src={Satisfactionimage} alt='Satisfactionimage' />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-12 mt-20'>
                <Luxurycarscard
                title="Cadillac Limousine XTS"
                content="Insured, leather interior, air conditioning, rain sensor, panoramic roof   "
                seats="4 seats"
                mechanic="Diesel"
                diesel="Mechanic"
                />
                 <Luxurycarscard
                title="Cadillac Limousine XTS"
                content="Insured, leather interior, air conditioning, rain sensor, panoramic roof   "
                seats="4 seats"
                mechanic="Diesel"
                diesel="Mechanic"
                />
                 <Luxurycarscard
                title="Cadillac Limousine XTS"
                content="Insured, leather interior, air conditioning, rain sensor, panoramic roof   "
                seats="4 seats"
                mechanic="Diesel"
                diesel="Mechanic"
                />
                </div>
               
            </div>
        </div>
    );
}

export default Satisfaction;
