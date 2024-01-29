import { Transform } from "stream";
const { stdin, stdout } = process;

const reverseTextTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
    callback();
  },
});

const transform = async () => {
  try {
    console.log("Input your text: ");
    stdin.pipe(reverseTextTransform).pipe(stdout);
  } catch (error) {
    console.error(error);
  }
};

await transform();
