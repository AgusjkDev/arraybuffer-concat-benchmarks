const buffers = require("../get-buffers");

const result = new Blob(buffers);

result.arrayBuffer().then(() => {});
