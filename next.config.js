const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	images : {
		domains : [
			'res.cloudinary.com'
		]
	},
	env    : {
		NEXT_PUBLIC_FRONTEND_DOMAIN :
			isProd ? 'http://localhost:3000' :
			process.env.NEXT_PUBLIC_FRONTEND_DOMAIN
	}
};
