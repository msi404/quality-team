function VStack ({children,spacing='space-y-0'})
{
	return (
		<div className={`flex flex-col ${spacing}`}>
			{children}
		</div>
	)
}

export default VStack;