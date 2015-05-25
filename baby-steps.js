var total = 0;
process.argv.slice(2).forEach(function(number) {
	total += Number(number);
});
console.log(total);