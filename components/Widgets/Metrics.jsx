import ContainerFuild from '@/components/ui/ContainerFluid'
import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import Button from '@/components/ui/Button'
import Headline from '@/components/ui/Headline'
import Fotonote from '@/components/ui/Fotonote'
import Title from '@/components/ui/Title'
import Description from '@/components/ui/Description'
import Counter from '@/components/ui/Counter'
import UndrawOnlineArt from '@/public/undraw_online_art.svg'
import { useTranslation} from 'next-i18next'
import Image from 'next/image'
function Metrics ()
{
		const {t:translate} = useTranslation('metrics')
	return (
		<ContainerFuild>
			<VStack spacing='space-y-24'>
			<VStack spacing='space-y-10'>
					<Title animate width='max-w-3xl' color='text-slate-700'>{translate('title')}</Title>
				<HStack responsive>
					<Image className='hidden lg:block' width={ 500 } height={ 500 } src={ UndrawOnlineArt } />
					<VStack spacing='space-y-10 ps-5'>
							<Description animate color='text-slate-500'>{translate('descriptionOne')}</Description>		
							<Description animate delay={0.4} color='text-slate-500'>{translate('descriptionTwo')}</Description>		
					</VStack>
				</HStack>
		</VStack>
		<HStack spacing='space-x-10 space-y-10' responsive>
		<VStack width='lg:pe-16' responsive>
		<Fotonote color='text-green-400'>{translate('fotonote')}</Fotonote>			
		<Headline color='text-slate-700'>{translate('headline')}</Headline>		
		<Description color='text-slate-600'>{translate('description')}</Description>				
		</VStack>	
		<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>{translate('button')}</Button>			
		</HStack>	
		<HStack center padding='px-52'>
			<VStack width='w-52' center>
			<HStack center>
			<Counter duration={ 9 } color='text-green-400' from={ 0 } to={ 2788 } />
			<span className='md:text-5xl font-bold text-green-400'>+</span>
			</HStack>
			<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>{translate('firstMetricLabel')}</h1>
			</VStack>
			<VStack width='w-52' center>
			<Counter duration={9} color='text-green-400' from={ 0 } to={ 56286 } />
			<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>{translate('secondMetricLabel')}</h1>
			</VStack>
			<VStack width='w-52' center>
			<Counter duration={9} color='text-green-400' from={ 0 } to={ 13347 } />
			<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>{translate('thirdMetricLabel')}</h1>
			</VStack>
			<VStack width='w-52' center>
			<Counter duration={9} color='text-green-400' from={ 0 } to={7842} />
			<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>{translate('fourthMetricLabel')}</h1>
			</VStack>
		</HStack>
		</VStack>
		</ContainerFuild>
	)
}

export default Metrics;