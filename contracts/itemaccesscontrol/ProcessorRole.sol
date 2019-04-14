pragma solidity ^0.4.24;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'processorRole' to manage this role - add, remove, check
contract ProcessorRole {
  using Roles for Roles.Role;
  // Define 2 events, one for Adding, and other for Removing

  event ProcessorAdded(address indexed account);
  event ProcessorRemoved(address indexed account);
  // Define a struct 'processors' by inheriting from 'Roles' library, struct Role

  Roles.Role processors;
  // In the constructor make the address that deploys this contract the 1st processor
  constructor() public {
    _addProcessor(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyProcessor() {
    require(isProcessor(msg.sender));
    _;
  }

  // Define a function 'isprocessor' to check this role
  function isProcessor(address account) public view returns (bool) {
    return processors.has(account);
  }

  // Define a function 'addprocessor' that adds this role
  function addProcessor(address account) public onlyProcessor {
    _addProcessor(account);
  }

  // Define a function 'renounceprocessor' to renounce this role
  function renounceProcessor() public {
    _removeProcessor(msg.sender);
  }

  // Define an internal function '_addprocessor' to add this role, called by 'addprocessor'
  function _addProcessor(address account) internal {
    processors.add(account);
    emit ProcessorAdded(account);
  }

  // Define an internal function '_removeprocessor' to remove this role, called by 'removeprocessor'
  function _removeProcessor(address account) internal {
    processors.remove(account);
    emit ProcessorRemoved(account);
  }
}
