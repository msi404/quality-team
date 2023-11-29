import Container from '@/components/ui/Container'
import VStack from '@/components/ui/VStack'
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
function Banner ()
{
	return (
		<Container>
			<VStack center spacing='space-y-8'>
				<Headline color='text-slate-700'>Manging Business is in our DNA 🧬</Headline>
				<Description color='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero nam perferendis ratione sit, earum debitis voluptatibus enim, rerum aperiam odio? Illum quam a aspernatur, deleniti placeat nisi corporis quisquam.</Description>
			</VStack>
		</Container>
	)
}

export default Banner;