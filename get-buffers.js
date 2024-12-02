require("dotenv").config();

const BUFFER_SIZE = parseInt(process.env.BUFFER_SIZE) || 32;
const BUFFER_COUNT = parseInt(process.env.BUFFER_COUNT) || 100000;

const buffers = Array.from({ length: BUFFER_COUNT }).map(
    _ => new ArrayBuffer(BUFFER_SIZE)
);

module.exports = buffers;
