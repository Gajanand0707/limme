import Image from 'next/image';
import React from 'react';
type ImageProps = {
    Cardimage : string;
    heading: string;
    content : string
}
const Bannercard: React.FC<ImageProps> = ({Cardimage, heading, content})=>{
    return (
        <div className='bannercard'>
        <div className='flex gap-5 text-white' >
            <div className=' w-[110px] h-[110px]'>
                <Image src={Cardimage} className='rounded-[100%] w-[110px] h-full' alt='image' width={110} height={1000}/> 
            </div>
            <div className='flex-1'>
              <h6 className='text-yellow mb-3'>{heading}</h6> 
              <p>{content}</p>
            </div>
        </div>
        </div>
    );
}

export default Bannercard;
