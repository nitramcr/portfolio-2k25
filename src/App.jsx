import 'boxicons'
import './App.css'
import { useState } from 'react'
import {
  Background,
  Hammer,
  Description,
  Works,
  CV,
  CodeQR,
  IdentityBanner,
  Footer,
} from './components'
import star from '/star-hand-drawn.png'
import rainbow from '/cloud-rainbow-hand-drawn.png'
import cloud from '/cloud-hand-drawn.png'
import twoClouds from '/cloud-2-hand-drawn.webp'
import { RetroOSModal } from './components/RetroModal'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <main className='relative min-h-screen bg-neutral-200 overscroll-none'>
      <Background />

      <section className='relative flex flex-col h-screen'>
        <RetroOSModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <img
          src={cloud}
          alt='Hand drawn image'
          className='absolute top-10 right-8 size-52 opacity-15'
        />
        <img
          src={twoClouds}
          alt='Hand drawn image'
          className='absolute top-8 left-52 w-32 opacity-30'
        />
        <img
          src={rainbow}
          alt='Hand drawn image'
          className='absolute bottom-14 -left-6 w-32 opacity-20 z-30'
        />
        <img
          src={star}
          alt='Hand drawn image'
          className='absolute bottom-16 right-4 size-36 opacity-70'
        />
        <Description />

        <Hammer />

        <Works />

        <CV />

        <CodeQR />

        <IdentityBanner />
      </section>

      <Footer />
    </main>
  )
}
