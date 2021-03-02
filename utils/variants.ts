export const cardContainerVariant = {
	visible:
		{
			opacity: 1,
			x: 0,
			transition:
				{
					delay: 0.2,
					duration: 0.4,
					type: 'spring',
					stiffness: 100,
					staggerChildren: 0.4,
					when: 'beforeChildren'
				}
		},
	hidden:
		{
			opacity: 0,
			x: '-100vw'
		}
};

export const cardVariant = {
	visible:
		{
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { duration: 0.2, delay: 0.8 }
		},
	hidden:
		{
			opacity: 0,
			scale: 0
		}
};
