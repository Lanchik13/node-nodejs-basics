import fs from "fs";
import url from "node:url";
import path from "path";

const read = async () => {
  const _fileName = url.fileURLToPath(import.meta.url);
  const currentDirectory = path.dirname(_fileName);
  const file2Read = path.join(currentDirectory, "files", "fileToRead.txt");

  try {
    await fs.promises
    .access(file2Read)
    .catch(() => {
      throw new Error("There is no fileToRead.txt");
    });

    const content = await fs.promises.readFile(file2Read, "utf8");
    console.log(content);
  } catch (error) {
    throw error;
  }
};

await read();