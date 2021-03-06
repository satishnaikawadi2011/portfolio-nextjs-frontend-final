// export const fadeInRightVariant = {
//   closed: {
//         opacity: 0;
//       x:
//   },
//   open: {
//     scale: 1,
//     transition: {
//       when: 'beforeChildren',
//       duration: 0.6,
//       ease: [0.79, -0.01, 0, 0.99]
//     }
//   }
// };

export const skillsListVariants = {
	closed:
		{
			opacity: 0
		},
	open:
		{
			opacity: 1,
			transition:
				{
					when: 'beforeChildren',
					staggerChildren: 0.2
				}
		}
};
