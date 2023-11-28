import {motion} from 'framer-motion'

function ItalicText ( { children, color = 'text-slate-100',animate,delay,width} )
{
	return (
		<motion.h1 initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'duration':0.6,'delay':delay}} : null} viewport={{once:true,amount:0.2}} className={`text-sm md:text-base italic ${width} ${color}`}>{ children}</motion.h1>
	)
}
export default ItalicText;