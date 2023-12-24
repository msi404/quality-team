import {Fragment} from 'react'
import PortifolioMarquee from '@/components/Widgets/portifolio-marquee/PortifolioMarquee'
import GalleryCarousel from '@/components/Widgets/gallery-carousel/GalleryCarousel'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
function Page ()
{
	return (
		<Fragment>
			<GalleryCarousel />
			<PortifolioMarquee />
		</Fragment>
	)
}

export default Page;

export async function getStaticProps ( { locale } )
{
  return {
    props: {
      ... (await serverSideTranslations(locale,['navbar','prtifolioMarquee']))
    }
  }
}

