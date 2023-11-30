import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import clasess from './Switch.module.css';
function Switch ()
{
	const [isChecked,setIsChecked] = useState(false)
	const { push, pathname,reload,locale} = useRouter();
	const onLanquageClickedHandler = async () =>
	{
		if ( isChecked )
		{
			setIsChecked(false)
			await push( `/${ pathname }`, undefined, { locale: 'en' } )
			reload()
		} else
		{
			setIsChecked(true)
			await push( `/${ pathname }`, undefined, { locale: 'ar' } )
			reload()
		}
	}

	useEffect( () =>
	{
		locale === 'ar' ? setIsChecked(true) : setIsChecked(false)
	},[locale])

	return (
		<div className='flex lg:p-4 py-3 px-0 '>
			<label className='cursor-pointer pe-5' htmlFor="switch">{isChecked ? "عربي" : "English"}</label>
			<input onChange={onLanquageClickedHandler} checked={isChecked} onClick={onLanquageClickedHandler}  id="switch" className={clasess.switch} type="checkbox"></input>
		</div>
	)
}

export default Switch;