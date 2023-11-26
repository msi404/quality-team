import Banner from '@/components/pages/landing-page/Banner'
import Testimonial from '@/components/Widgets/Testimonial'
import Features from '@/components/Widgets/Features'
import Destinations from '@/components/Widgets/Destinations'
import Clients from '@/components/Widgets/Clients'
import Booking from '@/components/Widgets/Booking'
export default function Home ()
{
  return (
    <div className='flex flex-col'>
      <Banner />
      <Testimonial />
      <Features />
      <Destinations />
      <Clients />
      <Booking />
    </div>
  )
}
