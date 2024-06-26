const alchemyKey =  "wss://eth-sepolia.g.alchemy.com/v2/QiSp_AdeeuQS8IPFYD-nYzucaYiUS8pI"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractAddress = "0xCc474760A2b5BF8e61e130D38C1Dedb217565d0D";
const contractABI = require("../contract-abi.json");

export const helloWorldContract = new web3.eth.Contract(contractABI, contractAddress);

export const loadCurrentMessage = async () => { 
  const message = await helloWorldContract.methods.message().call();
  return message;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    const obj = {
      status: "Write a message in the text-field above.",
      address: addressArray[0],
    };
    return obj;
  } catch (err) {
    return {
      address: "",
      status: ":( " + err.message,
    };
  }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {""}
            {""}
            <a target="_blank"  href = {'https://metamask.io/download'}>You must insall Metamask, a virtual Ethereumwallet, in your browser.</a>
          </p>
          </span>
      ),
    };
  }
};


export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Write a message in the text-field above.",
        };
    } else {
      return {
        address: "",
        status: "Connect to Metamask using the top right button.",
      };
    }
  } catch (err) {
    return {
      address:"",
      status: ":(" + err.message,
    };
  }
} else {
  return {
    address: "",
    status: (
      <span>
        <p>
          {""}
          {""}
          <a target="_blank" href = {"https://metamask.io/download"}>You must install Metamask, a virtual Ethereum wallt, in your browser.</a>
    </p>
    </span>
    ),
  };
}
};

export const updateMessage = async (address, message) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status: 
      "Connect your Metamask wallet to update the message on the blockchain.",
    };
  }
  if (message.trim() === "") {
    return {
      status: "Your message cannot be an empty string.",
    };
  }
const transactionParameters = {
  to: contractAddress, //Required except during contract publications.
  from: address, //must match user's active address.
  data: helloWorldContract.methods.update(message).encodeABI(),
};
//sign the transacation
try {
  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
  return {
    status: (
      <span>
        {" "}
        <a target="_blank" href ={'https://sepolia.etherscan.io/tx/${txHash}'}>View the status of your transaction on Etherscan!</a>
        <br/>
        Once the transaction is verified by the network, the message will be updated automatically.
      </span>
    ),
  };
} catch (error) {
  return {
    status: ":(" + error.message,
  };
}
};
