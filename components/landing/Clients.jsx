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
import OurBrandsImage from '@/public/our-brands.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Clients ()
{
	return (
		<Container background='bg-slate-100'>
			<div className='flex justify-center'>
				<HStack responsive spacing='space-y-10 lg:space-x-10'>
					<VStack>
						<Image className='rounded-3xl' width={500} height={500} src={OurBrandsImage} />
					</VStack>
					<VStack spacing='space-y-10'>
					<Header animate color='text-green-400'>SEO Specialists</Header>
						<Title color='text-slate-700' animate delay={ 0.2 }>For Brands<br/>Who Want Results</Title>
						<Description animate delay={0.2} color='text-slate-400'>
							Whether SEO is your specialty or just a necessity, we’ve got you
							<br />covered. Our SEO specialists make link building a breeze so that you
							<br />can focus on hitting your KPIs while your backlink profile is being
							<br/>developed on autopilot with quality, worry-free links.
						</Description>
						<motion.div className='space-y-10' initial={{opacity:0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition:{'duration':0.4,'delay':0.2}}} viewport={{once:false,amount:0.90}}>
						<HStack spaceBetween>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-green-400'>01</Fotonote>
							<Text color='text-slate-400'>Dedicated SEO specialist and<br/>concierge keyword research<br/>on higher plans</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>03</Fotonote>
							<Text color='text-slate-400'>Easy to follow reporting,<br/>without the fluff.</Text>
							</ListItem>
							</VStack>
							</List>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-green-400'>02</Fotonote>
							<Text color='text-slate-400'>Simple automated invoicing,<br/>so there’s never a delay with<br/>your campaign</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>04</Fotonote>
							<Text color='text-slate-400'>Guaranteed satisfaction, or<br/>your money back</Text>
							</ListItem>
							</VStack>
							</List>
							</HStack>
							<Button variant='bg-green-400' active='active:bg-green-500' hover='hover:bg-green-600'>Learn More</Button>
						</motion.div>
					</VStack>
				</HStack>
			</div>
		</Container>
	)
}

export default Clients;