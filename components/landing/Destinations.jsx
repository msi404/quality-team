import Container from '@/components/ui/Container'
import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack'
import Text from '@/components/ui/Text'
import List from '@/components/ui/List'
import ListItem from '@/components/ui/ListItem'
import Fotonote from '@/components/ui/Fotonote'
import Header from '@/components/ui/Header'
import Title from '@/components/ui/Title'
import Description from '@/components/ui/Description'
import Button from '@/components/ui/Button'
import DestenationImage from '@/public/destenation-image.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
function Destinations ()
{
	return (
		<Container>
			<div className='flex justify-center'>
				<HStack responsive spacing='space-y-10 lg:space-x-10'>
					<VStack spacing='space-y-10'>
					<Header animate color='text-purple-400'>Simple, Scalable Link Building</Header>
						<Title color='text-slate-700' animate delay={ 0.2 }>For Agencies<br />Who Love Their<br />Clients</Title>
						<Description animate delay={0.2} color='text-slate-400'>
							Shortlist is an ideal link building provider for agencies who love their
							<br />clients and want their backlink profile protected. Our process is
							<br />simple and easy to follow and will allow you to focus on doing what
							<br/>you do best while we handle the rest.
						</Description>
						<motion.div className='space-y-10' initial={{opacity:0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition:{'duration':0.4,'delay':0.2}}} viewport={{once:false,amount:0.90}}>
						<HStack spaceBetween>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-purple-400'>01</Fotonote>
							<Text color='text-slate-400'>Monthly updates and easy to<br/>follow reporting</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-purple-400'>03</Fotonote>
							<Text color='text-slate-400'>Fair pricing that allows for a<br/>considerable markup</Text>
							</ListItem>
							</VStack>
							</List>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-purple-400'>02</Fotonote>
							<Text color='text-slate-400'>No Shortlist branding – white<br/>label friendly!</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-purple-400'>04</Fotonote>
							<Text color='text-slate-400'>Dedicated SEO specialist</Text>
							</ListItem>
							</VStack>
							</List>
							</HStack>
							<Button variant='bg-purple-400' active='active:bg-purple-500' hover='hover:bg-purple-600'>Learn More</Button>
						</motion.div>
					</VStack>
					<VStack>
						<Image className='rounded-3xl' width={500} height={500} src={DestenationImage} />
					</VStack>
				</HStack>
			</div>
		</Container>
	)
}

export default Destinations;