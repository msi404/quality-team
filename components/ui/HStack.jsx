function HStack ({children,spacing,center,spaceBetween,width,responsive,padding})
{
	return (
		<div className={`flex ${padding} ${responsive ? 'flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start' : null} ${center ? 'justify-center items-center' : null} ${spaceBetween ? 'justify-between' : null} ${width} ${spacing}`}>{children}</div>
	)
}

export default HStack;