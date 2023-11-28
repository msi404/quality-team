import Button from '@/components/ui/Button';
import Image from 'next/image'
import Logo from '@/public/Logo.png'
import Link from 'next/link'
import Switch from '@/components/ui/Switch/Switch'
import ContactModal from '@/components/Widgets/ContactModal'
import {FaChevronDown} from 'react-icons/fa'
import { useRouter } from 'next/router'
function Navigation ()
{
	const { locale } = useRouter()
	return (
		<div className='sticky top-0 bg-gradient-to-r z-10 text-slate-100 from-indigo-900 to-indigo-600 lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2'>
				<div className='flex-1 flex justify-between items-center'>
				<Link className='p-5' href='/' locale={locale}>
							<Image className='h-12 w-12' src={Logo} alt="" />
				</Link>
				</div>
					<label htmlFor='menu-toggle' className='cursor-pointer lg:hidden block'>
						<FaChevronDown />
					</label>
				<input type="checkbox" className='hidden' id='menu-toggle' />
				<div className='hidden lg:flex lg:items-center lg:w-auto w-full' id='menu'>
					<nav>
					<ul className='lg:flex items-center space-y-5 lg:space-y-0 justify-between pt-4 lg:pt-0'>
					<li>
	                    <Link className='lg:p-4 py-3 px-0 block' href='/about-us'>
                        About us
                    </Link>
					</li>
				<li>
					<Link className='lg:p-4 py-3 px-0 block' href='/services'>
                        Services
                    </Link>
						</li>
						<li>
					<Link className='lg:p-4 py-3 px-0 block' href='/our-work'>
                        Our work
                    </Link>
						</li>
						<li>
					<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>
                        Subsecribe Now
                    </Button>
						</li>
						<li>
								<Link href='#' className='lg:p-4 py-3 px-0 block'>
									<Switch />
								</Link>
							</li>
					</ul>
					</nav>
				</div>
			</div>
	)
}

export default Navigation;


{/* <NavigationMenu.Root className='sticky top-0 h-16  bg-gradient-to-r z-10 from-indigo-900 to-indigo-600 flex flex-wrap md:flex-nowrap items-center justify-between p-5 md:px-24 text-slate-50'>
                <NavigationMenu.List>
                <NavigationMenu.Item>
                        <Link className='p-5' href='/' locale={locale}>
                            <Image className='h-12 w-12' src={Logo} alt="" />
                        </Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.List className='lg:flex justify-bwteen items-center gap-5'>
                <NavigationMenu.Item>
                    <Link className='p-5' href='/about-us'>
                        About us
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link className='p-5' href='/services'>
                        Services
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link className='p-5' href='/our-work'>
                        Our work
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <ContactModal/>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                    <Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>
                        Subsecribe Now
                    </Button>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Switch />
                </NavigationMenu.Item>
            </NavigationMenu.List>
     </NavigationMenu.Root> */}
