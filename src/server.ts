import fs from 'fs';

// Create a new array buffer with 2 bytes (no data yet)
const arrayBuffer = new ArrayBuffer(2); // 2 bytes or 2 x 8 bits
// Create a new data view with the array buffer (no data yet)
// The DataView view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer
const dataView = new DataView(arrayBuffer);
// Set the first byte (8 bits)
dataView.setUint8(0, 104);
// Set the second byte (8 bits)
dataView.setUint8(1, 105);

// Read the array buffer data
// Unit8Array is a subclass of TypedArray: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
// A TypedArray object describes an array-like view of an underlying binary data buffer
// * ArrayBuffer or Uint8Array are suited for binary data manipulation
const unit8Array = new Uint8Array(arrayBuffer);
console.log(unit8Array);
// Write the array buffer data to a file
fs.writeFileSync('file.txt', unit8Array);

// Create a new blob with the array buffer
const blob = new Blob([arrayBuffer]);
console.log(blob);
// Create a new URL with the blob
const url = URL.createObjectURL(blob);
console.log(url);
// Create a file
const file = new File([arrayBuffer], 'file.txt', { type: 'text/plain' });
console.log(file);
