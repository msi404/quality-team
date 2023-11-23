function UiBlock ({children})
{
	return (
		<div className="w-120 h-3/2 bg-gradient-to-t from-indigo-900 to-indigo-600 rounded-3xl p-16 flex flex-col justify-center">
			{children}
		</div>
	)
}

export default UiBlock;