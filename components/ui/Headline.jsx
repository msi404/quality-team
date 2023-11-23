function Headline ({children, color='white'})
{
	return (
		<h1 className="font-bold text-7xl" style={ { color: color}}>{children}</h1>
	)
}

export default Headline;