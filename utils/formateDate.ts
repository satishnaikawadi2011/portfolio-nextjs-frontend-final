const formate = (dateString: string): string => {
	var date: Date = new Date(dateString);
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const formatedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
	return formatedDate;
};

export default formate;
