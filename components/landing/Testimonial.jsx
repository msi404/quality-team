import Text from '@/components/ui/Text'
import Headline from '@/components/ui/Headline';
import Description from '@/components/ui/Description'
import UiBlock from '@/components/widgets/ui-block/UiBlock'
import Header from '@/components/ui/Header'
import * as Avatar from '@radix-ui/react-avatar';

function Testimonial ()
{
	return (
		<div className='flex flex-col justify-center gap-10'>
			<div className='space-y-10 text-center'>
			<Text color='green'>Our Amazing</Text>
				<Headline color='black'>Clients</Headline>
				<Description color='gray'>
					These wonderful companies have been with us from the<br /> beginning
				</Description>
			</div>
			<div className='flex gap-10'>
				<UiBlock>
					<div className='space-y-12'>
				<div className='space-y-5'>
					<Header>
						Working with Shortlist was a great experience
					</Header>
					<Description>
						Shortlist has been a great help for our SEO efforts, all while requiring minimal oversight / guidance from us. Our organic traffic has improved due to their blogging and backlinking efforts, and their communication is stellar. I have …
					</Description>
					</div>
					<div className='flex items-center gap-5 text-slate-50'>
						<Avatar.Root className='inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
							<Avatar.Image className='h-full w-full rounded-[inherit] object-cover' src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"/>
							</Avatar.Root>
					<h1>Jessica</h1>
					</div>
</div>
				</UiBlock>
				<UiBlock>
					<div className='space-y-12'>
				<div className='space-y-5'>
					<Header>
						Shortlist has been a great help for our SEO efforts
					</Header>
					<Description>
						Shortlist has been a great help for our SEO efforts, all while requiring minimal oversight / guidance from us. Our organic traffic has improved due to their blogging and backlinking efforts, and their communication is stellar. I have …
					</Description>
					</div>
					<div className='flex items-center gap-5 text-slate-50'>
						<Avatar.Root className='inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
								<Avatar.Image className='h-full w-full rounded-[inherit] object-cover' src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
							</Avatar.Root>
						<h1>Noor</h1>
					</div>
</div>
				</UiBlock>
			</div>
		</div>
	)
}

export default Testimonial;