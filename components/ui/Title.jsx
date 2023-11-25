function Title ({children,color,align='md:text-start'})
{
	return (
		<h3 className={`font-bold text-center ${align} text-5xl`} style={{color:color}}>{children}</h3>
	)
}

export default Title;