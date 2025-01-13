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
    </main>
  )
}
