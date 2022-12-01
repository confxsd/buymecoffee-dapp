require("dotenv").config()
const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env
const contract = require("../artifacts/contracts/Coffee.sol/Coffee.json");
const hre = require("hardhat");

const alchemyProvider = new hre.ethers.providers.AlchemyProvider(network = "goerli", API_KEY);

const signer = new hre.ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const coffeeContract = new hre.ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


async function main() {
    const message = await coffeeContract.buyCoffee("one", "message");
    // console.log("The message is: " + message.toString());
    console.log("The message is: ", message);
}
main();