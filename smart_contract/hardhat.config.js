require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/7lbtRn9CBC3qQFrZGbRDigPfe_DUbA0W',
      accounts: [
        '3ed46b3ed0ecee1fd79456eb1199ed5c9e2427c77ced5378f1da347c7315f692',
      ],
    },
  },
}