function Headline ({children, color='white',align='md:text-start'})
{
	return (
		<h1 className={`font-bold text-center ${align} text-7xl`} style={ { color: color}}>{children}</h1>
	)
}

export default Headline;