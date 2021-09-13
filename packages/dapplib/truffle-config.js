require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain proof hockey enter orient tattoo'; 
let testAccounts = [
"0xe96d8b741a8198c51d024be82ba6ca4befc8df84490dbef99c91787fdcff6285",
"0x182145d161be74dda1bbc939137aa59081e312463e0ccef187082289a646c996",
"0xe9f33dc1c4c692630ddcea83c46ed36cb37dc7cab9503e78c9c69aa0a98fbd6d",
"0xd59ce04aae20bac5a414d3062c864e65c7cd00923c166225bf0e19b9fdc3aaee",
"0xf909736ffe4b03eaded296e749e570c3f7b357fb8f2ace7faa2b854e162ee010",
"0xc07f7ad7d39df8a1504cb643ab37b05298e29267be0b83794206bc4fb6477fef",
"0x8da7fb2843e7a239954bfcf4c28ade0f99d18148b0bb10fe039cfb9f4de00385",
"0x0d067d9fd3c966ae4effb8c2749b6c1913dada40378bdfbbf6fda976fae62a15",
"0x673a650c7c9d5e9ff775df48ab0a23bc0fed11721c9a96e0fbb0911e2947e71a",
"0x3524372ecfc263b75c6ca3570eb6106a494a9512d884e2b264c8c6e557a3289c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

