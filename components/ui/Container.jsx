function Container ( { children, background,backgroundImage} )
{
	return (
		<section className={`px-5 md:px-24  md:py-24 pt-10 pb-[14.4rem] bg-center bg-cover bg-no-repeat ${background}`} style={{backgroundImage: `url(${backgroundImage})`}}>
			{children}
		</section>
	)
}

export default Container;