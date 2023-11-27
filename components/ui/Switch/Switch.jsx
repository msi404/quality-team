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
			},60)
		} else
		{
			setIsChecked(true)
			push( `/${ pathname }`, undefined, { locale: 'ar' } )
			setTimeout( () =>
			{
				reload()
			},60)
		}
	}

	useEffect( () =>
	{
		locale === 'ar' ? setIsChecked(true) : setIsChecked(false)
	},[locale])

	return (
		<div className='flex justify-center items-center space-x-5'>
			<label className='cursor-pointer' htmlFor="switch">{isChecked ? "عربي" : "English"}</label>
			<input checked={isChecked} onClick={onLanquageClickedHandler}  id="switch" className={clasess.switch} type="checkbox"></input>
		</div>
	)
}

export default Switch;