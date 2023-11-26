import {motion} from 'framer-motion'
function Title ( { children, color='text-slate-100', align = 'md:text-start',animate,delay} )
{
	return (
		<motion.h3 initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'duration':0.4,'delay':delay}} : null} viewport={{once:true,amount:0.90}} className={`font-bold text-center ${align} text-3xl md:text-4xl lg:text-5xl ${color}`}>{children}</motion.h3>
	)
}

export default Title;