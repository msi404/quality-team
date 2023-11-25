import Container from '@/components/ui/Container'
import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import Fotonote from '@/components/ui/Fotonote'
import List from '@/components/ui/List'
import ListItem from '@/components/ui/ListItem'
function Features ()
{
	return (
		<Container background='bg-slate-100'>
			<div className='flex justify-center'>
			<HStack spacing='space-x-10'>
			<VStack>
					<Header color='green'>Company Overview</Header>
			</VStack>
			<VStack spacing='space-y-10'>
					<Header color='green'>Company Overview</Header>
						<Title>What Makes<br />Quality Team Different</Title>
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
					</VStack>
				</HStack>
			</div>
		</Container>
	)
}

export default Features;
