import fs from "fs";
import url from "node:url";
import path from "path";

const { stdout } = process;

const read = async () => {
  try {

    const _fileName = url.fileURLToPath(import.meta.url);
    const currentDirectory = path.dirname(_fileName);
    const file2Read = path.join(currentDirectory, "files", "fileToRead.txt");

    const readFileStream = fs.createReadStream(file2Read, "utf-8");

    readFileStream.on("data", (buffer) => {
      stdout.write(buffer);
    });
  } catch (error) {
    throw error;
  }
};

await read();
