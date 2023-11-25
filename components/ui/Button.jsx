function Button ( { children, variant, active, hover, width = 'w-40'} )
{
	return (
		<button className={`${variant} text-slate-900 p-3 rounded-full ${active} ${hover} transition-all ${width}`}>
			{children}
		</button>
	)
}

export default Button;