const buffers = require("../get-buffers");

const result = new Uint8Array(
    buffers.reduce((sum, buffer) => sum + buffer.byteLength, 0)
);

let offset = 0;
buffers.forEach(buffer => {
    result.set(new Uint8Array(buffer), offset);
    offset += buffer.byteLength;
});
