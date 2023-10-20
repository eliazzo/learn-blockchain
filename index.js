const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Connect to local Ganache instance


// async function getLatestBlock() {
//     const latestBlock = await web3.eth.getBlock('latest');
//     console.log(latestBlock);
// }
// getLatestBlock();

async function getTransaction(txHash) {
    const transaction = await web3.eth.getTransaction(txHash);
    console.log(transaction);
}
getTransaction('0x1afa85a6420781d1cce6795609dfc9a1caf37601f04665db9b7e85178eb86b88');

