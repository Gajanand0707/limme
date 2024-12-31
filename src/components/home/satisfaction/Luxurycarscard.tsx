import Image from 'next/image';
import React from 'react';
// import Luxurycars from '../../../../public/images/about-limmo.png.png'
import { PiSeatbeltFill } from "react-icons/pi";

type ImageProps = {
    title: string;
    content : string;
    seats:string;
    diesel:string;
    mechanic:string
}

const Luxurycarscard: React.FC<ImageProps> = ({ content,title,mechanic, seats,diesel,})=>{
    return (
        <div className='luxurycarscard p-12 border-dashed border-2 border-black/10'>
            <Image src="/images/about-limmo.png.png" alt='Luxurycars' width={1000} height={1000}/>
            <h6 className='mt-8'>{title}</h6>
            <p>{content}</p>
            <div className='feature my-10 grid grid-cols-3'>
                <div className='feature-box w-[111px] p-6  text-sm border-black/10 border w-fit text-center'>
                    <PiSeatbeltFill className='mx-auto text-[30px] mb-2 text-yellow' />
                    <p className=''>{mechanic}</p>
                </div>
                <div className='feature-box w-[111px] p-6  text-sm border-black/10 border w-fit text-center'>
                    <PiSeatbeltFill className='mx-auto text-[30px]  mb-2  text-yellow' />
                    <p className=''>{seats}</p>
                </div>
                <div className='feature-box w-[111px] p-6  text-sm border-black/10 border w-fit text-center'>
                    <PiSeatbeltFill className='mx-auto text-[30px] mb-2  text-yellow' />
                    <p className=''>{diesel}</p>
                </div>
            </div>
            <button className='button bg-yellow text-dark'>Get Limousine</button>

        </div>
    );
}

export default Luxurycarscard;
