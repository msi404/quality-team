import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Logo from '@/public/Logo.png'
import Link from 'next/link'
function Navigation ()
{
	return (
		<NavigationMenu.Root className='sticky top-0 h-16 bg-gradient-to-r z-10 from-indigo-900 to-indigo-600 flex items-center justify-between p-5 md:px-24 text-slate-50'>
			<NavigationMenu.List>
				<NavigationMenu.Item>
						<Link href='/'>
							<Image className='h-12 w-12' src={Logo} alt="" />
						</Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
			<NavigationMenu.List className='hidden lg:flex justify-bwteen items-center gap-5'>
				<NavigationMenu.Item>
					<Link href='/about-us'>
						About us
					</Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						Services
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						Our work
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						Contact
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
        <Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>
          Subsecribe Now
        </Button>
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
	 </NavigationMenu.Root>
	)
}

export default Navigation;