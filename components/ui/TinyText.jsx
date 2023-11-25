function TinyText ({children, color='text-slate-100'})
{
	return (
		<p className={`text-xs font-light text-center ${color}`}>{children}</p>
	)
}

export default TinyText;