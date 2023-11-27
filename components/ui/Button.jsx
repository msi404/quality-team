function Button ( { children, variant, active, hover, width = 'w-40',onClick} )
{
	return (
		<button onClick={onClick} className={`${variant} text-slate-900 p-3 rounded-full ${active} ${hover} transition-all ${width}`}>
			{children}
		</button>
	)
}

export default Button;