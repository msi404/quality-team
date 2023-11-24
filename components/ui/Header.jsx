import {motion} from 'framer-motion'
function Header ( { children, color = 'white', align = 'md:text-start', size,animate,delay} )
{
	return (
		<motion.h1 initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'duration':0.6,'delay':delay}} : null} viewport={{once:false,amount:0.2}} className={`text-base ${size ? size : "lg:text-lg"} font-semibold text-center ${align}`} style={{color: color}}>{children}</motion.h1>
	)
}

export default Header;