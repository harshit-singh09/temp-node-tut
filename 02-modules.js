const names = require('./names')
const sayHi = require('./02utils')
//console.log(names)
require('./mind_grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

//commonJS, every file is module (by default)
//modules- encapsulated code (only share min)