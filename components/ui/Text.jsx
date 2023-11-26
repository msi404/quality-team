import {motion} from 'framer-motion'

function Text ( { children, color = 'text-slate-100',animate,delay} )
{
	return (
		<motion.h1 initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'duration':0.6,'delay':delay}} : null} viewport={{once:true,amount:0.2}} className={`text-sm md:text-base ${color}`}>{ children}</motion.h1>
	)
}
export default Text;