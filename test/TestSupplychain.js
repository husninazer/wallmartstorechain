// This script is designed to test the solidity smart contract - SuppyChain.sol -- and the various functions within
// Declare a variable and assign the compiled smart contract artifact
var SupplyChain = artifacts.require('SupplyChain')

contract('SupplyChain', function(accounts) {
    // Declare few constants and assign a few sample accounts generated by ganache-cli
    var sku = 1;
    var upc = 1;
    const ownerID = accounts[0]
    const originFarmerID = accounts[1]
    const originFarmName = "John Doe"
    const originFarmInformation = "Yarray Valley"
    const originFarmLatitude = "-38.239770"
    const originFarmLongitude = "144.341490"
    var productID = sku + upc
    const productNotes = "Best beans for Espresso"
    const productPrice = web3.utils.toWei("1", "ether")
    var itemState = 0
    const distributorID = accounts[2]
    const retailerID = accounts[3]
    const consumerID = accounts[4]
    const emptyAddress = '0x00000000000000000000000000000000000000'

    ///Available Accounts
    ///==================
    ///(0) 0x27d8d15cbc94527cadf5ec14b69519ae23288b95
    ///(1) 0x018c2dabef4904ecbd7118350a0c54dbeae3549a
    ///(2) 0xce5144391b4ab80668965f2cc4f2cc102380ef0a
    ///(3) 0x460c31107dd048e34971e57da2f99f659add4f02
    ///(4) 0xd37b7b8c62be2fdde8daa9816483aebdbd356088
    ///(5) 0x27f184bdc0e7a931b507ddd689d76dba10514bcb
    ///(6) 0xfe0df793060c49edca5ac9c104dd8e3375349978
    ///(7) 0xbd58a85c96cc6727859d853086fe8560bc137632
    ///(8) 0xe07b5ee5f738b2f87f88b99aac9c64ff1e0c7917
    ///(9) 0xbd3ff2e3aded055244d66544c9c059fa0851da44

    console.log("ganache-cli accounts used here...")
    console.log("Contract Owner: accounts[0] ", accounts[0])
    console.log("Farmer: accounts[1] ", accounts[1])
    console.log("Distributor: accounts[2] ", accounts[2])
    console.log("Retailer: accounts[3] ", accounts[3])
    console.log("Consumer: accounts[4] ", accounts[4])

    // 1st Test
    it("Testing smart contract function harvestItem() that allows a farmer to harvest Item", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Harvested()
        await supplyChain.Harvested(upc, (err, res) => {
            eventEmitted = true
        });

        // Mark an item as Harvested by calling function harvestItem()
        await supplyChain.harvestItem(upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes)

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)

        // Verify the result set
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], ownerID, 'Error: Missing or Invalid ownerID')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferOne[4], originFarmName, 'Error: Missing or Invalid originFarmName')
        assert.equal(resultBufferOne[5], originFarmInformation, 'Error: Missing or Invalid originFarmInformation')
        assert.equal(resultBufferTwo[5], 0, 'Error: Invalid item State')
        assert.equal(eventEmitted, true, 'Invalid event emitted')
    })

    // 2nd Test
    it("Testing smart contract function tagItem() that allows a farmer to tag Item", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Tagged(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.tagItem(upc);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 1,  'Error: Invalid State')

    })

    // 3rd Test
    it("Testing smart contract function packItem() that allows a farmer to pack Item", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Packed(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.packItem(upc);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 2,  'Error: Invalid State')

    })

    // 4th Test
    it("Testing smart contract function processItem() that allows a Processor to process Item", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Processed(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.processItem(upc);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 3,  'Error: Invalid State')

    })

    // 5th Test
    it("Testing smart contract function shipItem() that allows a processor to ship coffee", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Shipped(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.shipItem(upc);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 4,  'Error: Invalid State')

    })

    // 6th Test
    it("Testing smart contract function buyItem() that allows a distributor to buy Item", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Bought(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.buyItem(upc, productPrice);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 5,  'Error: Invalid State')

    })

    // 7th Test
    it("Testing smart contract function receiveItem() that allows a retailer to mark item as received", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Received(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.receiveItem(upc);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 6,  'Error: Invalid State')

    })

    // 8th Test
    it("Testing smart contract function sellItem() that allows the store to sell item to a consumer", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Declare and Initialize a variable for event
        var eventEmitted = false

        // Watch the emitted event Processed()
        await supplyChain.Sold(upc, (err, res) => {
            eventEmitted = true
        });


        // Mark an item as Tagged by calling function tagItem()
        await supplyChain.sellItem(upc);

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc)

        // Verify the result set
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU')
        assert.equal(resultBufferTwo[5], 7,  'Error: Invalid State')

    })

    // 9th Test
    it("Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Retrieve the just now saved item from blockchain by calling function fetchItem()


        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne(upc);

        assert.equal(resultBufferOne[0], sku, "Error: SKU invalid ITEM")


    })

    // 10th Test
    it("Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Retrieve the just now saved item from blockchain by calling function fetchItem()


        // Verify the result set:
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc);

        assert.equal(resultBufferTwo[0], sku, "Error: SKU invalid ITEM")

    })

});