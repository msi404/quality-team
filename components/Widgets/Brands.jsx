import HStack from '@/components/ui/HStack';
import Image from 'next/image'
import easy from '@/public/easy.png'
import eisb from '@/public/eisb.png'
import selsey from '@/public/selsey.png'
function Brands ()
{
	return (
		<HStack width='max-w-md mx-auto px-5 items-center' center spaceBetween>
			<Image className='pt-5' unoptimized width={ 100 } height={ 100 } src={selsey} />
			<Image unoptimized width={ 100 } height={ 100 } src={easy} />
			<Image unoptimized width={ 100 } height={ 100 } src={eisb} />
		</HStack>
	)
}

export default Brands;