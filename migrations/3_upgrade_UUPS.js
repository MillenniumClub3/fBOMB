// migrations/MM_upgrade_box_contract.js
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Contract = artifacts.require('fTokenOC');
const ContractV2 = artifacts.require('fBombV2Bridges');

module.exports = async function (deployer) {
  const existing = await Contract.deployed();
  const instance = await upgradeProxy(existing, ContractV2, { deployer });
};

