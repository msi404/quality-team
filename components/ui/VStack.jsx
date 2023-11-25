function VStack ({children,spacing='space-y-0',center})
{
	return (
		<div className={`flex ${center ? 'justify-center items-center' : null} flex-col ${spacing}`}>
			{children}
		</div>
	)
}

export default VStack;