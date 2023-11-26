function HStack ({children,spacing,center,spaceBetween,width,responsive,padding})
{
	return (
		<div className={`flex ${padding} ${responsive ? 'flex-col lg:flex-row' : null} ${center ? 'justify-center' : null} ${spaceBetween ? 'justify-between' : null} ${width} ${spacing}`}>{children}</div>
	)
}

export default HStack;