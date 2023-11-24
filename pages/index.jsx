import Banner from '@/components/landing/Banner'
import Testimonial from '@/components/landing/Testimonial'
export default function Home ()
{
  return (
    <div className='flex flex-col'>
      <Banner />
      <Testimonial />
    </div>
  )
}
