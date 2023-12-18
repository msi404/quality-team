import ContainerFluid from '@/components/ui/ContainerFluid'
import Text from '@/components/ui/Text';
import Fotonote from '@/components/ui/Fotonote'
import Description from '@/components/ui/Description'
import Card from '@/components/ui/Card'
import Header from '@/components/ui/Header'
import VStack from '@/components/ui/VStack'
import Brands from '@/components/Widgets/Brands'
import logo_2 from '@/public/logo_2.png';
import logo_3 from '@/public/logo_3.png';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation} from 'next-i18next'

function Testimonial ({background})
{
	const {t:translate} = useTranslation('testimonial')
	return (
		<ContainerFluid background={background}>
			<VStack spacing='space-y-10'>
			<div className='space-y-5 lg:space-y-10 text-center'>
					<Text animate color='text-green-400'>{translate("fotonote")}</Text>
					<Header delay={ 0.3 } animate size='lg:text-7xl' align='text-center' color='black'>{translate('title')}</Header>
				<Description delay={0.4} animate width='full' align='text-center' color='gray'>
					{translate('description')}
				</Description>
				</div>
				<motion.div initial={ { opacity: 0, translateY: '40px' } } whileInView={ { opacity: 1, translateY: '0px',transition:{'duration':0.3,'delay':0.3}} } viewport={ { once:true,amount:0.8}} className='grascale'>
					<Brands />
				</motion.div>
			<div className='flex flex-col items-center md:items-stretch md:flex-row gap-10'>
				<Card animate>
					<div className='space-y-12'>
				<div className='space-y-5'>
					<Header>
						{translate('firstTestimonialHeader')}
					</Header>
					<Description width='w-full'>
						{translate('firstTestimonialComment')}
					</Description>
					</div>
					<motion.div initial={{scale:0}} whileInView={{scale:1,transition: {'delay': 0.5}}} viewport={{once:true,amount:0.8}} className='flex items-center gap-5 text-slate-50'>
						<div>
							<Image unoptimized width={100} height={100} src={logo_2} />
						</div>
					<VStack>
					<Text>The English International School- Baghdad</Text>
					<Fotonote>International school</Fotonote>
					</VStack>
					</motion.div>
					</div>
				</Card>
				<Card animate>
					<div className='space-y-12'>
				<div className='space-y-5'>
					<Header>
						{translate('secondTestimonialHeader')}
					</Header>
					<Description width='w-full'>
						{translate('secondTestimonialComment')}
					</Description>
					</div>
					<motion.div initial={{scale:0}} whileInView={{scale:1,transition:{'delay':0.3}}} viewport={{once:true}} className='flex items-center gap-5 text-slate-50'>
						<div>
							<Image unoptimized width={100} height={100} src={logo_3} />
						</div>
							<VStack>
								<Text>Easy</Text>
								<Fotonote>Driving App</Fotonote>
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