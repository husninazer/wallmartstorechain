pragma solidity ^0.4.24;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'WallmartStoreRole' to manage this role - add, remove, check
contract WallmartStoreRole {
  using Roles for Roles.Role;
  // Define 2 events, one for Adding, and other for Removing

  event WallmartStoreAdded(address indexed account);
  event WallmartStoreRemoved(address indexed account);
  // Define a struct 'retailers' by inheriting from 'Roles' library, struct Role

  Roles.Role wallmartStores;
  // In the constructor make the address that deploys this contract the 1st retailer
  constructor() public {
    _addWallmartStore(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyWallmartStore() {
    require(isWallmartStore(msg.sender));
    _;
  }

  // Define a function 'isRetailer' to check this role
  function isWallmartStore(address account) public view returns (bool) {
    return wallmartStores.has(account);
  }

  // Define a function 'addRetailer' that adds this role
  function addWallmartStore(address account) public onlyWallmartStore {
    _addWallmartStore(account);
  }

  // Define a function 'renounceRetailer' to renounce this role
  function renounceWallmartStore() public {
    _removeWallmartStore(msg.sender);
  }

  // Define an internal function '_addRetailer' to add this role, called by 'addRetailer'
  function _addWallmartStore(address account) internal {
    wallmartStores.add(account);
    emit WallmartStoreAdded(account);
  }

  // Define an internal function '_removeRetailer' to remove this role, called by 'removeRetailer'
  function _removeWallmartStore(address account) internal {
    wallmartStores.remove(account);
    emit WallmartStoreRemoved(account);
  }
}
