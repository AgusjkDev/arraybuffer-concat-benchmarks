require("dotenv").config();
const { execSync } = require("child_process");
const fs = require("fs");

const HYPERFINE_PATH = process.env.HYPERFINE_PATH;
if (!HYPERFINE_PATH) {
    console.error(
        "Hyperfine path is not set. Please update the environment variables at file .env",
    );
    process.exit(1);
}
const SCRIPTS_DIR = "./algorithms";

const scripts = fs
    .readdirSync(SCRIPTS_DIR)
    .filter(file => file.endsWith(".js"))
    .map(file => `node ${SCRIPTS_DIR}/${file}`);

if (scripts.length === 0) {
    console.error("No scripts found in the algorithms directory.");
    process.exit(1);
}

const command = `${HYPERFINE_PATH} --warmup 3 ${scripts
    .map(script => `"${script}"`)
    .join(" ")}`;

console.log(command);

try {
    execSync(command, { stdio: "inherit" });
} catch (err) {
    console.error("Error running benchmarks:", err.message);
}
