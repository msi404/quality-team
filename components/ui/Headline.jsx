function Headline ({children, color='text-slate-100',align='md:text-start'})
{
	return (
		<h1 className={`font-bold text-center ${align} text-7xl ${color}`}>{children}</h1>
	)
}

export default Headline;