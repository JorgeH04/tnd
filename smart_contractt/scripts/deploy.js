const { ethers } = require('hardhat');

const main = async () => {

  const bitcoinFactory = await ethers.getContractFactory('Bitcoin')
  const bitcoinContract = await bitcoinFactory.deploy()
  await bitcoinContract.deployed()
  console.log('Bitcoin deployed to:', bitcoinContract.address)
 

 

}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()