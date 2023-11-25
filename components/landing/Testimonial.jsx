import ContainerFluid from '@/components/ui/ContainerFluid'
import Text from '@/components/ui/Text';
import Fotonote from '@/components/ui/Fotonote'
import Description from '@/components/ui/Description'
import Card from '@/components/ui/Card'
import Header from '@/components/ui/Header'
import VStack from '@/components/ui/VStack'
import HStack from '@/components/ui/HStack'
import Brands from '@/components/landing/Brands'
import * as Avatar from '@radix-ui/react-avatar';
import {motion} from 'framer-motion'
function Testimonial ()
{	
	return (
		<ContainerFluid>
			<VStack spacing='space-y-10'>
			<div className='space-y-5 lg:space-y-10 text-center'>
				<Text animate color='text-green-400'>Our Amazing</Text>
				<Header delay={0.3} animate size='lg:text-7xl' align='text-center' color='black'>Clients</Header>
				<Description delay={0.4} animate width='full' align='text-center' color='gray'>
					These wonderful companies have been with us from the<br /> beginning
				</Description>
				</div>
				<motion.div initial={ { opacity: 0, translateY: '40px' } } whileInView={ { opacity: 1, translateY: '0px',transition:{'duration':0.3,'delay':0.3}} } viewport={ { once:false,amount:0.8}} className='grayscale'>
					<Brands />
				</motion.div>
			<div className='flex flex-col items-center md:items-stretch md:flex-row gap-10'>
				<Card animate>
					<div className='space-y-12'>
				<div className='space-y-5'>
					<Header>
						Working with QualityTeam was a great experience
					</Header>
					<Description width='w-40'>
						QualityTeam has been a great help for our SEO efforts, all while requiring minimal oversight / guidance from us. Our organic traffic has improved due to their blogging and backlinking efforts, and their communication is stellar. I have …
					</Description>
					</div>
					<motion.div initial={{scale:0}} whileInView={{scale:1,transition: {'delay': 0.5}}} viewport={{once:false,amount:0.8}} className='flex items-center gap-5 text-slate-50'>
						<Avatar.Root className='inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
							<Avatar.Image className='h-full w-full rounded-[inherit] object-cover' src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"/>
							</Avatar.Root>
					<VStack>
					<Text>Jessica</Text>
					<Fotonote>US</Fotonote>
					</VStack>
					</motion.div>
					</div>
				</Card>
				<Card animate>
					<div className='space-y-12'>
				<div className='space-y-5'>
					<Header>
						QualityTeam has been a great help for our SEO efforts
					</Header>
					<Description width='w-40'>
						QualityTeam has been a great help for our SEO efforts, all while requiring minimal oversight / guidance from us. Our organic traffic has improved due to their blogging and backlinking efforts, and their communication is stellar. I have …
					</Description>
					</div>
					<motion.div initial={{scale:0}} whileInView={{scale:1,transition:{'delay':0.3}}} viewport={{once:false}} className='flex items-center gap-5 text-slate-50'>
						<Avatar.Root className='inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
								<Avatar.Image className='h-full w-full rounded-[inherit] object-cover' src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
							</Avatar.Root>
							<VStack>
								<Text>Noor</Text>
								<Fotonote>US</Fotonote>
							</VStack>
					</motion.div>
					</div>
				</Card>
			</div>
			</VStack>
		</ContainerFluid>
	)
}

export default Testimonial;