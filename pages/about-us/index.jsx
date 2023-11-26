import { Fragment } from 'react'
import Clinets from '@/components/landing/Clients'
import Destinations from '@/components/landing/Destinations'
import Banner from '@/components/about-us/Banner'
import Metrics from '@/components/about-us/Metrics'
function Page ()
{
	return (
		<Fragment>
			<Banner />
			<Metrics />
		</Fragment>
	)
}

export default Page;