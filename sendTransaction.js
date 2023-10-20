const Web3 = require('web3');

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545'); // Adjust the port if you changed it in Ganache

async function sendEther() {
    try {
        // Get list of all accounts
        const accounts = await web3.eth.getAccounts();

        // Send Ether from the first account to the second account
        const receipt = await web3.eth.sendTransaction({
            from: accounts[0],
            to: accounts[1],
            value: web3.utils.toWei('0.1', 'ether') // Sending 0.1 Ether
        });

        console.log("Transaction successful with hash:", receipt.transactionHash);
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
}

sendEther();
