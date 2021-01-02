require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember huge guess private flat two'; 
let testAccounts = [
"0xd58e507c39cb14d9ad415ac3435ce53e010efbd069a6071ddf631a9d5467971f",
"0x47d7c506734cb7dbf7b2853db9495eb50e5401fad4e75e0a1fe544ef369e84b2",
"0xa275af2e3b4ad9eeb68342bcd86dcef217fcc40df5f8deabb4b4480934c2fe6c",
"0x8e58955c227caf45603d7e34cf1641068713daa836ca4384fac5832c41151125",
"0x9c44c0de3000a1d77e39a37734625b330923f89d5145c3b3bf5ea96f2fc528a0",
"0x45ceb94556926fe0330902efca51d83ff95e66d98a71bfd0c75aea8e3671979f",
"0xee248d70243f4662b85b3d89abab6b1a1a4fcfbb54bfa45078c10add47d414c0",
"0xbad91f75025d78ba48f9843582c4004505b01ae5ed3f4b7347741ce0629f480a",
"0x40be87e5eba782c1531da42f58297c4d5b966bb03449a2695368173fab81bc50",
"0xe01531f84f30c84a28e4d9a3a68dca5305ceb1be277bae7032f8509827088e52"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
