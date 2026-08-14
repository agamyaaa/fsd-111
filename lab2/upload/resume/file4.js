import {mkdir} from "fs/promises"

// Create recursive directory
//await mkdir("upload/resume",{recursive: true});

//create single directory
//await mkdir("upload/images");

//remove directory
await rm("upload",{recursive:true});
