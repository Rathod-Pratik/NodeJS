const file =require("fs");

//Write content to file
file.appendFileSync('./File.text',"\nhey hello how are you\n");

//Read content from file
const read=file.readFileSync('./File.text').toString();
console.log(read);

//copy content to another file
file.cpSync('File.text',"copy.text");