const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const Contract = artifacts.require('fTokenOC');

module.exports = async function (deployer) {
  let me = "0x4CE69fd760AD0c07490178f9a47863Dc0358cCCD"; // maxflowo2.eth
  let bd = "0xcAA31fa413C555E8B74e70fE9F6036385A7e0Fc3"; // bomb deployer (will fix later)
  let inputs = ['Fantom Bomb', 'fBOMB', me, me, bd];
  const instance = await deployProxy(Contract, inputs, { deployer });
//  await instance.disable();
//  await instance.setGasForDestinationLzReceive(250000);
//  await instance.setTres(bd);
};
