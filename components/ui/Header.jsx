function Header ({children,color='white'})
{
	return (
		<h1 className="text-lg font-semibold" style={{color: color}}>{children}</h1>
	)
}

export default Header;