const shell = require('shelljs');

shell.exec('pm2 stop academy');
shell.exec('git checkout master');
shell.exec('git pull');
shell.exec('yarn');
shell.exec('yarn build');
shell.exec('pm2 start academy');
