// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title AssetRegistry — minimal reference for anchoring civic assets
/// @notice This is a minimal, auditable reference contract. For production use, add
/// role-based access control, pausability, upgradeability, and comprehensive tests.

contract AssetRegistry {
    struct Asset {
        address controller;
        string metadataCID; // IPFS CID or URL pointing to canonical metadata
        uint256 timestamp;
        bool exists;
    }

    // keccak256(canonicalId) -> Asset
    mapping(bytes32 => Asset) private assets;

    event AssetRegistered(bytes32 indexed key, address indexed controller, string metadataCID, uint256 timestamp);
    event AssetUpdated(bytes32 indexed key, address indexed controller, string metadataCID, uint256 timestamp);
    event ControllerTransferred(bytes32 indexed key, address indexed oldController, address indexed newController);

    /// @notice Register a new asset anchor. Fails if already exists.
    function registerAsset(bytes32 key, string calldata metadataCID) external {
        require(!assets[key].exists, "AssetRegistry: already exists");
        assets[key] = Asset({ controller: msg.sender, metadataCID: metadataCID, timestamp: block.timestamp, exists: true });
        emit AssetRegistered(key, msg.sender, metadataCID, block.timestamp);
    }

    /// @notice Update metadata CID for an asset. Only controller can update.
    function updateAsset(bytes32 key, string calldata metadataCID) external {
        require(assets[key].exists, "AssetRegistry: not found");
        require(assets[key].controller == msg.sender, "AssetRegistry: not controller");
        assets[key].metadataCID = metadataCID;
        assets[key].timestamp = block.timestamp;
        emit AssetUpdated(key, msg.sender, metadataCID, block.timestamp);
    }

    /// @notice Transfer control of asset to newController. Only controller can call.
    function transferController(bytes32 key, address newController) external {
        require(assets[key].exists, "AssetRegistry: not found");
        address old = assets[key].controller;
        require(old == msg.sender, "AssetRegistry: not controller");
        assets[key].controller = newController;
        assets[key].timestamp = block.timestamp;
        emit ControllerTransferred(key, old, newController);
    }

    /// @notice Get basic asset info
    function getAsset(bytes32 key) external view returns (address controller, string memory metadataCID, uint256 timestamp, bool exists) {
        Asset storage a = assets[key];
        return (a.controller, a.metadataCID, a.timestamp, a.exists);
    }
}
