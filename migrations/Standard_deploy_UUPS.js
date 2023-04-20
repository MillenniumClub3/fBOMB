const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const Contract = artifacts.require('fBOMBKava');
const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer) {
  let yolo = await Migrations.at('0x24e7a666d8A2eec1C26931EcD643a4e42b3A6c11');
  await yolo.setCompleted(1);
  let me = "0x4CE69fd760AD0c07490178f9a47863Dc0358cCCD"; // maxflowo2.eth
  let inputs = ['Fantom Bomb', 'fBOMB', me, me, me];
  const instance = await deployProxy(Contract, inputs, { deployer });
};
