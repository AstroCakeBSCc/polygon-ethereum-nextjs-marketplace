require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privatekey = fs.readFileSync(".secret").toString().trim();
const projectId = "4b39579741504e9eb9a109a2ab524daa"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    mumbai: {
      url: `https://mumbai.infura.io/v3/${projectId}`, 
      accounts: [privatekey]
    }, 
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`, 
      accounts: [privatekey]
    }
  },
  solidity: "0.8.4",
}
