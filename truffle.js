const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: "9545",
      network_id: "*" // Match any network id
    },
    rinkeby: {
     provider: function() {
       return new HDWalletProvider("they pulp arctic fringe tide bar garment wisdom industry label across silent", 'https://rinkeby.infura.io/v3/f40f0ddfd8e14abbb0c1bcdc6e09e860');
     },
     network_id: 4,
     gas: 4500000,
     gasPrice: 10000000000,
   }
  },
  compilers: {
      solc: {
        version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
      }
   }
};
