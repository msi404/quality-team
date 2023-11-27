import HStack from '@/components/ui/HStack';
import AppleLogo from '@/public/apple.svg'
import IraqiAirwaysLogo from '@/public/iraqi-airways.svg'
import MercedsBenzLogo from '@/public/mercedes-benz.svg'
import Image from 'next/image'
function Brands ()
{
	return (
		<HStack width='max-w-md mx-auto' center spaceBetween>
			<Image width={80} height={80} src={AppleLogo}/>
			<Image width={80} height={80} src={IraqiAirwaysLogo}/>
			<Image width={80} height={80} src={MercedsBenzLogo}/>
		</HStack>
	)
}

export default Brands;