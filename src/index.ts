// Create a new array buffer with 2 bytes (no data yet)
const arrayBuffer = new ArrayBuffer(2); // 2 bytes or 2 x 8 bits
// Create a new data view with the array buffer (no data yet)
// The DataView view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer
const dataView = new DataView(arrayBuffer);
// Set the first byte (8 bits)
dataView.setUint8(0, 104);
// Set the second byte (8 bits)
dataView.setUint8(1, 105);

function main() {
    const app = document.getElementById('app');
    if (app === null) throw new Error('No app');

    // Create a new blob with the array buffer
    const blob = new Blob([arrayBuffer]);
    console.log(blob);
    // Create a new URL with the blob
    const url = URL.createObjectURL(blob);
    console.log(url);

    const aBlob = document.createElement('a');
    aBlob.href = url;
    aBlob.download = 'blob-file.txt';
    aBlob.textContent = 'Download Blob';
    app.appendChild(aBlob);
    aBlob.addEventListener('click', () => {
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 0);
    });

    app.appendChild(document.createElement('br'));

    // Create a file
    const file = new File([arrayBuffer], 'file.txt', { type: 'text/plain' });
    console.log(file);

    const aFile = document.createElement('a');
    aFile.href = URL.createObjectURL(file);
    aFile.download = file.name;
    aFile.textContent = 'Download File';
    app.appendChild(aFile);
    aFile.addEventListener('click', () => {
        setTimeout(() => {
            URL.revokeObjectURL(aFile.href);
        }, 0);
    });
}

window.addEventListener('load', () => main());