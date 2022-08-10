//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//gobal dependency - use in any project
//npm install or i -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file(stores imp info about project/package)
//manual approach (create package.json in the root, create prop etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)


const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);