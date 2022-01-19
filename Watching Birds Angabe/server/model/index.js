const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'birds.json');
const data = fs.readFileSync(file);
const birds = JSON.parse(data);

const getBirds = () => birds;

const postBird = (id, name) => {
  const bird = birds.find((el) => el.id === Number(id));
  bird.observer.push(name);
  return bird.id;
};

module.exports = { getBirds, postBird };
