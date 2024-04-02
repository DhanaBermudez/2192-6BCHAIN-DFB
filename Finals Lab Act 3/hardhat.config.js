/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
solidity: "0.8.3",
defaultNetwork: "sepolia",
networks: {
hardhat: {},
sepolia: {
url: "https://eth-sepolia.g.alchemy.com/v2/QiSp_AdeeuQS8IPFYD-nYzucaYiUS8pI",
accounts: [`0x${'d2cbebf73bb5dc6de58479cd0daef1a90891b9afe1222016a820a14355f9d5fe'}`]
}
},
};
