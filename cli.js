#!/usr/bin/env node

const fs = require("fs");
const args = process.argv.slice(2);
const { exec } = require("child_process");
const CURRENT_PATH = process.cwd();

exports.createComponent = ({ mode }) => {

  fs.mkdir(`${CURRENT_PATH}/${args[0]}`, { recursive: true }, (err) => {
    if (err) throw err;
    fs.openSync(`${CURRENT_PATH}/${args[0]}/styles.jsx`, 'w');
  });

  exec("npm root -g", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    let PATH = `${stdout}/react-cli/code_templates/component.jsx`.split("\n").join("");

    fs.readFile(PATH, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      const componentResult = data.replace(/COMPONENT_NAME/g, args);
      fs.writeFile(`${CURRENT_PATH}/${args[0]}/index.jsx`, componentResult, 'utf8', function (err) {
        if (err) return console.log(err);
      });
      if (mode === 'big') {
        const viewResult = data.replace(/COMPONENT_NAME/g, 'View');
        fs.writeFile(`${CURRENT_PATH}/${args[0]}/view.jsx`, viewResult, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      }
    });
  });
}






