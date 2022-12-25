const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const Contract = artifacts.require('fToken');

module.exports = async function (deployer) {
  let me = "0x4CE69fd760AD0c07490178f9a47863Dc0358cCCD"; // maxflowo2.eth
//  let ms = "0x7569664bE76065E9227DB53986e7F0A3d233f6D2"; // gnosis safe
  let inputs = ['Fantom Bomb', 'fBOMB', me, me, me];
  const instance = await deployProxy(Contract, inputs, { deployer });
  await instance.disable();
  await instance.setGasForDestinationLzReceive(250000);
  await instance.setTres(me);
};
