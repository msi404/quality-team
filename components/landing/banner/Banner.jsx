import TinyText from '@/components/ui/TinyText'
import Button from '@/components/ui/Button';
import Description from '@/components/ui/Description'
import Headline from '@/components/ui/Headline'
import UiBlock from '@/components/widgets/ui-block/UiBlock';
function Banner ()
{
	return (
    <div className='flex flex-col p-5'>
      <div className='flex flex-col gap-10 mt-12'>
        <Headline color='black'>
          Natural, Clean <br />
          Backlinks Built For You
        </Headline>
        <Description color='gray'>
          We help you develop a reputable backlink profile by building contextual,<br />
          dofollow links that will increase your search engine rankings and your site’s traffic.
        </Description>
      </div>
      <div className='mt-12'>
        <Button>
          Subsecribe Now
        </Button>
      </div>
    </div>
	)
}

export default Banner;