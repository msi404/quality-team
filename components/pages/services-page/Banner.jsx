import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack';
import Description from '@/components/ui/Description'
import Button from '@/components/ui/Button'
import Headline from '@/components/ui/Headline';
import Container from '@/components/ui/Container';
function Banner ()
{
	return (
		<Container>
			<VStack spacing='space-y-8'>
				<Headline color='text-slate-700'>We manage business, so you<br />don’t have to</Headline>
				<Description color='text-slate-500'>Leave the business mangement to us and focus on growing your business</Description>
				<HStack responsive>
					<a href="tel:07827131748">
						<Button width='w-72' variant='bg-purple-400' active='active:bg-purple-400' hover='hover:bg-purple-600'>Talk With An Expert</Button>
					</a>
				</HStack>
			</VStack>
		</Container>
	)
}

export default Banner;