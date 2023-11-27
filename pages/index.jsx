import Banner from '@/components/pages/landing-page/Banner'
import Testimonial from '@/components/Widgets/Testimonial'
import Features from '@/components/Widgets/Features'
import Destinations from '@/components/Widgets/Destinations'
import Clients from '@/components/Widgets/Clients'
import Booking from '@/components/Widgets/Booking'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
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

export async function getStaticProps ( { locale } )
{
  return {
    props: {
      ... (await serverSideTranslations(locale,['homeBanner','testimonial','features','destinations','contactModal','clients']))
    }
  }
}

