import Banner from '@/components/landing/Banner'
import Testimonial from '@/components/landing/Testimonial'
import Features from '@/components/landing/Features'
export default function Home ()
{
  return (
    <div className='flex flex-col'>
      <Banner />
      <Testimonial />
      <Features />
    </div>
  )
}
