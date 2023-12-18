import VStack from '@/components/ui/VStack'
import Header from '@/components/ui/Header'
import ContainerFuild from '@/components/ui/ContainerFluid'
import Headline from '@/components/ui/Headline'
import Description from '@/components/ui/Description'
import ItalicText from '@/components/ui/ItalicText'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import director from '@/public/director.jpeg'
import photographer from '@/public/photographer.jpeg'
import video_editor from '@/public/video_editor.jpeg'
import resercher from '@/public/resercher.jpeg';
import hr from '@/public/hr.jpeg';
import visual_art from '@/public/visual_art.jpeg'
import web_developer from '@/public/web_developer.png'

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
				<div className='flex flex-col flex-wrap justify-center gap-24 items-center lg:flex-row max-w-6xl mx-auto'>
					<VStack center spacing='space-y-5'>
						<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-12 left-0' width={ 500 } height={ 500 } src={ web_developer } />
						</motion.div>
					<VStack center>
							<Header animate color='text-slate-700'>{translate('firstName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('firstDescription')}</ItalicText>
					</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
						<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-6 left-0' width={ 500 } height={ 500 } src={ video_editor } />
						</motion.div>
					<VStack center>
					<Header animate color='text-slate-700'>{translate('secondName')}</Header>
							<ItalicText animate color='text-slate-400'>{translate('secondDescription')}</ItalicText>
					</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
					<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-8 left-0' width={ 500 } height={ 500 } src={ hr } />
					</motion.div>
						<VStack center>
						<Header animate color='text-slate-700'>{translate('thirdName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('thirdDescription')}</ItalicText>
						</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
					<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-16 left-0' width={ 1500 } height={ 1500 } src={director} />
					</motion.div>
						<VStack center>
						<Header animate color='text-slate-700'>{translate('fourthName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('fourthDescription')}</ItalicText>
						</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
					<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-8 left-0' width={ 500 } height={ 500 } src={ visual_art } />
					</motion.div>
						<VStack center>
						<Header animate color='text-slate-700'>{translate('fifthName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('fifthDescription')}</ItalicText>
						</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
					<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-24 left-0' width={ 500 } height={ 500 } src={ photographer } />
					</motion.div>
						<VStack center>
						<Header animate color='text-slate-700'>{translate('sixthName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('sixthDescription')}</ItalicText>
						</VStack>
					</VStack>
					<VStack center spacing='space-y-5'>
					<motion.div initial={{opacity:0,translateY:"30px"}} whileInView={{opacity:1,translateY:"0px"}} viewport={{once:true, amount:1}}  className='h-64 w-64 overflow-hidden rounded-full relative'>
							<Image unoptimized className='absolute -top-24 left-0' width={ 500 } height={ 500 } src={ resercher } />
					</motion.div>
						<VStack center>
						<Header animate color='text-slate-700'>{translate('seventhName')}</Header>
						<ItalicText animate color='text-slate-400'>{translate('seventhDecription')}</ItalicText>
						</VStack>
					</VStack>
				</div>
			</VStack>
		</ContainerFuild>
	)
}

export default Team;