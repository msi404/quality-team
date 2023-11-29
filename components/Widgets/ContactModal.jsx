import {useState} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import VStack from '@/components/ui/VStack'
import HStack from '@/components/ui/HStack'
import Title from '@/components/ui/Title'
import Description from '@/components/ui/Description'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { useTranslation} from 'next-i18next'

function ContactModal ()
{
	const {t:translate} = useTranslation('contactModal')
	const [ isOpen, setIsOpen ] = useState( false );
	const onContactClickedHandler = () =>
	{
		!isOpen ? setIsOpen(true) : setIsOpen(false)
	}
	return (
		<Dialog.Root open={isOpen}>
				<Dialog.Trigger asChild>
				<button onClick={onContactClickedHandler}>Contact Us</button>
				</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay onClick={onContactClickedHandler} className='bg-slate-900/80 fixed inset-0' />
				<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
				<Dialog.Content className='bg-slate-200 focus:outline-none rounded-md shadow-lg p-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xl max-h-lg'>
					<VStack center spacing='space-y-10'>
					<Dialog.Title>
								<Title color='text-slate-700'>{translate('header')}</Title>
						</Dialog.Title>
						<Dialog.Description>
							<Description color='text-slate-500'>
								{translate('description')}
							</Description>
						</Dialog.Description>
					<VStack spacing='space-y-16'>
				<VStack spacing='space-y-8'>
					<fieldset>
					<HStack spacing='space-x-5'>
						<label>{translate('name')}:</label>
						<input className='pl-2 w-72 h-8 border rounded-md shadow-lg' type='text' />
						</HStack>
					</fieldset>
					<fieldset>
					<HStack spacing='space-x-5'>
						<label>{translate('phone')}:</label>
						<input className='pl-2 w-72 h-8 border rounded-md shadow-lg' type='tel' />
						</HStack>
					</fieldset>
					</VStack>
					<div>
					<HStack spaceBetween>
						<Dialog.Close asChild>
							<Button variant='bg-red-400' active='active:bg-red-400' hover='hover:bg-red-500' width='w-24' onClick={ onContactClickedHandler }>{translate('close')}</Button>
						</Dialog.Close>
						<Link href='mailto:ismail.merced3@gmail.com? cc=skywalker@starwars.com& bcc=leia@starwars.com& subject=May%20the%20Force%20be%20with%20you&body=May%20the%20Force%20be%20with%20us%20all%3A%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Customer'>
							<Button width='w-24' variant='bg-green-400' active='active:bg-green-400' hover='hover:bg-green-600'>{translate('submit')}</Button>	
						</Link>
					</HStack>
				</div>
				</VStack>
					</VStack>
				</Dialog.Content>
				</motion.div>
		</Dialog.Portal>
		</Dialog.Root>
	)
}

export default ContactModal;