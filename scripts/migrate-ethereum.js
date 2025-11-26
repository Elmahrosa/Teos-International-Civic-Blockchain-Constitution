// scripts/migrate-ethereum.js
// Usage: node scripts/migrate-ethereum.js --ethContract=0x... --infuraKey=KEY
const { ethers } = require('ethers');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

async function getEthRatifiers(ethContractAddress, infuraKey) {
  const provider = new ethers.providers.InfuraProvider('mainnet', infuraKey);
  // Minimal ABI: getRatifiers()
  const abi = ["function getRatifiers() view returns (address[])"];
  const contract = new ethers.Contract(ethContractAddress, abi, provider);
  const ratifiers = await contract.getRatifiers();
  return ratifiers;
}

async function main() {
  const ethContract = argv.ethContract;
  const infuraKey = argv.infuraKey || process.env.INFURA_KEY;
  if (!ethContract || !infuraKey) {
    console.error('Provide --ethContract and --infuraKey');
    process.exit(1);
  }
  console.log('Fetching ratifiers from Ethereum contract...');
  const ratifiers = await getEthRatifiers(ethContract, infuraKey);
  console.log(`Found ${ratifiers.length} ratifiers (example: first 5):`, ratifiers.slice(0,5));

  // Example: write to file for offline processing or admin import
  fs.writeFileSync('./migrated-ratifiers.json', JSON.stringify(ratifiers, null, 2));
  console.log('Saved migrated-ratifiers to migrated-ratifiers.json');

  // If you want to push to Pi, you can call an admin endpoint or run deploy scripts
  // This requires Pi SDK and admin key; leaving the actual push as deliberate admin action.
}

main().catch(console.error);
