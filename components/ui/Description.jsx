import {motion} from 'framer-motion'

function Description ( { children, color = 'text-slate-100', align = 'md:text-start', width,animate,delay} )
{
	return (
		<motion.p initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'duration':0.6,'delay':delay}} : null} viewport={{once: true,amount:0.2}} className={`text-sm lg:text-base text-center  ${width} ${align} ${color}`}>{ children }</motion.p>
	)
}

export default Description;