import Banner from '@/components/landing/Banner'
import Testimonial from '@/components/landing/Testimonial'
import Features from '@/components/landing/Features'
import Destinations from '@/components/landing/Destinations'
import Clients from '@/components/landing/Clients'
export default function Home ()
{
  return (
    <div className='flex flex-col'>
      <Banner />
      <Testimonial />
      <Features />
      <Destinations />
      <Clients />
    </div>
  )
}
