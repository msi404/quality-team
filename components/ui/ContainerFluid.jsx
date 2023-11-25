function ContainerFluid ( { children, background, backgroundImage} )
{
	return (
		<section className={`px-5 md:px-24 py-16 bg-center bg-cover bg-no-repeat ${background}`} style={{backgroundImage: `url(${backgroundImage})`}}>
			{children}
		</section>
	)
}

export default ContainerFluid;