import fs from "fs";
import url from "node:url";
import path from "path";

const { stdin } = process;

const write = async () => {
  try {
    const _fileName = url.fileURLToPath(import.meta.url);
    const currentDirectory = path.dirname(_fileName);
    const file2Write = path.join(currentDirectory, "files", "fileToWrite.txt");

    const writeStream = fs.createWriteStream(file2Write);

    stdin.on('data', (data) => {
        writeStream.write(data);
      });
  } catch (error) {
    throw error;
  }
};

await write();
