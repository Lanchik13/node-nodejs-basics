import fs from "fs";
import url from "node:url";
import path from "path";

const rename = async () => {
  const _fileName = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(_fileName);
  const file2Rename = path.join(dirname, "files", "wrongFilename.txt");
  const properFilename = path.join(dirname, "files", "properFilename.md");

  try {
    await fs.promises
      .access(file2Rename)
      .then(() => {})
      .catch(() => {
        throw new Error("There is no wrongFilename.txt");
      });

    await fs.promises
      .access(properFilename)
      .then(() => {
        throw new Error("File with proper name already exists");
      })
      .catch(() => {});

    await fs.promises.rename(file2Rename, properFilename);
  } catch (error) {
    throw error;
  }
};

await rename();
