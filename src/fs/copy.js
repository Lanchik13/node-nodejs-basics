import fs from "fs";
import url from "node:url";
import path from "path";

const copy = async () => {
  const _fileName = url.fileURLToPath(import.meta.url);
  const currentDirectory = path.dirname(_fileName);

  const sourceDirectory = path.join(currentDirectory, "files");
  const targetDirectory = path.join(currentDirectory, "files_copy");

  try {
    await fs.promises.mkdir(targetDirectory, { recursive: false });
    const filesInSrcDir = await fs.promises.readdir(sourceDirectory);
    filesInSrcDir.forEach((fileName) =>
      fs.promises.copyFile(
        path.join(sourceDirectory, fileName),
        path.join(targetDirectory, fileName)
      )
    );
  } catch (error) {
    throw error;
  }
};

await copy();
