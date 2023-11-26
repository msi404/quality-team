import Fotonote from '@/components/ui/Fotonote'
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import Header from '@/components/ui/Header'
import Text from '@/components/ui/Text'
import VStack from '@/components/ui/VStack'
import HStack from '@/components/ui/HStack'
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
import ContainerFuild from '@/components/ui/ContainerFluid'
import List from '@/components/ui/List'
import ListItem from '@/components/ui/ListItem'
import Card from '@/components/ui/Card'
function Pricing ()
{
	return (
		<ContainerFuild background='bg-slate-100'>
			<VStack center spacing='space-y-10'>
				<VStack center spacing='space-y-3'>
				<Fotonote color='text-green-400'>Pricing</Fotonote>
				<Title color='text-slate-600'>Clean Business done For you</Title>
				<Description color='text-slate-400'>Choose the package that suits your needs based on Domain Authority or Traffic.</Description>
				</VStack>
				<HStack spacing='space-x-5'>
					<Card>
						<VStack center spacing='space-y-10'>
						<VStack>
							<Header>Starter</Header>
							<Description color='text-slate-300'>
								For new companies looking to get their SEO started off on the right foot.
							</Description>
						</VStack>
						<VStack>
							<HStack spacing='space-x-2' center>
									<Headline>$1,275</Headline>
									<Fotonote>/month</Fotonote>
							</HStack>
							</VStack>
							<List spacing='space-y-5'>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>1</Fotonote>
										<Text>Standard Backlinks</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>2</Fotonote>
										<Text>Premium Backlinks</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>3</Fotonote>
										<Text>Platinum Backlink</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>4</Fotonote>
										<Text>Quora & 5 Directories</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>5</Fotonote>
										<Text>Detailed Reporting</Text>
									</HStack>
								</ListItem>
							</List>
							<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-500'>Get Started</Button>
						</VStack>
					</Card>
					<Card>
						<VStack center spacing='space-y-10'>
						<VStack>
							<Header>Growth</Header>
							<Description color='text-slate-300'>
								For new companies looking to get their SEO started off on the right foot.
							</Description>
						</VStack>
						<VStack>
							<HStack spacing='space-x-2' center>
									<Headline>$2,650</Headline>
									<Fotonote>/month</Fotonote>
							</HStack>
							</VStack>
							<List spacing='space-y-5'>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>1</Fotonote>
										<Text>Standard Backlinks</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>2</Fotonote>
										<Text>Premium Backlinks</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>3</Fotonote>
										<Text>Platinum Backlink</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>4</Fotonote>
										<Text>Quora & 5 Directories</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>5</Fotonote>
										<Text>Detailed Reporting</Text>
									</HStack>
								</ListItem>
							</List>
							<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-500'>Get Started</Button>
						</VStack>
					</Card>
					<Card>
						<VStack center spacing='space-y-10'>
						<VStack>
							<Header>Accelerator</Header>
							<Description color='text-slate-300'>
								For new companies looking to get their SEO started off on the right foot.
							</Description>
						</VStack>
						<VStack>
							<HStack spacing='space-x-2' center>
									<Headline>$5,600</Headline>
									<Fotonote>/month</Fotonote>
							</HStack>
							</VStack>
							<List spacing='space-y-5'>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>1</Fotonote>
										<Text>Standard Backlinks</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>2</Fotonote>
										<Text>Premium Backlinks</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>3</Fotonote>
										<Text>Platinum Backlink</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>4</Fotonote>
										<Text>Quora & 5 Directories</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack spacing='space-x-4'>
										<Fotonote color='text-green-400'>5</Fotonote>
										<Text>Detailed Reporting</Text>
									</HStack>
								</ListItem>
							</List>
							<Button variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-500'>Get Started</Button>
						</VStack>
					</Card>
				</HStack>
			</VStack>
		</ContainerFuild>
	)
}

export default Pricing;