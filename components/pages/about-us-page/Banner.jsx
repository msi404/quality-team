import { useRef, useEffect, useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import Headline from '@/components/ui/Headline'
import Button from '@/components/ui/Button'
import VStack from '@/components/ui/VStack'
import Container from '@/components/ui/Container'
import ImagesCollection from '@/components/ui/ImagesCollection/ImagesCollection'
import images from '@/components/pages/about-us-page/Images'
import Image from 'next/image'
import {motion,useTransform,useScroll} from 'framer-motion'
function Banner ()
{
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
			<VStack spacing='space-y-16'>
			<VStack responsive spacing='space-y-10'>
			<Headline color='text-slate-800'>
				Beyond the Typical<br/>Marketing Agency:<br/>Meet QualityTeam
			</Headline>
			<Button variant='bg-purple-400' active='active:bg-purple-400' hover='hover:bg-purple-600'>Let's Talk!</Button>
			</VStack>
				{ !isMinWidthMedium ? (
				<ImagesCollection>
				<motion.div style={{x}} className='flex space-x-5'>
						{ images.map( ( image,index) => (
						<Image key={index} className='rounded-3xl' width={250} height={250} src={image}/>
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