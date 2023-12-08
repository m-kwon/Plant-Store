import React from "react";
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import AboutHero from './AboutHero'
import aboutImg from 'assets/aboutImg.jpg'

const About = () => {
  return (
    <div className='h-screen'>
      <Header />
      <AboutHero />
      <div className=" text-gray-700 bg-white min-h-0 h-auto">
        <div className='w-9/12 text-center m-auto'>
            <h1 className='font-display text-2xl md:text-4xl m-12'>Our Humble Beginnings</h1>
            <div className='font-body leading-loose text-sm md:text-base text-center flex flex-col w-full 2xl:w-1/2 2xl:m-auto space-y-6'>
              <p>
              In 2015, John Doe lived in a small, drab apartment in Los Angeles.
              As John grew into his home, he decided to spruce up his space with some greenery.
              He picked up several houseplants including a philodendron, a spider plant, a monstera, and a few succulents.
              The new plants instantly lit up his room and his spirits.
              </p>

              <p>
              Over time, John's plants began to outgrow his tiny room so he decided to propagate, pot, and gift them to his friends and family.
              Word broke out that he was giving away free plants so he decided to hop on the opportunity to operate a small nursery out of his home.
              From there came Flora.
              </p>
            </div>

            <h2 className='font-display text-2xl md:text-4xl m-12'>Get in Contact!</h2>
            <div className='flex flex-col md:flex-row w-full 2xl:w-3/4 m-auto mb-20 font-body leading-loose space-y-6 md:space-y-0 md:space-x-12 justify-between'>
              <div className='w-full md:w-7/12'>
                <img src={aboutImg} alt='Multiple plants'/>
              </div>
              <div className='w-full md:w-5/12 flex flex-col space-y-5 m-auto text-left font-display text-sm md:text-base leading-loose'>
                <p >Questions, comments, concerns? Bloom is always looking for new opportunities, local artisans, and ways to spread our love of plants!</p>
                <p>Email us! <br></br>example@gmail.com</p>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;