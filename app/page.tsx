'use client';

import { Nextjs } from './components/icons/NextJS';
import { HTML5 } from './components/icons/HTML';
import { CSS } from './components/icons/CSS';
import { TypeScript } from './components/icons/Typescript';
import { JavaScript } from './components/icons/Javascript';
import { TailwindCSS } from './components/icons/Tailwind';
import { Neon } from './components/icons/Neon';
import { React } from './components/icons/React';
import { GitHub } from './components/icons/Github';
import { LinkedIn } from './components/icons/Linkedin';
import { Gmail } from './components/icons/Gmail';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      id='main-container'
      className='w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto flex flex-col items-center justify-center'
    >
      <nav className='w-full p-5 flex justify-between items-center text-lg sticky top-0 z-50 bg-[var(--background)] backdrop-blur-md'>
        <p className='w-1/2 serif-typeface italic text-xl accent'>pa1.</p>

        <ul className='w-1/2 flex justify-end items-center gap-8'>
          <li
            onClick={() => scrollToSection('hero')}
            className='cursor-pointer hover:opacity-80 transition-all duration-300'
          >
            About
          </li>
          <li
            onClick={() => scrollToSection('projects')}
            className='cursor-pointer hover:opacity-80 transition-all duration-300'
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection('contact')}
            className='cursor-pointer hover:opacity-80 transition-all duration-300'
          >
            Contact
          </li>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label='Toggle dark mode'
            className='w-9 h-9 flex items-center justify-center hover:opacity-80 transition-all duration-300'
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </ul>
      </nav>

      <main className='w-full p-5 flex flex-col justify-between items-center gap-8'>
        {/* About Me */}
        <div
          id='hero'
          className='w-full flex flex-col justify-between items-center gap-4'
        >
          <div className="w-full h-[250px] bg-[url('/pawan.jpeg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>

          <div id='about' className='w-full text-justify'>
            <div className='w-full space-y-4'>
              <div className='flex justify-between items-center'>
                <h3 className='text-2xl'>
                  Hi, I&apos;m <span className='accent'>Pawan</span> (pa&#8209;one).
                </h3>
                <a href='https://drive.google.com/file/d/1dvxS1ULN_R8i-FgMgltBLCt63PTVTEA5/view'>
                  <p className='px-3 py-1 accentbg rounded-full text-sm text-white hover:opacity-60 transition-all duration-300 cursor-pointer'>
                    Resume
                  </p>
                </a>
              </div>
              <p className='text-lg'>
                I am a Frontend Developer based in Mumbai, India
              </p>
              <p className='text-lg'>
                I am currently working as a{' '}
                <span className='accent opacity-80'>
                  Junior Software Developer
                </span>{' '}
                at <span className='accent opacity-80'>uKnowva HRMS</span>. Also
                leading{' '}
                <span className='accent opacity-80'>Front End Development</span>{' '}
                at{' '}
                <a
                  href='https://gradii.ai/'
                  className='underline underline-offset-2 accent opacity-80 hover:opacity-60 transition-all duration-300'
                >
                  Gradii
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div id='tech' className='w-full grid grid-cols-4 grid-rows-2 gap-4'>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <HTML5 width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>HTML</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <CSS width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>CSS</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <JavaScript width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>Javascript</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <TypeScript width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>Typescript</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <Nextjs width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>Next JS</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <TailwindCSS width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>Tailwind CSS</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <React width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>React</p>
          </div>
          <div className='border border-(--foreground)/10 p-4 rounded-lg flex flex-col justify-center items-center gap-4'>
            <Neon width={50} height={50} className='m-auto' />
            <p className='text-sm opacity-60'>Neon</p>
          </div>
        </div>

        <div className='w-full flex items-center gap-8'>
          <hr className='w-1/2 border-(--foreground)/10' />
          <p className='opacity-60'>PROJECTS</p>
          <hr className='w-1/2 border-(--foreground)/10' />
        </div>

        {/* Projects */}
        <div id='projects' className='w-full mx-auto'>
          {/* <h3 className='text-lg mb-4'>Projects</h3> */}

          <div className='w-full grid grid-cols-2 grid-rows-1 gap-4'>
            {/* Vetra */}
            <div
              onClick={() => window.open('https://www.vetra.co.in/', '_blank')}
              role='link'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.open('https://www.vetra.co.in/', '_blank');
                }
              }}
              className='w-full border border-(--foreground)/10 p-4 rounded-lg cursor-pointer flex flex-col'
            >
              <div className="w-full h-[250px] bg-black bg-[url('/projects/vetra.png')] bg-contain bg-center bg-no-repeat rounded-lg"></div>

              {/* content */}
              <div className='flex flex-col gap-4 my-2 p-2 flex-1'>
                <h3 className='text-2xl'>Vetra</h3>
                <p className='opacity-60'>
                  A Pinterest alternative for developers
                </p>

                {/* pills */}
                <ul className='flex flex-wrap gap-2 text-xs text-white mt-auto'>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    Next JS
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    TypeScript
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    Tailwind CSS
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    Supabase
                  </li>
                </ul>
              </div>
            </div>

            {/* YouTube Insights Dashboard */}
            <div
              onClick={() =>
                window.open(
                  'https://youtube-playlist-dashboard.vercel.app/',
                  '_blank',
                )
              }
              role='link'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.open(
                    'https://youtube-playlist-dashboard.vercel.app/',
                    '_blank',
                  );
                }
              }}
              className='w-full border border-(--foreground)/10 p-4 rounded-lg cursor-pointer flex flex-col'
            >
              <div className="w-full h-[250px] bg-[url('/projects/youtube-dashboard.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>

              {/* content */}
              <div className='flex flex-col gap-4 my-2 p-2 flex-1'>
                <h3 className='text-2xl'>YouTube Insights Dashboard</h3>
                <p className='opacity-60'>
                  Data-rich analytics from playlists & channels
                </p>

                {/* pills pinned to bottom */}
                <ul className='flex flex-wrap gap-2 text-xs text-white mt-auto'>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    Next JS
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    JavaScript
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    CSS
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    YouTube Data API
                  </li>
                </ul>
              </div>
            </div>

            {/* Gita GPT */}
            <div
              onClick={() =>
                window.open('https://gita-gpt-gold.vercel.app/', '_blank')
              }
              role='link'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.open('https://gita-gpt-gold.vercel.app/', '_blank');
                }
              }}
              className='w-full border border-(--foreground)/10 p-4 rounded-lg cursor-pointer flex flex-col'
            >
              <div className="w-full h-[250px] bg-[url('/projects/gita-gpt.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>

              {/* content */}
              <div className='flex flex-col gap-4 my-2 p-2 flex-1'>
                <h3 className='text-2xl'>Gita GPT</h3>
                <p className='opacity-60'>
                  Verses from Bhagvad Gita organized by emotional states
                </p>

                {/* pills pinned to bottom */}
                <ul className='flex flex-wrap gap-2 text-xs text-white mt-auto'>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    HTML
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    CSS
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    JavaScript
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    Hume AI API
                  </li>
                </ul>
              </div>
            </div>

            {/* Breather */}
            <div
              onClick={() =>
                window.open('https://breather-29161.web.app/', '_blank')
              }
              role='link'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.open('https://breather-29161.web.app/', '_blank');
                }
              }}
              className=' w-full border border-(--foreground)/10 p-4 rounded-lg cursor-pointer flex flex-col'
            >
              <div className="w-full h-[250px] bg-[url('/projects/breather.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>

              {/* content */}
              <div className='flex flex-col gap-4 my-2 p-2 flex-1'>
                <h3 className='text-2xl'>Breather</h3>
                <p className='opacity-60'>
                  4-7-8 Pranayama Yoga and other productivity tools
                </p>

                {/* pills pinned to bottom */}
                <ul className='flex flex-wrap gap-2 text-xs text-white mt-auto'>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    HTML
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    CSS
                  </li>
                  <li className='px-3 py-1 rounded-full accentbg whitespace-nowrap'>
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id='contact'
          className='w-full flex justify-between items-center py-8'
        >
          <div className='serif-typeface italic'>© 2025 Pawan Kamat</div>

          <div className='flex items-center gap-8'>
            <a href='https://github.com/keepupwithpawan'>
              <GitHub width={18} height={18} className='text-[color:var(--foreground)] ' />
            </a>
            <a href='https://www.linkedin.com/in/pawankamat/'>
              <LinkedIn width={18} height={18} />
            </a>
            <a href='mailto:pawankamatw@gmail.com'>
              <Gmail width={18} height={18} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
