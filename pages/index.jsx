import Banner from '@/components/landing/banner/Banner'
import Testimonial from '@/components/landing/Testimonial'
export default function Home ()
{
  return (
    <div className='flex flex-col gap-10'>
      <Banner />
      <Testimonial />
    </div>
  )
}
