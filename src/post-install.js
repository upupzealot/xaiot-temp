const path = require('path');
const chalk = require('chalk'); // eslint-disable-line
const gitDownload = require('git-clone-or-pull'); // eslint-disable-line

const componentPath = path.resolve(__dirname, './components-shared');
gitDownload('http://192.168.0.252/r/common/front_end_modules.git',
  componentPath, err => {
    if (err) {
      console.error(chalk.red('[post install] '), err); // eslint-disable-line
    } else {
      console.log(chalk.green('[post install] '), '公共模块已更新'); // eslint-disable-line
    }
  });
