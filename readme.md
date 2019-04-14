# Wallmart Store Product tracking with Ethereum Blockhain


## Introduction
This project is a item tracking application that has an ethereum contract and a front-end that can connect with the contract to transfer the ownership and stages of items/products in the Wallmart supply chain process.

## Libraries Used

#### Truffle (v4.7)
The javascript framework used for solidity

#### truffle-hdwallet-provider
This library was used  to push the contract onto the Rinkeby Network.




## Rinkeby Migrations


> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ae28f


#### 1 initial_migration.js

   Deploying 'Migrations'
   > transaction hash:    0x3a2ba454cdf7b0e8401a4016d74a062994079328cd06fd8b89b3e33e4ca59be3
   > Blocks: 0            Seconds: 4
   > contract address:    0xC66B155b9cd6F57cd5D902488e7d6B244D5D5943
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.77864731
   > gas used:            277462
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00277462 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00277462 ETH


#### 2 deploy_contracts.js

   ##### Deploying 'FarmerRole'
   > transaction hash:    0x544a96027cce120bdb7b79b6ca11926b44185ec5551b1d6c5cf8af84df942b17
   > Blocks: 0            Seconds: 8
   > contract address:    0x9bE8D653Ea51F2C22c5bC21AEB6B76EDFBe3CCd3
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.77435066
   > gas used:            387657
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00387657 ETH


   ##### Deploying 'ProcessorRole'

   > transaction hash:    0xad79a6ffdb0ce6f51e961271c8ca3db975b63377c7c7212e45e5a64b04edc494
   > Blocks: 0            Seconds: 8
   > contract address:    0x66e9461677e959fdf9Bdec6093b118CAc756Bc77
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.77047613
   > gas used:            387453
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00387453 ETH


   #####  Deploying 'DistributorRole'

   > transaction hash:    0xcbb0379aeab3cb3eb6e9ec04c7349208649ea293b8d9240320dee1af2e3e75e8
   > Blocks: 0            Seconds: 8
   > contract address:    0x6BF2B5CDdD5D79028fa94EbbE29B1f965d2bD1f0
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.76659956
   > gas used:            387657
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00387657 ETH


   #####  Deploying 'WallmartStoreRole'

   > transaction hash:    0x0b6f9e34679f9e684e9fac1b6c913396eacedc2f9a06da83c6f231d51b8704b7
   > Blocks: 0            Seconds: 9
   > contract address:    0x895E4CA1CaA2703625A1c3308a5226d789268119
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.76272363
   > gas used:            387593
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00387593 ETH


   ##### Deploying 'ConsumerRole'

   > transaction hash:    0x19c29ee401506488cdbf6736a390321cf190828804fd297333a4c5c7e321d6cc
   > Blocks: 0            Seconds: 8
   > contract address:    0xddCeBA3B8c160f5719A7883478AF22bD478d28Dd
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.75884706
   > gas used:            387657
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00387657 ETH


   #####  Deploying 'SupplyChain'

   > transaction hash:    0xfc7ef8c5bf06356fe6456c904734cf2ada53af302fa7e6f61093d7b7227fe03a
   > Blocks: 0            Seconds: 8
   > contract address:    0x2dEee7613d52e5DeeB176A1313D9aFb148Ef661c
   > account:             0x54c6C99aD8297a0197C2DE905b59e315903A852F
   > balance:             17.73274358
   > gas used:            2610348
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02610348 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04548365 ETH


#### Summary
> Total deployments:   7
> Final cost:          0.04825827 ETH
