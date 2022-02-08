import { writeFile } from "fs";
let name = process.argv[2];
writeFile("data.json", name, (err) => console.error("err ->", err));
// Lobster aux crevette with a moranise sauce topped with truffle patte and spam
