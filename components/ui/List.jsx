function List ( { children,spacing} )
{
	return (
		<ul className={spacing}>
			{children}
		</ul>
	)
}

export default List;