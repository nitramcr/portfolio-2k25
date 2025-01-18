import Marquee from 'react-fast-marquee'

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 z-20 left-0 right-0 border-t-[3px] border-red-500'>
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
  )
}
