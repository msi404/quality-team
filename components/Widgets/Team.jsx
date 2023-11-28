import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import ContainerFuild from '@/components/ui/ContainerFluid'
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
import ItalicText from '@/components/ui/ItalicText'
import Image from 'next/image'
import Photographer from '@/public/photographer.jpg'
import VideoEditor from '@/public/video_editor.jpg'
import Hr from '@/public/hr.jpg'
import { motion } from 'framer-motion'
import { useTranslation} from 'next-i18next'

function Team ()
{
		const {t:translate} = useTranslation('team')
	return (
		<ContainerFuild background='bg-slate-100'>
			<VStack spacing='space-y-24'>
				<VStack spacing='space-y-5'>
					<Headline animate width='max-w-4xl' color='text-slate-700'>{translate('headline')}</Headline>
					<Description animate color='text-slate-600'>{translate('description')}</Description>
				</VStack>
				<div className='flex flex-col justify-center gap-24 items-center lg:flex-row'>
					<VStack center spacing='space-y-5'>
						<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image className='absolute -top-16 left-0' width={ 500 } height={ 500 } src={ Photographer } />
						</motion.div>
					<VStack center>
							<Header animate color='text-slate-700'>{translate('firstName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('firstDescription')}</ItalicText>
					</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
						<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image className='absolute -top-6 left-0' width={ 500 } height={ 500 } src={ VideoEditor } />
						</motion.div>
					<VStack center>
					<Header animate color='text-slate-700'>{translate('secondName')}</Header>
							<ItalicText animate color='text-slate-400'>{translate('secondDescription')}</ItalicText>
					</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
					<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image className='absolute -top-8 left-0' width={ 500 } height={ 500 } src={ Hr } />
					</motion.div>
						<VStack center>
						<Header animate color='text-slate-700'>{translate('thirdName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('thirdDescription')}</ItalicText>
						</VStack>
					</VStack>
				</div>
			</VStack>
		</ContainerFuild>
	)
}

export default Team;