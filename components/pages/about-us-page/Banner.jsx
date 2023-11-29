import { useRef, useEffect, useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import Headline from '@/components/ui/Headline'
import Button from '@/components/ui/Button'
import VStack from '@/components/ui/VStack'
import Container from '@/components/ui/Container'
import ImagesCollection from '@/components/ui/ImagesCollection/ImagesCollection'
import images from '@/components/pages/about-us-page/images'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useTranslation} from 'next-i18next'
function Banner ()
{
	const {push} = useRouter()
	const onLinkClicked = () =>
	{
		push('https://web.facebook.com/profile.php?id=61551994790268')
	}
	const {t:translate} = useTranslation('aboutUsBanner')
	const [ isMinWidthMedium, setIsMinWidthMedium ] = useState( false );
	const mediaQuery = useMediaQuery({ query: `(max-width: 1200px)` });
	const scope = useRef();
	const {scrollYProgress} = useScroll( {
		target: scope
	} )
	const x = useTransform( scrollYProgress, [ 0, 0.8], [ "1%", "-100%" ] )
	  useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
    }
  }, [mediaQuery, isMinWidthMedium]);
	return (
		<Container background='bg-slate-100'>
			<VStack spacing='space-y-20'>
			<VStack responsive spacing='space-y-10'>
			<Headline width='max-w-2xl' color='text-slate-700'>
				{translate('header')}
			</Headline>
					<Button onClick={onLinkClicked} variant='bg-purple-400' active='active:bg-purple-400' hover='hover:bg-purple-600'>{translate('button')}</Button>
			</VStack>
				{ !isMinWidthMedium ? (
				<ImagesCollection>
				<motion.div style={{x}} className='flex '>
							{ images.map( ( image, index ) => (
							<div key={index} className='ps-2'>
									<Image className='rounded-3xl' width={600} height={600} src={image}/>
							</div>
					))}
				</motion.div>
			</ImagesCollection>	
				) : ( <ImagesCollection>
						<div className='flex justify-center gap-5 flex-wrap'>
						{ images.map( ( image ) => (
						<Image className='rounded-3xl' width={250} height={250} src={image}/>
					))}
						</div>
				</ImagesCollection>)}
			</VStack>
		</Container>
	)
}

export default Banner;