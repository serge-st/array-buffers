// We create a buffer from a string
// The default encoding is utf-8 (it can be specified as the second parameter)
const buffer = Buffer.from('Testing');
// Buffer contains raw binary data, Node prints the hexadecimal or `base16` notation of the number.
console.log(buffer); // <Buffer 54 65 73 74 69 6e 67>
// To convert `base16` to an actual number we can do this:
console.log(parseInt('54', 16)); // 84
console.log(buffer.toString()); // Testing
console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 84, 101, 115, 116, 105, 110, 103 ] }

const { data: bufferJSON } = buffer.toJSON();

console.group('Buffer JSON:');
bufferJSON.forEach((charCode: number) => {
    console.log({ charCode, char: String.fromCharCode(charCode) });
});
console.groupEnd();

console.log('Write to buffer');
// Buffer also have a `write` method
buffer.write('Sing');
// But keep in mind that the buffer has a fixed size
console.log(buffer.toString()); // Singing
// If we try to write more than the buffer size, it will be truncated
buffer.write('Incredible');
console.log(buffer.toString()); // Incredi