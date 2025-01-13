import Marquee from 'react-fast-marquee'
import './App.css'
import grainedImage from '/grained.png'

export function App() {
  return (
    <main className='relative min-h-screen bg-neutral-200'>
      {/* grained bg */}
      <div
        className='absolute inset-0 pointer-events-none z-0'
        style={{
          backgroundImage: `url(${grainedImage})`,
          backgroundRepeat: 'repeat',
          opacity: 0.15,
          mixBlendMode: 'multiply',
        }}
      />

      <section className='relative flex flex-col h-screen'>
        {/* Description */}
        <aside className='w-[75%] flex items-start z-20'>
          <p className='p-3 font-mono text-pretty'>
            I&apos;m a versatile Software Developer and Certified Cloud
            Architect with extensive experience in Full Stack Development,
            DevOps, and Cloud Solutions. My expertise spans Frontend, Backend,
            and Cloud environments, allowing me to design and optimize scalable
            architectures that meet diverse business needs. With strong project
            management skills, I ensure seamless integration between development
            and operations.
          </p>
        </aside>

        {/* Hammer */}
        <div className='absolute top-0 right-0 z-10 p-1'>
          <img src='/hammer.gif' alt='' className='size-16 -rotate-[23deg]' />
        </div>

        {/* Works folder */}
        <div className='absolute top-[420px] right-28 z-20 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-100'>
          <img src='/folder.png' alt='' className='w-20 h-16' />
          <p>works</p>
        </div>

        {/* QR Code */}
        <div className='absolute top-[120px] right-48 z-10'>
          <img
            src='/QR-certification.png'
            alt='QR code for GCP certification'
            className='size-48 rounded-3xl rotate-[8deg]'
          />
        </div>

        {/* Name & role */}
        <div className='absolute inset-0 flex items-center justify-start pb-24 pl-44 z-10'>
          <div className='text-center'>
            <p className='text-red-500 font-semibold text-7xl'>
              MARTÍN RAMIREZ.
            </p>
            <h1 className='text-2xl font-semibold'>
              Software Developer & Cloud Architect.
            </h1>
          </div>
        </div>
      </section>

      <footer className='fixed bottom-0 z-20 left-0 right-0 border-t-[3px] border-red-500'>
        <Marquee
          speed={55}
          gradient={false}
          pauseOnHover={false}
          className='py-5'
        >
          <div className='flex flex-row gap-x-12 font-semibold text-lg'>
            <span>React</span>
            <span>Node</span>
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>Tailwindcss</span>
            <span>Google Cloud</span>
          </div>
        </Marquee>
      </footer>
    </main>
  )
}
