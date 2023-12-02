import { Fragment } from 'react'
import Banner from '@/components/pages/services-page/Banner';
import Testimonial from '@/components/Widgets/Testimonial'
import Booking from '@/components/Widgets/Booking'
import FAQ from '@/components/Widgets/FAQ'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

function Page ()
{
	return (
		<Fragment>
			<Banner />
			<Testimonial background='bg-slate-100' />
			<FAQ />
			<Booking background='bg-slate-100' />
		</Fragment>
	)
}

export default Page;

export async function getStaticProps ( { locale } )
{
  return {
    props: {
      ... (await serverSideTranslations(locale,['contactModal','booking','testimonial','servicesBanner','faq','navbar']))
    }
  }
}
