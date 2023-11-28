import * as Accordion from '@radix-ui/react-accordion';
import ContainerFuild from '@/components/ui/ContainerFluid'
import HStack from '@/components/ui/HStack'
import VStack from '@/components/ui/VStack'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import Desription from '@/components/ui/Description'
import ContactModal from '@/components/Widgets/ContactModal'
import { FaChevronDown } from "react-icons/fa";
import { forwardRef } from 'react'
import classNames from 'classnames';
import { useTranslation} from 'next-i18next'

function FAQ ()
{
	const {t:translate} = useTranslation('faq')
	return (
		<ContainerFuild>
			<HStack  responsive spacing='space-y-6'>
				<VStack  responsive spacing='space-y-4 lg:pe-80'>
					<Title width='max-w-xl' color='text-slate-800'>{translate('title')}</Title>
					<Desription color='text-slate-400'>{translate('description')}</Desription>
					<ContactModal />
				</VStack>
				<VStack>
  <Accordion.Root
    className="bg-mauve6 max-w-4xl min-w-5xl w-96 lg:w-[600px] rounded-md"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
	<AccordionTrigger>{translate('firstQuiz')}</AccordionTrigger>
	<AccordionContent>{translate('firstAnswr')}</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
	<AccordionTrigger>{translate('secondQuiz')}</AccordionTrigger>
      <AccordionContent>
        {translate('secondAnswr')}
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
	<AccordionTrigger>{translate('thirdQuiz')}</AccordionTrigger>
      <AccordionContent>
       {translate('thirdAnswr')}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
	<AccordionTrigger>{translate('fourthQuiz')}</AccordionTrigger>
      <AccordionContent>
		{translate('fourthAnswr')}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
	<AccordionTrigger>{translate('fifthQuiz')}</AccordionTrigger>
      <AccordionContent>
		{translate('fifthAnswr')}
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
		<AccordionTrigger>{translate('sixthQuiz')}</AccordionTrigger>
		<AccordionContent>
		{translate('sixthAnswr')}
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
	</VStack>
	</HStack>
</ContainerFuild>
	)
}
const AccordionItem = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      ' mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
) );

const AccordionTrigger = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-violet11 py-9 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-white px-5 leading-none outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
		<Text color='text-purple-700 font-bold'>{ children }</Text>
		<FaChevronDown
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

export default FAQ;