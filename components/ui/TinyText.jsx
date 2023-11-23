function TinyText ({children, color='white'})
{
	return (
		<p className="text-xs font-light text-center" style={{color: color}}>{children}</p>
	)
}

export default TinyText;