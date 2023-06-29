const fileSystem = require("fs");

/*
// Blocking, Synchronous way
// Function to read a file.
const textInput = fileSystem.readFileSync(
  "./1-node-farm/starter/txt/input.txt",
  "utf-8"
);
console.log(textInput);

// Way to write a new file on system.
const textOutput = `This is what we know about the avocado: ${textInput}.\n Created on ${Date.now}`;

fileSystem.writeFileSync(
  "./1-node-farm/starter/txt/outputfile.txt",
  textOutput
);

console.log("File saved successfully");
*/

// Non-Blocking, Asynchronous way
fileSystem.readFile(
  "./1-node-farm/starter/txt/start.txt",
  "utf-8",
  (err, data1) => {
    fileSystem.readFile(
      `./1-node-farm/starter/txt/${data1}.txt`,
      "utf-8",
      (err, data2) => {
        console.log(data2);
        fileSystem.readFile(
          "./1-node-farm/starter/txt/append.txt",
          "utf-8",
          (err, data3) => {
            console.log(data3);
            fileSystem.writeFile(
              "./1-node-farm/starter/txt/final.txt",
              `${data2}\n${data3}`,
              "utf-8",
              (err) => {
                console.log("File saved successfully.");
                fileSystem.readFile(
                  "./1-node-farm/starter/txt/final.txt",
                  "utf-8",
                  (err, dat4) => {
                    console.log("final file after write new data.");
                    console.log(dat4);
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

console.log("Will read file please wait!");
