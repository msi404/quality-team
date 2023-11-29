import { Fragment } from 'react'
import Banner from '@/components/pages/services-page/Banner';
import Pricing from '@/components/Widgets/Pricing'
import Testimonial from '@/components/Widgets/Testimonial'
import Booking from '@/components/Widgets/Booking'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

function Page ()
{
	return (
		<Fragment>
			<Banner />
			<Pricing />
			<Testimonial />
			<Booking background='bg-slate-100' />
		</Fragment>
	)
}

export default Page;

export async function getStaticProps ( { locale } )
{
  return {
    props: {
      ... (await serverSideTranslations(locale,['contactModal','booking','testimonial','servicesBanner']))
    }
  }
}
