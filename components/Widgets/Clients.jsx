import ContainerFluid from '@/components/ui/ContainerFluid'
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
import { motion } from 'framer-motion'
import Image from 'next/image'
import destinations from '@/public/destinations.jpeg'
import {useRouter} from 'next/router'
import { useTranslation} from 'next-i18next'

function Clients ()
{
	const {push} = useRouter()
	const onLinkClicked = () =>
	{
		push('https://web.facebook.com/profile.php?id=61551994790268')
	}
	const {t:translate} = useTranslation('clients')
	return (
		<ContainerFluid background='bg-slate-100'>
			<div className='flex justify-center'>
				<HStack responsive spacing='space-y-10'>
					<VStack>
						<Image className='rounded-3xl' width={500} height={500} src={destinations} />
					</VStack>
					<VStack spacing='space-y-10' width='lg:ps-16'>
						<Header animate color='text-green-400'>{translate('header')}</Header>
						<Title color='text-slate-700' width='max-w-md' animate delay={ 0.2 }>{translate('title')}</Title>
						<Description width='max-w-md' animate delay={0.2} color='text-slate-400'>
							{translate('description')}
						</Description>
						<motion.div className='space-y-10' initial={{opacity:0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition:{'duration':0.4,'delay':0.2}}} viewport={{once:true,amount:0.90}}>
						<HStack spaceBetween>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-green-400'>01</Fotonote>
							<Text width='max-w-sm' color='text-slate-400'>{translate('one')}</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>03</Fotonote>
							<Text color='text-slate-400'>{translate('three')}</Text>
							</ListItem>
							</VStack>
							</List>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-green-400'>02</Fotonote>
							<Text width='max-w-sm' color='text-slate-400'>{translate('two')}</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>04</Fotonote>
								<Text color='text-slate-400'>{translate('four')}</Text>
							</ListItem>
							</VStack>
							</List>
							</HStack>
								<Button onClick={onLinkClicked} variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>{translate('button')}</Button>
						</motion.div>
					</VStack>
				</HStack>
			</div>
		</ContainerFluid>
	)
}

export default Clients;