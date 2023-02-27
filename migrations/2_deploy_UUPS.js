const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const Contract = artifacts.require('fBOMBCanto');

module.exports = async function (deployer) {
  let me = "0x4CE69fd760AD0c07490178f9a47863Dc0358cCCD"; // maxflowo2.eth
  let inputs = ['Fantom Bomb', 'fBOMB', me, me, me];
  const instance = await deployProxy(Contract, inputs, { deployer });
};
