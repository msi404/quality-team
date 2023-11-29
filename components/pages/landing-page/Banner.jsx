import Button from '@/components/ui/Button';
import Description from '@/components/ui/Description'
import Headline from '@/components/ui/Headline'
import VStack from '@/components/ui/VStack'
import HStack from '@/components/ui/HStack'
import ContainerImage from '@/components/ui/ContainerImage'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
function Banner ()
{
  const {t:translate} = useTranslation('homeBanner')
  const backgorundUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.ctfassets.net%2Fhrltx12pl8hq%2F1fR5Y7KaK9puRmCDaIof7j%2F09e2b2b9eaf42d450aba695056793607%2Fvector1.jpg&f=1&nofb=1&ipt=eabdf2acc420916c0fc91de0218dbe8bae7292c78656bf45e11ecc5b0e99acb8&ipo=images'
	return (
    <ContainerImage background='bg-slate-200' backgroundImage={backgorundUrl}>
        <HStack center responsive spacing='space-y-8'>
           <VStack responsive spacing='space-y-8'>
            <div className='mt-12'>
        <VStack spacing='space-y-10'>
            <Headline width='max-w-xl'>{translate('header')}</Headline>
        <Description width='md:w-120'>
          {translate('description')}
        </Description>
    </VStack>
      </div>
      <div className='mt-12'>
        <Button variant='bg-green-500' active='active:bg-green-800' hover='hover:bg-green-600'>
          {translate('button')}
        </Button>
      </div>
          </VStack>
          <Image width={600} height={600} src='https://us-wn-g.gr-cdn.com/_next/static/media/turn_your_list_into@2x.42c121f8.avif' />
       </HStack>
    </ContainerImage>
	)
}

export default Banner;

