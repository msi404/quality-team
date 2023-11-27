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
import Image from 'next/image'
function Metrics ()
{
	return (
		<ContainerFuild>
			<VStack spacing='space-y-24'>
			<VStack spacing='space-y-10'>
			<Title color='text-slate-700'>
					QualityTeam is a talented,
					<br />international team of digital
					<br />marketers, developers, and
					<br/>designers.
				</Title>
				<HStack responsive>
					<Image className='hidden lg:block' width={ 500 } height={ 500 } src={ UndrawOnlineArt } />
					<VStack spacing='space-y-10 ps-5'>
					<Description color='text-slate-500'>
					However, we don’t associate ourselves with your typical marketing agency. We don’t force large,
					annual contracts. We adhere to extremely high quality standards that often results in us turning away
					90% of the blogs we come across accepting guest posts. We don’t run from communication with
					clients – we run towards it.
					</Description>		
					<Description color='text-slate-500'>
					Clients are often amazed with the level of personalization and customization we provide to each and
					every campaign we work on, and one of the key metrics we pride ourselves on is that in 2022 we
					didn’t have a single refund for any of the work we provided!
					</Description>		
					</VStack>
				</HStack>
		</VStack>
		<HStack spacing='space-x-10 space-y-10' responsive>
		<VStack width='pe-16' responsive>
		<Fotonote color='text-green-400'>
			QualityTeam
		</Fotonote>			
		<Headline color='text-slate-700'>
			Our Core Values
		</Headline>		
		<Description color='text-slate-600'>
		These are the principles that guide our work ethic.					
		</Description>				
		</VStack>	
		<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>Let's Talk!</Button>			
		</HStack>	
		<HStack center padding='px-52' spacing='space-x-10'>
			<VStack width='w-52' center>
					<HStack center>
						<Counter duration={ 9 } color='text-green-400' from={ 0 } to={ 2788 } />
						<span className='md:text-5xl font-bold text-green-400'>+</span>
					</HStack>
					<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>Happy Client</h1>
			</VStack>
			<VStack width='w-52' center>
					<Counter duration={9} color='text-green-400' from={ 0 } to={ 56286 } />
					<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>Links Built</h1>
			</VStack>
			<VStack width='w-52' center>
					<Counter duration={9} color='text-green-400' from={ 0 } to={ 13347 } />
					<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>Working Hours</h1>
			</VStack>
			<VStack width='w-52' center>
					<Counter duration={9} color='text-green-400' from={ 0 } to={7842} />
					<h1 className='text-xs text-center lg:text-2xl' color='text-slate-700'>Cups of Coffee</h1>
			</VStack>
		</HStack>
		</VStack>
		</ContainerFuild>
	)
}

export default Metrics;