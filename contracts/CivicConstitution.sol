// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CivicConstitution {
    address public admin;
    uint256 public totalVotes;

    struct Proposal {
        uint256 id;
        string title;
        uint256 yesVotes;
        uint256 noVotes;
        bool isActive;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(address => bool) public hasVoted;

    event VoteCast(address voter, uint256 proposalId, bool support);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    function createProposal(string memory _title) external onlyAdmin {
        proposals[totalVotes] = Proposal({
            id: totalVotes,
            title: _title,
            yesVotes: 0,
            noVotes: 0,
            isActive: true
        });
        totalVotes++;
    }

    function vote(uint256 _proposalId, bool _support) external {
        require(!hasVoted[msg.sender], "Already voted");
        require(proposals[_proposalId].isActive, "Proposal not active");

        if (_support) {
            proposals[_proposalId].yesVotes++;
        } else {
            proposals[_proposalId].noVotes++;
        }

        hasVoted[msg.sender] = true;
        emit VoteCast(msg.sender, _proposalId, _support);
    }
}
