
import {useState} from 'react'
import Button from '@/components/ui/Button';
import Image from 'next/image'
import Link from 'next/link'
import Switch from '@/components/ui/Switch/Switch'
import { RiMenu2Fill } from "react-icons/ri";
import { useRouter } from 'next/router'
function Navigation ()
{
	const [isOpen,setIsOpen] = useState(false)
	const Logo = "https://res.cloudinary.com/dckoelcja/image/upload/v1701282856/Logo_llmprk.png"

	const { locale,push} = useRouter()
		const onLinkClicked = () =>
	{
		push('https://web.facebook.com/profile.php?id=61551994790268')
		}
	const onMenuClicked = () =>
	{
		isOpen ? setIsOpen(false) : setIsOpen(true)
	}
	const resetMenu = () =>
	{
		setIsOpen(false)
	}
	return (
		<div className='fixed w-screen top-0 bg-gradient-to-r z-10 text-slate-100 font-semibold from-indigo-900 to-indigo-600 lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2'>
				<div className='flex-1 flex justify-between items-center'>
				<Link onClick={resetMenu} className='p-5' href='/' locale={locale}>
					<Image width={55} height={55} src={Logo} alt="" />
				</Link>
				</div>
					<button onClick={onMenuClicked}  className='cursor-pointer lg:hidden block p-5 text-xl'>
						<RiMenu2Fill />
					</button>
				<input type="checkbox" className='hidden' id='menu-toggle' />
			<div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
					<nav>
					<ul className='lg:flex items-center space-y-5 lg:space-y-0 justify-between pt-4 lg:pt-0'>
					<li>
	                <Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/about-us'>
                        About us
                    </Link>
					</li>
				<li>
					<Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/services'>
                        Services
                    </Link>
						</li>
						<li>
					<Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/our-work'>
                        Our work
                    </Link>
						</li>
						<li className='lg:p-4 py-3 px-0 block'>
							<Link href='#'>
								Contact us
							</Link>
						</li>
						<li>
					<Button onClick={onLinkClicked} variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>
                        Subsecribe Now
                    </Button>
						</li>
						<li>
						<Switch />
						</li>
					</ul>
					</nav>
				</div>
			</div>
	)
}

export default Navigation;