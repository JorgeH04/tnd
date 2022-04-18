require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/L7nA-YedYSNXnYYUpqXDUi5_Db_PWkUY',
      accounts: [
        '3ed46b3ed0ecee1fd79456eb1199ed5c9e2427c77ced5378f1da347c7315f692',
      ],
    },
  },
}