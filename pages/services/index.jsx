import { Fragment } from 'react'
import Banner from '@/components/pages/services-page/Banner';
import Pricing from '@/components/Widgets/Pricing'
import Testimonial from '@/components/Widgets/Testimonial'
import Booking from '@/components/Widgets/Booking'
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