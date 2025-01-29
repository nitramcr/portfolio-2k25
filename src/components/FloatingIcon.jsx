import aboutMe from '/about-me.png'
export const FloatingIcon = ({ onClick }) => (
  <button
    onClick={onClick}
    className='absolute bottom-60 left-14 md:left-44 z-20 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-100'
  >
    <img
      src={aboutMe} // Un icono estilo Windows 98
      alt='About Me'
      className='w-[52px] h-16'
    />
    <span className='text-base text-black pt-0.5 font-sans'>About Me</span>
  </button>
)
