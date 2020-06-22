const BlockClass = require('../src/block.js');
const BlockChain = require('../src/blockchain.js');

let testChain = new BlockChain.Blockchain();

for (i=0; i < 3; i++) {
    testChain._addBlock(new BlockClass.Block('test'));
}
new BlockClass.Block('');

testChain.validateChain()
    .then(result => {
        console.log(`Validation errors: ${result}`)        
    })