let n = 5;
let strings = '';
for (i = 0; i < n; i++) {
	for (j = 0; j < i; j++) {
		strings += '* ';
	}
	strings += '\n';
}

console.log(strings);
