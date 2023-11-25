function VStack ({children,spacing='space-y-0',center,responsive})
{
	return (
		<div className={`flex ${center ? 'justify-center items-center' : null} flex-col ${responsive ? 'justify-center items-center md:justify-start md:items-start':null} ${spacing}`}>
			{children}
		</div>
	)
}

export default VStack;