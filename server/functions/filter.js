export const filterTeam = (array, value) => {
	return array.filter((item) => item.title.includes(value));
};
