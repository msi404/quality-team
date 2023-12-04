import HStack from '@/components/ui/HStack';
import Image from 'next/image'
import logo_1 from '@/public/logo_1.png'
import logo_2 from '@/public/logo_2.png'
import logo_3 from '@/public/logo_3.png'
function Brands ()
{
	return (
		<HStack width='max-w-md mx-auto px-5 items-center' center spaceBetween>
			<Image className='pt-5' unoptimized width={ 100 } height={ 100 } src={logo_1} />
			<Image unoptimized width={ 100 } height={ 100 } src={logo_2} />
			<Image unoptimized width={ 100 } height={ 100 } src={logo_3} />
		</HStack>
	)
}

export default Brands;