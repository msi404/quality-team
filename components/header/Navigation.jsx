
import {useState,useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/Logo.png'
import Switch from '@/components/ui/Switch/Switch'
import { RiMenu2Fill } from "react-icons/ri";
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation} from 'next-i18next'

function Navigation ()
{
	const {t:translate} = useTranslation('navbar')
	const [ isOpen, setIsOpen ] = useState( false )
	const [ isMinWidthMedium, setIsMinWidthMedium ] = useState( false );
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });
	const { locale} = useRouter()
	const onMenuClicked = () =>
	{
		isOpen ? setIsOpen(false) : setIsOpen(true)
	}
	const resetMenu = () =>
	{
		setIsOpen(false)
	}

const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			resetMenu()
		}
	};
	useEffect( () =>
	{
	if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
	}
	if ( isMinWidthMedium )
	{
		resetMenu()
	}
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [mediaQuery,isMinWidthMedium]);
	return (
		<AnimatePresence>
				<motion.div initial={{height: 100}} animate={{height: isOpen ? 500 : 100}} exit={{height: 100}} className='fixed border-b border-slate-500 overflow-hidden w-screen top-0 bg-gradient-to-r z-10 text-slate-100 font-semibold from-indigo-900 to-indigo-600 lg:px-16 px-6 flex flex-wrap items-center space-x-6 lg:space-x-0 lg:py-0 pb-10'>
				<div className='flex-1 flex justify-between items-center'>
				<Link onClick={resetMenu} className='py-5' href='/' locale={locale}>
					<Image unoptimized width={70} height={70} src={logo} alt="" />
				</Link>
				</div>
				<li>
				<Switch />
				</li>
					<button onClick={onMenuClicked}  className='cursor-pointer lg:hidden block p-5 text-xl'>
						<RiMenu2Fill />
					</button>
			<div className='flex flex-col justify-center items-center font-normal text-2xl lg:text-base text-center lg:flex lg:items-center lg:w-auto w-full'>
					<nav>
					<ul className='lg:flex items-center  space-y-5 lg:space-y-0 justify-between pt-4 lg:pt-0'>
					<li>
	                <Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/'>
					<motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px'}} viewport={{once:false}}>
						{translate('home')}
					</motion.div>
                    </Link>
					</li>
					<li>
	                <Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/about-us'>
					<motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition:{delay:0.2}}} viewport={{once:false}}>
						{translate('aboutUs')}
					</motion.div>
                    </Link>
					</li>
					<li>
					<Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/services'>
                    <motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition: {delay:0.3}}} viewport={{once:false}}>
						{translate('services')}
					</motion.div>
                    </Link>
						</li>
						<li>
					<Link onClick={resetMenu} className='lg:p-4 py-3 px-0 block' href='/our-work'>
                    <motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition: {delay:0.4}}} viewport={{once:false}}>
						{translate('ourWork')}
					</motion.div>
                    </Link>
						</li>
						<li className='lg:p-4 py-3 px-0 block'>
					<Link href='https://wa.me/07833655011?text=Hello'>
					<motion.div initial={{opacity: 0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition: {delay:0.5}}} viewport={{once:false}}>
						{translate('contact')}
					</motion.div>
							</Link>
						</li>
					</ul>
					</nav>
				</div>
			</motion.div>
	</AnimatePresence>
	)
}

export default Navigation;