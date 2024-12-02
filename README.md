# ArrayBuffer Concat Benchmarks

This repository benchmarks various ArrayBuffer concatenation algorithms in Node.js using [hyperfine](https://github.com/sharkdp/hyperfine).

## Getting Started

### 1. Install Hyperfine

Follow the [hyperfine installation guide](https://github.com/sharkdp/hyperfine#installation).

### 2. Clone and Set Up Repository

```bash
git clone https://github.com/agusjkdev/arraybuffer-concat-benchmarks
cd arraybuffer-concat-benchmarks
npm install dotenv
```

### 3. Setup Environment Variables

Copy the `.env.example` file and rename it to `.env`, then change the `HYPERFINE_PATH` variable to the path where [hyperfine](https://github.com/sharkdp/hyperfine#installation) is installed in your system.

If you want to change the algorithms buffer's size or count just change the `BUFFER_SIZE` and `BUFFER_COUNT` variables.

### 4. Run Benchmarks

```bash
node index.js
```

## Contributing

Add your algorithm into the algorithms/ directory and then submit a pull request with benchmarks and improvements.

Make sure you use the buffers from `get-buffers.js` or your pull request will be closed. Example:

```node
const buffers = require("../get-buffers");

// Your code goes here
const result = ... // `result` must contain the concatenated ArrayBuffer.
```

Lastly, format the code using `npm run format`.
