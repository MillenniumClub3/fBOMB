const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const Contract = artifacts.require('fToken');

module.exports = async function (deployer) {
  let me = "0x4CE69fd760AD0c07490178f9a47863Dc0358cCCD"; // maxflowo2.eth
  let ms = "0x7569664bE76065E9227DB53986e7F0A3d233f6D2"; // gnosis safe
  let inputs = ['Fantom Bomb', 'fBOMB', me, me, ms];
  const instance = await deployProxy(Contract, inputs, { deployer });
//  await instance.disable();
//  await instance.setToken("0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378");
//  await instance.setTokenWrapper("0xC09A82aD5075B3067D80F54f05e1E22229699Cc1");
//  await instance.setGasForDestinationLzReceive(250000);
//  await instance.setTres(ms);
};
