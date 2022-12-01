/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   networks: {
      hardhat: {
         gasLimit: 20000000,
         gasPrice: 25000000000,
      },
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gasLimit: 20000000,
         gasPrice: 25000000000,
      }
   },
}