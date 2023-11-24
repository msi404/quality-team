import {motion} from 'framer-motion'
function Card ( { children,animate,delay} )
{
	return (
		<motion.div initial={ animate ? { opacity: 0, translateY: '140px' } : null } whileInView={ animate ? { opacity: 1, translateY: '0px', transition: { 'duration': 0.4, 'delay': delay } } : null } viewport={ { once: false, amount: 0.2 } } className="
		w-4/5 h-3/2 bg-gradient-to-t
		 from-indigo-900 to-indigo-600
		 rounded-3xl p-7 lg:p-16
		 flex flex-col justify-center
		border border-slate-400">
			{children}
		</motion.div>
	)
}

export default Card;