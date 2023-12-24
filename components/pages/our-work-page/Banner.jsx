import Container from '@/components/ui/Container'
import { useEffect, useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import VStack from '@/components/ui/VStack';
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
import images from '@/components/pages/our-work-page/images'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'

function Banner ()
{
	const [ isMinWidthMedium, setIsMinWidthMedium ] = useState( false );
	const mediaQuery = useMediaQuery({ query: `(max-width: 1200px)` });
	const { t: translate } = useTranslation( 'ourworkBanner' )
	  useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
    }
  }, [mediaQuery, isMinWidthMedium]);
	return (
		<Container>
			<VStack center spacing='space-y-8'>
				<Headline color='text-slate-700'>{translate('headline')}</Headline>
				<Description color='text-slate-600'>{ translate( 'description' ) }</Description>
				<VStack>
	{ !isMinWidthMedium ? (
				<div>
				<div className='flex flex-wrap gap-3'>
							{ images.map( ( image, index ) => (
							<div key={index} className='ps-2'>
									<Image unoptimized className='rounded-3xl' width={400} height={400} src={image}/>
							</div>
					))}
				</div>
			</div>	
				) : ( <div>
						<div className='flex justify-center gap-5 flex-wrap'>
						{ images.map( ( image ) => (
						<Image unoptimized className='rounded-3xl' width={250} height={250} src={image}/>
					))}
						</div>
				</div>)}
				</VStack>
			</VStack>
		</Container>
	)
}

export default Banner;