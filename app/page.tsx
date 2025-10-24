'use client';

import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import MumbaiClock from './components/MumbaiClock';
import Box from './components/Box';

export default function Home() {
  const handleResume = () => {
    window.open(
      'https://drive.google.com/file/d/1dvxS1ULN_R8i-FgMgltBLCt63PTVTEA5/view?usp=drive_link',
      '_blank',
    );
  };

  return (
    <div className='w-full py-5 md:py-0 md:h-screen flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='w-[92%] h-[88%] flex flex-col md:flex-row md:justify-between justify-center items-center gap-4 text-(--color-background)'
      >
        {/* COLUMN 1 */}
        <div className='w-full md:w-1/3 h-full gap-4 flex flex-col items-center justify-center'>
          {/* Profile Card (keep custom) */}
          <div className='w-full h-[500px] md:h-[60%] relative group rounded-lg overflow-hidden flex flex-col justify-end'>
            <div className="absolute inset-0 bg-[url('/pawan.jpeg')] bg-cover bg-center group-hover:scale-105 transition-all duration-500"></div>
            <div className='absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-black/90 via-black/70 to-transparent z-10'></div>
            <div className='relative z-20 flex flex-col justify-end px-6 pb-8 text-white space-y-3'>
              <h2 className='text-4xl font-light serif-typeface'>
                Pawan Kamat
              </h2>
              <p className='text-lg text-(--color-foreground)/70 font-light'>
                Currently working as a Junior Software Developer at uKnowva
                HRMS. Also leading Front End at Gradii.
              </p>

              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-4'>
                  <a href='https://github.com/keepupwithpawan' target='_blank'>
                    <FaGithub className='text-2xl hover:text-gray-300' />
                  </a>
                  <a href='https://linkedin.com/in/pawankamat' target='_blank'>
                    <FaLinkedin className='text-2xl hover:text-gray-300' />
                  </a>
                  <a href='https://x.com/keepupwithpa1' target='_blank'>
                    <FaTwitter className='text-2xl hover:text-gray-300' />
                  </a>
                </div>
                <button
                  onClick={handleResume}
                  className='px-5 py-2 border border-(--color-foreground) rounded-lg hover:rounded-[60px] transition-all duration-400 font-light cursor-pointer'
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>

          {/* Reusable Card */}
          <Box
            image='/projects/breather.png'
            title='Breather'
            description='4-7-8 Pranayama Yoga and other productivity tools'
            height='40%'
            link='https://breather-29161.web.app/'
          />
        </div>

        {/* COLUMN 2 */}
        <div className='w-full md:w-1/3 h-full flex flex-col gap-4'>
          <Box
            image='/projects/youtube-dashboard.png'
            title='YouTube Insights Dashboard'
            description='Data-rich analytics from playlists & channels'
            height='40%'
            link='https://youtube-playlist-dashboard.vercel.app/'
          />
          <Box
            image='/projects/vetra.png'
            title='Vetra'
            description='A Pinterest alternative for developers'
            height='60%'
            link='https://www.vetra.co.in'
            contain
          />
        </div>

        {/* COLUMN 3 */}
        <div className='w-full md:w-1/3 h-full flex flex-col gap-4'>
          <Box
            image='/projects/gita-gpt.png'
            title='Gita GPT'
            description='Verses from Bhagvad Gita organized by emotional states'
            height='70%'
            link='https://gita-gpt-gold.vercel.app/'
          />
          <div className='relative w-full h-[100px] md:h-[30%] bg-white rounded-lg hover:rounded-2xl hover:scale-99 flex justify-center items-center transition-all duration-300'>
            <MumbaiClock />
          </div>
        </div>
      </motion.div>
    </div>
  );
}