function Container ( { children, background} )
{
	return (
		<section className={`px-5 md:px-24 md:py-24 pt-10 pb-[14.4rem] bg-center bg-cover bg-no-repeat ${background}`}>
			{children}
		</section>
	)
}

export default Container;