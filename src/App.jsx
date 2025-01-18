import 'boxicons'
import './App.css'
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

export function App() {
  return (
    <main className='relative min-h-screen bg-neutral-200'>
      <Background />

      <section className='relative flex flex-col h-screen'>
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
