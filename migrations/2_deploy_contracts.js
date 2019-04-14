// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var ProcessorRole = artifacts.require("./ProcessorRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var WallmartStoreRole = artifacts.require("./WallmartStoreRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(FarmerRole);
  deployer.deploy(ProcessorRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(WallmartStoreRole);
  deployer.deploy(ConsumerRole);
  deployer.deploy(SupplyChain);
};
