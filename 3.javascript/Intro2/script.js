const songs = ['Shape of You', 'Blinding Lights', 'Levitating'];

songs.push('sweater weather');
songs.push('505');
songs.push('smooth criminal');

console.log(songs);

const last = songs.pop();
console.log(last, songs);

songs.unshift('popular');
songs.unshift('this america');
console.log(songs);

const first = songs.shift();
songs.shift();
console.log(songs, first);

/* for (const s of songs) {
	console.log(s);
}

for (const i in songs) {
	console.log(i);
}
 */
const tranche = songs.slice(2, 4); // [2,6[
console.log(tranche);
songs.splice(2, 1, 'GTA 5');
console.log(songs);

const students = [
	['Youcef', 27],
	['Maria', 22, [18, 17, 19]],
	['Khalid', 19],
	['Malik', 45],
];
console.log(students.flat(2));
