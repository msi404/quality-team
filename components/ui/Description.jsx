import {motion} from 'framer-motion'

function Description ( { children, color = 'white', align = 'md:text-start', width = 'md:w-120',animate,delay} )
{
	return (
		<motion.p initial={animate ? {opacity:0,translateY:'30px'} : null} whileInView={animate ? {opacity:1,translateY:'0px',transition:{'duration':0.6,'delay':delay}} : null} viewport={{once: false,amount:0.2}} className={`text-sm lg:text-base text-center w-full ${width} ${align}`} style={{color: color}}>{ children }</motion.p>
	)
}

export default Description;