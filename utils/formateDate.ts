const formate = (dateString: string): string => {
	var date = new Date(dateString);
	var options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formatedDate = date.toLocaleDateString('en-US', options);
	return formatedDate;
};

export default formate;
