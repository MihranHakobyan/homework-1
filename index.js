import create from "./create.js";
import organize from "./organize.js";
if (process.argv[2] === "create") {
    create();
} else if (process.argv[2] === "organize") {
    organize();
}