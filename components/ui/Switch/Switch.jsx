import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import clasess from './Switch.module.css';
function Switch ()
{
	const [isChecked,setIsChecked] = useState(false)
	const { push, pathname,reload,locale} = useRouter();
	const onLanquageClickedHandler = () =>
	{
		if ( isChecked )
		{
			setIsChecked(false)
			push( `/${ pathname }`, undefined, { locale: 'en' } )
			setTimeout( () =>
			{
				reload()
			},65)
		} else
		{
			setIsChecked(true)
			push( `/${ pathname }`, undefined, { locale: 'ar' } )
			setTimeout( () =>
			{
				reload()
			},65)
		}
	}

	useEffect( () =>
	{
		locale === 'ar' ? setIsChecked(true) : setIsChecked(false)
	},[locale])

	return (
		<div className='flex'>
			<label className='cursor-pointer pe-5' htmlFor="switch">{isChecked ? "عربي" : "English"}</label>
			<input checked={isChecked} onClick={onLanquageClickedHandler}  id="switch" className={clasess.switch} type="checkbox"></input>
		</div>
	)
}

export default Switch;