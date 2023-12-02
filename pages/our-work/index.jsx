import {Fragment} from 'react'
import Banner from '@/components/pages/our-work-page/Banner';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

function Page ()
{
	return (
		<Fragment>
			<Banner />
		</Fragment>
	)
}

export default Page;


export async function getStaticProps ( { locale } )
{
  return {
    props: {
      ... (await serverSideTranslations(locale,['ourworkBanner','contactModal','navbar']))
    }
  }
}
