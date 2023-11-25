import Container from '@/components/ui/Container'
import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import Fotonote from '@/components/ui/Fotonote'
import List from '@/components/ui/List'
import ListItem from '@/components/ui/ListItem'
import Image from 'next/image'
import LandingImage from '@/public/landing-image-1.png'
import {motion} from 'framer-motion'
function Features ()
{
	return (
		<Container background='bg-slate-100'>
			<div className='flex justify-center'>
			<HStack spacing='space-x-10'>
			<VStack>
					<Image className='rounded-3xl' width={500} height={500} src={LandingImage} />
			</VStack>
			<VStack spacing='space-y-10'>
					<Header animate color='green'>Company Overview</Header>
						<Title animate delay={0.2}>What Makes<br />Quality Team Different</Title>
						<motion.div initial={{opacity:0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition:{'duration':0.4,'delay':0.2}}} viewport={{once:false,amount:0.90}}>
						<HStack spaceBetween>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='green'>01</Fotonote>
							<Text color='gray'>Contextual, dofollow links<br/>from high authority sites.</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='green'>03</Fotonote>
							<Text color='gray'>800+ word articles from<br/>quality writers.</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='green'>05</Fotonote>
							<Text color='gray'>Dozens of relevant niches to<br/>choose from</Text>
							</ListItem>
							</VStack>
							</List>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='green'>02</Fotonote>
							<Text color='gray'>Choose the keywords you<br/>want to rank for.</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='green'>04</Fotonote>
							<Text color='gray'>Each site receives a minimum<br/>of 500 organic visits a month.</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='green'>06</Fotonote>
							<Text color='gray'>Guaranteed to last 12 months,<br/>or it’s on us.</Text>
							</ListItem>
							</VStack>
							</List>
						</HStack>
						</motion.div>
					</VStack>
				</HStack>
			</div>
		</Container>
	)
}

export default Features;
