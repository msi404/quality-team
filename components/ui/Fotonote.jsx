function Fotonote ({children,color='white'})
{
	return (
		<h1 className={`text-slate-400 ${color}`}>{children}</h1>
	)
}

export default Fotonote;