import ContainerFuild from '@/components/ui/ContainerFluid'
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
import VStack from '@/components/ui/VStack'
import Button from '@/components/ui/Button'
import { useTranslation} from 'next-i18next'

function Booking ({background})
{
	const {t:translate} = useTranslation('booking')
	return (
		<ContainerFuild background={background}>
			<VStack spacing='space-y-10' center>
				<Headline width='max-w-3xl' animate delay={ 0.3 } color='text-slate-800' align='text-center'>{translate('headline')}</Headline>
				<Description width='max-w-2xl' animate delay={ 0.3 } color='text-slate-400' align='text-center'>{translate('description')}</Description>
			<a href="tel:07827131748">
					<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>{translate('button')}</Button>
			 </a>
			</VStack>
		</ContainerFuild>
	)
}

export default Booking;