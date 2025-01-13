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

      <div className='relative flex flex-col h-screen'>
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
      </div>
    </main>
  )
}
