import {useEffect,useRef} from 'react'
import { animate,inView} from 'framer-motion'

function Counter ( { from, to,duration=10,color} )
{
	const nodeRef = useRef();
	useEffect( () =>
	{
		const node = nodeRef.current;
		inView( node, () =>
		{
		animate( from, to, {
		duration: duration,
			onUpdate ( value )
			{
				node.textContent = Math.round(value)
			}
			} )
		})
	}, [ from, to] )
	
	return (
		<h1 className={`font-bold text-3xl md:text-5xl ${color}`} ref={nodeRef}/>
	)
}

export default Counter;