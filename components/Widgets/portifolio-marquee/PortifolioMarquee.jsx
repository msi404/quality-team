import React from 'react'
import Marquee from "react-marquee-slider";
import Headline from '@/components/ui/Headline'
import VStack from '@/components/ui/VStack'
import images from '@/components/Widgets/portifolio-marquee/images'
import ContainerFluid from '@/components/ui/ContainerFluid'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import classes from '@/components/ui/ImagesCollection/ImagesCollection.module.css'


function PortifolioMarquee ()
{
	const {t:translate} = useTranslation('prtifolioMarquee')
  return (
	<ContainerFluid>
		  <VStack spacing='space-y-24'>
			  <Headline color='black'>{translate('header')}</Headline>
		  <div className={classes.scroller}>
			  <Marquee velocity={25}>
				  { images.map( ( image, index ) => (
						<Image className='mx-10' width={150} height={150} src={image} key={index} alt='logo'/>
					))}
		</Marquee>
		  </div>
		</VStack>
	</ContainerFluid>
  )
}


export default PortifolioMarquee;