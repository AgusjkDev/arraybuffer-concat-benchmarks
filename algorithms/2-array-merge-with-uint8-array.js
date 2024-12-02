const buffers = require("../get-buffers");

const result = new Uint8Array(
    buffers
        .map(buffer => new Uint8Array(buffer))
        .reduce((acc, curr) => {
            acc.push(...curr);
            return acc;
        }, [])
);
