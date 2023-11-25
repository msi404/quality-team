function HStack ({children,spacing,center,spaceBetween,width,responsive})
{
	return (
		<div className={`flex ${responsive ? 'flex-col lg:flex-row' : null} ${center ? 'justify-center' : null} ${spaceBetween ? 'justify-between' : null} ${width} ${spacing}`}>{children}</div>
	)
}

export default HStack;