import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from '@/components/Widgets/gallery-carousel/images'
import Image from 'next/image'
function GalleryCarousel() {
  return (
	  <CarouselProvider
		isPlaying
		naturalSlideWidth={ 100 }
		  naturalSlideHeight={33}
		  totalSlides={ 5 }
		  interval={ 4000 }
		  infinite
		  dragEnabled={ false }
		  touchEnabled={false}
	  >
		  
		  <Slider>
			{ images.map( ( image, index ) => (
			  <Slide index={index} key={index}>
				  <Image width={1000} height={500} src={image}/>
			 </Slide>
		  ))}
			</Slider>
	</CarouselProvider>	  
  )
}

export default GalleryCarousel;