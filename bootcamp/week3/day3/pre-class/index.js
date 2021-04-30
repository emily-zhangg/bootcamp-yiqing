import { readFile } from "fs";

console.log("done importing from fs");

const whenFileIsRead = (error, content) => {
  console.log("running inside of whenFileIsRead");

  if (error) {
    console.log("read error", error);
    return;
  }

  console.log("content", content);
};

const filename = "mystuff.txt";

console.log("about to call readFile");

// 2nd param 'utf8' specifies the file encoding.
// Read more about UTF8 here: https://en.wikipedia.org/wiki/UTF-8
readFile(filename, "utf8", whenFileIsRead);

console.log("done calling readFile");
