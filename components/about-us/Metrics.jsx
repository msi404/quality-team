import ContainerFuild from '@/components/ui/ContainerFluid'
import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import Counter from '@/components/ui/Counter'
function Metrics ()
{

	return (
		<ContainerFuild>
		<HStack padding='px-52' spaceBetween>
			<VStack width='w-52' center>
					<HStack center>
						<Counter duration={ 9 } color='text-green-400' from={ 0 } to={ 2788 } />
						<span className='text-5xl font-bold text-green-400'>+</span>
					</HStack>
					<Header color='text-slate-700'>Happy Client</Header>
			</VStack>
			<VStack width='w-52' center>
					<Counter duration={9} color='text-green-400' from={ 0 } to={ 56286 } />
					<Header color='text-slate-700'>Links Built</Header>
			</VStack>
			<VStack width='w52' center>
					<Counter duration={9} color='text-green-400' from={ 0 } to={ 13347 } />
					<Header color='text-slate-700'>Working Hours</Header>
			</VStack>
			<VStack width='w-52' center>
					<Counter duration={9} color='text-green-400' from={ 0 } to={7842} />
					<Header color='text-slate-700'>Cups of Coffee</Header>
			</VStack>
		</HStack>
		</ContainerFuild>
	)
}

export default Metrics;