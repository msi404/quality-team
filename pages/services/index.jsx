import { Fragment } from 'react'
import Banner from '@/components/pages/services-page/Banner';
import Pricing from '@/components/Widgets/Pricing'
function Page ()
{
	return (
		<Fragment>
			<Banner />
			<Pricing />
		</Fragment>
	)
}

export default Page;