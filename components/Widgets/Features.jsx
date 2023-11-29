import ContainerFluid from '@/components/ui/ContainerFluid'
import HStack from '@/components/ui/HStack';
import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import Fotonote from '@/components/ui/Fotonote'
import List from '@/components/ui/List'
import ListItem from '@/components/ui/ListItem'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation} from 'next-i18next'

function Features ()
{
	const landingpage = 'https://res.cloudinary.com/dckoelcja/image/upload/v1701282853/landing-image-1_e9lxgs.png'
	const {t:translate} = useTranslation('features')
	return (
		<ContainerFluid background='bg-slate-100'>
			<div className='flex justify-center'>
			<HStack responsive spacing='space-y-10'>
			<VStack>
					<Image className='rounded-3xl' width={500} height={500} src={landingpage} />
			</VStack>
			<VStack spacing='space-y-10 lg:ps-16'>
						<Header animate color='text-green-400'>{translate('header')}</Header>
						<Title color='text-slate-700' animate delay={ 0.2 }>{translate('title')}</Title>
						<motion.div initial={{opacity:0,translateY:'30px'}} whileInView={{opacity:1,translateY:'0px',transition:{'duration':0.4,'delay':0.2}}} viewport={{once:true,amount:0.90}}>
						<HStack spaceBetween>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-green-400'>01</Fotonote>
											<Text color='text-slate-500'>{translate('one')}</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>03</Fotonote>
											<Text color='text-slate-500'>{translate('three')}</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>05</Fotonote>
											<Text color='text-slate-500'>{translate('five')}</Text>
							</ListItem>
							</VStack>
							</List>
							<List>
							<VStack spacing='space-y-6'>
							<ListItem>
							<Fotonote color='text-green-400'>02</Fotonote>
							<Text color='text-slate-500'>{translate('two')}</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>04</Fotonote>
							<Text color='text-slate-500'>{translate('four')}</Text>
							</ListItem>
							<ListItem>
							<Fotonote color='text-green-400'>06</Fotonote>
							<Text color='text-slate-500'>{translate('six')}</Text>
							</ListItem>
							</VStack>
							</List>
						</HStack>
						</motion.div>
					</VStack>
				</HStack>
			</div>
		</ContainerFluid>
	)
}

export default Features;
