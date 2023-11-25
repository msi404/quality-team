function HStack ({children,spacing,center,spaceBetween,width})
{
	return (
		<div className={`flex ${center ? 'justify-center' : null} ${spaceBetween ? 'justify-between' : null} ${width} ${spacing}`}>{children}</div>
	)
}

export default HStack;