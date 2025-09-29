import create from "./create.js";
import   organize from "./organize.js";

const command = process.argv[2];

(async () => {
    if (command === "create") {
        await create();
    } else if (command === "organize") {
        await organize();
    } else {
        console.log("Unknown command. Use 'create' or 'organize'.");
    }
})();