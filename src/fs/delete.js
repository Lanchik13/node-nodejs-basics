import fs from "fs";
import url from "node:url";
import path from "path";

const remove = async () => {
  const _fileName = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(_fileName);
  const file2Remove = path.join(dirname, "files", "fileToRemove.txt");

  try {
    await fs.promises
      .access(file2Remove)
      .then(() => {})
      .catch(() => {
        throw new Error("File does not exist!");
      });

    await fs.promises.unlink(file2Remove);
  } catch (error) {
    throw error;
  }
};

await remove();
