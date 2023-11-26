import { Fragment } from 'react'
import Booking from '@/components/Widgets/Booking'
import Banner from '@/components/pages/about-us-page/Banner'
import Metrics from '@/components/Widgets/Metrics'
function Page ()
{
	return (
		<Fragment>
			<Banner />
			<Metrics />
			<Booking background='bg-slate-100'/>
		</Fragment>
	)
}

export default Page;