export const filterTeam = (array, value) => {
	console.log(value);
	return array.filter((item) =>
		item.title.toLowerCase().includes(value.toLowerCase())
	);
};
