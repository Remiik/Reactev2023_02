import React from 'react';
import HommeImg from '../../public/homme_img.png';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className=' h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-white mr-3'></div>Nouvel arrivage
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>VENTES D'AUTOMNE <br />
            <span className='font-semibold'>HOMME & FEMME</span>
          </h1>
          <Link 
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-white'
          >
            je veux tout voir !
          </Link>
        </div>
        <div className='hidden lg:block opacity-100 '>
          <img src={HommeImg} alt="/" title="Ce mec est inbu de lui-même"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
