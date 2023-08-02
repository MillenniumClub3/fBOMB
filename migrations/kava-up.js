// migrations/MM_upgrade_box_contract.js
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Contract = artifacts.require('fBOMBKava');
const ContractV2 = artifacts.require('fBOMBKavaV2');

module.exports = async function (deployer) {
  const existing = await Contract.at("0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979");
  const instance = await upgradeProxy(existing, ContractV2, { deployer });
};

