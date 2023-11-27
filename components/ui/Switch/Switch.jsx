import { useRef} from 'react'
import { useRouter } from 'next/router';
import clasess from './Switch.module.css';
function Switch ()
{
	const nodeRef = useRef();
	const { push, pathname} = useRouter();
	const onLanquageClickedHandler = () =>
	{
		if ( nodeRef.current.checked )
		{
			push( `/${ pathname }`, undefined, { locale: 'ar' } )
		} else
		{
			push( `/${ pathname }`, undefined, { locale: 'en' } )
		}
	}

	return (
		<div className='flex justify-center items-center space-x-5'>
			<label className='cursor-pointer' htmlFor="switch">{nodeRef?.current?.checked ? "عربي" : "English"}</label>
			<input onClick={onLanquageClickedHandler} ref={nodeRef} id="switch" className={clasess.switch} type="checkbox"></input>
		</div>
	)
}

export default Switch;