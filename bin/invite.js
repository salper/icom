import {readFile} from 'fs';
import {getDistanceFrom, pointInRadians} from '../src/coord';

// Simple println (instead of console.log).
const log = message =>
  process.stdout.write(`${message}\n`);

// Pring and exit with status 1.
const logAndExit = message => {
  log(message);
  process.exit(1);
};

// Office distance computer.
const getDistanceFromOffice = getDistanceFrom
  .bind(null, pointInRadians({latitude: 53.3381985, longitude: -6.2592576}));

// Testing provided filename.
const [, , filename] = process.argv;
if (!filename)
  logAndExit('Usage: babel-node bin/invite filename');

// Reading file and processing it.
readFile(filename, (err, input) => {
  if (err)
    logAndExit(err);

  input
    .toString()
    .trim()
    .split('\n')
    .forEach(line => {
      const user = JSON.parse(line);
      if (getDistanceFromOffice(pointInRadians(user)) <= 100)
        log(`id: ${user.user_id}, name: ${user.name}`);
    });
});
