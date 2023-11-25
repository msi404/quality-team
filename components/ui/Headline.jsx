import {motion} from 'framer-motion'
function Headline ( { children, color = 'text-slate-100', align = 'md:text-start',animate,delay} )
{
	return (
		<motion.h1 initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'delay':delay,'duration':0.5}} : null} viewport={{once:false,amount:0.50}} className={`font-bold text-center ${align} text-5xl lg:text-7xl ${color}`}>{children}</motion.h1>
	)
}

export default Headline;