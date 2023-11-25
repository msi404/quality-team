function Button ({children,variant,active,hover})
{
	return (
		<button className={`${variant} text-slate-900 p-3 rounded-full ${active} ${hover} transition-all`}>
			{children}
		</button>
	)
}

export default Button;