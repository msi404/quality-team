import ContainerFuild from '@/components/ui/ContainerFluid'
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
import VStack from '@/components/ui/VStack'
import Button from '@/components/ui/Button'
function Booking ()
{
	return (
		<ContainerFuild>
			<VStack spacing='space-y-10' center>
				<Headline animate delay={0.3} color='text-slate-800' align='text-center'>Let’s get you<br />QualityTeam to the top!</Headline>
				<Description animate delay={0.3} color='text-slate-400' align='text-center'>
					We help boost revenues for businesses like yours through proven strategies that will turn your
					<br />website into a lead-attracting, profit-generating machine..
				</Description>
        <Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>
          Schedule A Call
		</Button>
			</VStack>
		</ContainerFuild>
	)
}

export default Booking;