import classes from '@/components/ui/ImagesCollection/ImagesCollection.module.css'
function ImagesCollection ( { children } )
{
	return (
		<div className={classes.scroller}>
			{children}
		</div>
	)
}

export default ImagesCollection;