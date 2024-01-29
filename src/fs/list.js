import fs from "fs";
import url from "node:url";
import path from "path";

const list = async () => {
  const _fileName = url.fileURLToPath(import.meta.url);
  const currentDirectory = path.dirname(_fileName);

  const sourceDirectory = path.join(currentDirectory, "files");

  try {
    await fs.promises.access(sourceDirectory).catch(() => {
      throw new Error("Directory does not exist!");
    });
    const filesInSrcDir = await fs.promises.readdir(sourceDirectory);
    filesInSrcDir.forEach((fileName) => {
      console.log(fileName);
    });
  } catch (error) {
    throw error;
  }
};

await list();
