import grainedImage from '/grained.png'

export const Background = () => {
  return (
    <div
      className='absolute inset-0 pointer-events-none z-0'
      style={{
        backgroundImage: `url(${grainedImage})`,
        backgroundRepeat: 'repeat',
        opacity: 0.15,
        mixBlendMode: 'multiply',
      }}
    />
  )
}
