import Marquee from 'react-fast-marquee'
import 'boxicons'
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

      <footer className='fixed bottom-0 z-20 left-0 right-0 border-t-[3px] border-black'>
        <Marquee
          speed={55}
          gradient={false}
          pauseOnHover={false}
          className='py-5'
        >
          <div className='flex flex-row gap-x-12 font-semibold text-lg'>
            <box-icon
              type='logo'
              name='html5'
              size='lg'
              alt='HTML5 icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='css3'
              size='lg'
              alt='CSS3 icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='tailwind-css'
              size='lg'
              alt='Tailwind CSS icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='javascript'
              size='lg'
              alt='JavaScript icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='typescript'
              size='lg'
              alt='TypeScript icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='react'
              size='lg'
              alt='React icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='redux'
              size='lg'
              alt='Redux icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='nodejs'
              size='lg'
              alt='Node.js icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='python'
              size='lg'
              alt='Python icon'
            ></box-icon>
            <box-icon type='logo' name='git' size='lg' alt='Git'></box-icon>
            <box-icon
              type='logo'
              name='github'
              size='lg'
              alt='GitHub icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='mongodb'
              size='lg'
              alt='MongoDB icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='postgresql'
              size='lg'
              alt='PostgreSQL icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='google-cloud'
              size='lg'
              alt='Google Cloud icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='firebase'
              size='lg'
              alt='Firebase icon'
            ></box-icon>
            <box-icon type='logo' name='aws' size='lg' alt='AWS'></box-icon>
            <box-icon
              type='logo'
              name='docker'
              size='lg'
              alt='Docker icon'
            ></box-icon>
            <box-icon
              type='logo'
              name='kubernetes'
              size='lg'
              alt='Kubernetes icon'
            ></box-icon>

            <img
              src='./terraform.png'
              alt='Terraform icon'
              className='size-11 pt-0.5 mr-11'
            />
          </div>
        </Marquee>
      </footer>
    </main>
  )
}
