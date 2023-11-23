import {Fragment} from 'react'
import Navigation from '@/components/header/Navigation'
import Footer from '@/components/footer/Footer'

function Layout ( { children } )
{
	return (
		<Fragment>
		<Navigation />
		<main className='p-5 px-40'>
			{children}
			</main>
		<Footer />
		</Fragment>
	)	
}

export default Layout;