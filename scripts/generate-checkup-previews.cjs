const { createRequire } = require("node:module");
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const path = require("node:path");
const folder = path.join(__dirname, "../public/images/checkup");
async function preview(name, files) {
  const width = 1100, height = 780;
  const frames = await Promise.all(files.map(file =>
    sharp(path.join(folder, file)).resize(width, height, {fit:"contain", background:"#f7f5f1"}).removeAlpha().raw().toBuffer()
  ));
  await sharp(Buffer.concat(frames), {raw: {width, height: height * frames.length, channels:3, pageHeight:height}})
    .gif({delay:frames.map(() => 2200), loop:0, colours:128})
    .toFile(path.join(folder, name));
}
Promise.all([
  preview("booking-preview.gif", ["booking.png","booking2.png"]),
  preview("platform-preview.gif", ["responsivee.png","doctor-calendar.png"])
]).catch(error => {console.error(error); process.exitCode=1;});
