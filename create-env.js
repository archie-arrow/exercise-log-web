const fs = require('fs');
const dir = "src/environments";
const prodFile = "environment.prod.ts";

const content = `${process.env.ENV_SETTINGS}`;


fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(dir, {recursive: true}, (err) => {
      if (err) throw err
    });
  }

  try {
    fs.writeFileSync(dir + '/' + prodFile, content);

    if (fs.existsSync(dir + '/' + prodFile)) {
      const str = fs.readFileSync(dir + "/" + prodFile).toString();
      console.log(str)
    }
  } catch (e) {
    process.exit(1);
  }
})
