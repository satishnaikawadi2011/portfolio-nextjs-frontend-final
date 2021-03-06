export const fadeInRightVariant = {
	closed:
		{
			opacity: 0,
			x: '-100%'
		},
	open:
		{
			opacity: 1,
			x: 0,
			transition:
				{
					when: 'beforeChildren',
					duration: 0.6,
					type: 'spring',
					stiffness: 100,
					ease:
						[
							0.79,
							-0.01,
							0,
							0.99
						]
				}
		}
};

export const fadeInLeftVariant = {
	closed:
		{
			opacity: 0,
			x: '100%'
		},
	open:
		{
			opacity: 1,
			x: 0,
			transition:
				{
					when: 'beforeChildren',
					duration: 0.6,
					type: 'spring',
					stiffness: 100,
					ease:
						[
							0.79,
							-0.01,
							0,
							0.99
						]
				}
		}
};

export const fadeInTopVariant = {
	closed:
		{
			opacity: 0,
			y: '-100%'
		},
	open:
		{
			opacity: 1,
			y: 0,
			transition:
				{
					when: 'beforeChildren',
					duration: 0.6,
					ease:
						[
							0.79,
							-0.01,
							0,
							0.99
						]
				}
		}
};

export const fadeInBottomVariant = {
	closed:
		{
			opacity: 0,
			y: '100%'
		},
	open:
		{
			opacity: 1,
			y: 0,
			transition:
				{
					when: 'beforeChildren',
					duration: 0.6,
					ease:
						[
							0.79,
							-0.01,
							0,
							0.99
						]
				}
		}
};

export const zoomInVariant = {
	closed:
		{
			scale: 0
		},
	open:
		{
			scale: 1,
			transition:
				{
					when: 'beforeChildren',
					duration: 0.6
				}
		}
};

export const flipLeftVariant = {
	closed:
		{
			opacity: 0,
			rotateY: 180
		},
	open:
		{
			opacity: 1,
			rotateY: 0,
			transition:
				{
					when: 'beforeChildren',
					duration: 2,
					ease:
						[
							0.79,
							-0.01,
							0,
							0.99
						]
				}
		}
};
