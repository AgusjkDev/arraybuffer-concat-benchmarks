const buffers = require("../get-buffers");

const result = new DataView(
    new ArrayBuffer(buffers.reduce((acc, curr) => (acc += curr.byteLength), 0))
);

let offset = 0;
for (const buffer of buffers) {
    const view = new DataView(buffer);
    for (let i = 0; i < view.byteLength; i++) {
        result.setUint8(offset + i, view.getUint8(i));
    }
    offset += buffer.byteLength;
}
