import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack';
import Description from '@/components/ui/Description'
import Button from '@/components/ui/Button'
import Headline from '@/components/ui/Headline';
import Container from '@/components/ui/Container';
import Image from 'next/image'
import { useTranslation} from 'next-i18next'

function Banner ()
{
	  const {t:translate} = useTranslation('servicesBanner')
	return (
		<Container background="bg-gradient-to-l from-pink-500 from-10% via-red-500 via-30% to-orange-500">
			<HStack center responsive spacing='space-y-8'>
				<VStack spacing='space-y-8'>
				<Headline width='max-w-xl' color='text-slate-100'>{translate('headline')}</Headline>
				<Description color='text-slate-200'>{translate('description')}</Description>
				<HStack responsive>
					<a href="tel:07827131748">
						<Button width='w-72' variant='bg-purple-400' active='active:bg-purple-400' hover='hover:bg-purple-600'>{translate('button')}</Button>
					</a>
					</HStack>
				</VStack>
					<Image width={600} height={600} src='https://us-wn-g.gr-cdn.com/_next/static/media/integration@2x.39139e7f.avif'/>
			</HStack>
		</Container>
	)
}

export default Banner;