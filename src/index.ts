const myFunc = (arr: (string | number)[]): (string | number)[] => {
	arr.splice(2, 1);
	return arr;
};

console.log(myFunc([1, 5, 4, 7]));

export default myFunc;
