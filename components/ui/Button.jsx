function Button ({children})
{
	return (
		<button className="bg-green-500 text-slate-900 p-3 rounded-full active:bg-green-600 hover:bg-green-400 transition-all">
			{children}
		</button>
	)
}

export default Button;