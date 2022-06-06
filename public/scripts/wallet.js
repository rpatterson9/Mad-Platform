let web3 = new Web3(window.ethereum);
const MAD_CA = '0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b';
const WBNB_CA = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const WETH_CA = '0x2170Ed0880ac9A755fd29B2688956BD959F933F8';

const maxUint256 = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
const PANCAKE_ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const PANCAKE_ROUTER_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const TF_ABI = [{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const MAD_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_charityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"charityFee","type":"uint256"}],"name":"setCharityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const EXACT_TOKEN_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"   
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const dataToken = {
    "bunny" : {
        "ca" : "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
        "symbol" : "BUNNY",
        "decimal" : 18
    },
    "mad" : {
        "ca" : "0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b",
        "symbol" : "MAD",
        "decimal" : 9
    },
    "bnb" : {
        "ca" : "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "symbol" : "BNB",
        "decimal" : 18
    },
    "eth" : {
        "ca" : "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "symbol" : "ETH",
        "decimal" : 18
    },
    "btcb" : {
        "ca" : "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        "symbol" : "BTCB",
        "decimal" : 18
    },
    "busd" : {
        "ca" : "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "symbol" : "BUSD",
        "decimal" : 18
    },
    "cum" : {
        "ca" : "0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d",
        "symbol" : "CUM",
        "decimal" : 18
    },
    "shiba" : {
        "ca" : "0xf09a100c32d780f0a48754e43533f9fb374e85f9",
        "symbol" : "SHIBA",
        "decimal" : 18
    },
    "elon" : {
        "ca" : "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
        "symbol" : "ELON",
        "decimal" : 9
    },
    "mobox" : {
        "ca" : "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377",
        "symbol" : "MOBOX",
        "decimal" : 9
    },
    "link" : {
        "ca" : "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
        "symbol" : "LINK",
        "decimal" : 18
    },
    "dai" : {
        "ca" : "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        "symbol" : "DAI",
        "decimal" : 9
    },

    // SafeMoon

    "safemoon" : {
        "ca" : "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3",
        "symbol" : "SAFEMOON",
        "decimal" : 9
    },

    // CAKE
    "cake" : {
        "ca" : "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        "symbol" : "CAKE",
        "decimal" : 9
    },

    // FREE
    "free" : {
        "ca" : "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
        "symbol" : "FREE",
        "decimal" : 18
    },



    

};

function generateUUIDUsingMathRandom() {
    let d = new Date().getTime();//Timestamp
    let d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const Wallet = {
    reqMetamask : async () => {
        return ethereum.request({ method: 'eth_requestAccounts' });
    },
    connect: async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                await Wallet.reqMetamask();
                Handle.connect(true);
                return true;
            } catch (e) {
                // User denied access
                console.log(e);
                Handle.connect(false);
                return false;
            }
        }
    },
    connectMad : async () => {
        return new web3.eth.Contract(MAD_ABI, MAD_CA);
    },
    connectPancake : async () => {
        return new web3.eth.Contract(PANCAKE_ROUTER_ABI, PANCAKE_ROUTER_ADDRESS);
    },
    connectToken : async (token_ca) => {
        return new web3.eth.Contract(EXACT_TOKEN_ABI, token_ca);
    },
    getTokenCA : async (typeToken) => {
        try {
            return dataToken[typeToken];
        }catch (e){
            return false;
        }
    },
    getAddress : async () => {
        const addresses = await web3.eth.getAccounts();
        if (!addresses[0]){
            console.log('Not connected');
            return false;
        }else{
            Handle.getAddress(addresses[0]);
            return addresses[0];
        }
    },
    getBalance : async (address, type) => {
        let balance = {};
        let MAD,dataToken,symbol;
        const balanceBNB = await web3.eth.getBalance(address);
        Object.assign(balance, {balanceBNB : balanceBNB});
        if (type && type !== 'bnb'){
            dataToken = await Wallet.getTokenCA(type);
            console.log({
                address : address,
                type : type,
                dataToken : dataToken
            });
            if (!dataToken){
                alert('Token not found');
            }else{
                MAD = await Wallet.connectToken(dataToken.ca);
            }
        }else {
            MAD = await Wallet.connectMad();
        }
        const balanceMAD = await MAD.methods.balanceOf(address).call();
        Object.assign(balance, {balanceMAD : balanceMAD});
        Handle.getBalance(balance,type, dataToken);
        return balance;
    },
    checkAllowance : async (type) => {
        let address, MAD, allowance, dataToken;
        await Wallet.reqMetamask();
        address = await Wallet.getAddress();
        if (type){
            dataToken = await Wallet.getTokenCA(type);
            MAD = await Wallet.connectToken(dataToken.ca);
        }else {
            MAD = await Wallet.connectMad();
        }
        if (!address){
            alert(`you're not connected`);
        }else{
            allowance = await MAD.methods.allowance(address,PANCAKE_ROUTER_ADDRESS).call();
            console.log(`allowance : ${allowance}`);
            if (allowance > 99999999){
                Handle.checkAllowance(true);
            }else{
                Handle.checkAllowance(false);
            }
        }
    },
    reqApprove : async (type) => {
        let MAD,address, dataToken;
        if (type){
            dataToken = await Wallet.getTokenCA(type);
            MAD = await Wallet.connectToken(dataToken.ca);
        }else {
            MAD = await Wallet.connectMad();
        }
        address = await Wallet.getAddress();
        try{
            await MAD.methods.approve(PANCAKE_ROUTER_ADDRESS,maxUint256)
                .send({from : address})
                .on('transactionHash', (hash) => {
                    Handle.showAlertTxHash(hash);
                })
                .on('receipt', (hash) => {
                   console.log(`confirmed receipt ${hash}`);
                    Handle.checkAllowance(true);
                });
        }catch (err) {
            alert(`Error : ${JSON.stringify(err)}`);
            Handle.checkAllowance(false);
            return false;
        }
    },
    sendMAD : async (recipient,amount, type, donor_name,donor_email,charity_id,uuid) => {
        let tx, address,amountWei, data, MAD, price;
        // gasPrice = await web3.eth.getGasPrice();

        address = await Wallet.getAddress();
        MAD = await Wallet.connectMad();

        amountWei = await web3.utils.toWei(amount,'gwei');
        data = MAD.methods.transfer(
            recipient,
            amountWei
        ).encodeABI();
        tx = {
            from: address,
            to: MAD_CA,
            data: data,
        };

        price = await Wallet.getPriceMAD();

        return web3.eth.sendTransaction(tx)
            .on('transactionHash', (hash) => {
                Handle.showAlertTxHash(hash);
            })
            .on('receipt', async (receipt) => {
                console.log('input to db history');
                let history = await Wallet.insertToHistory(donor_name,donor_email,
                    address,amount,
                    type,price.MAD_BUSD,receipt.transactionHash,charity_id, 'donation',uuid
                );
                await Wallet.sendEmailTransaction(uuid);
                Handle.showToastSuccessTx(receipt.transactionHash);
                setTimeout( () => {window.location.reload()},3500);
                return true;
            })
            .on('error', (error => {
                alert(`Error : ${JSON.stringify(error)}`);
                return false;
            }));
    },
    swap : async (recipient,amount, type, donor_name,donor_email,charity_id) => {
        let uuid, tx, address,amountWei, data, MAD;
        // gasPrice = await web3.eth.getGasPrice();
        address = await Wallet.getAddress();
        uuid = await generateUUIDUsingMathRandom();

        if(type !== 'mad'){
            // swap into mad
            await Wallet.swapIntoMAD(amount, address, type, recipient, donor_name,donor_email,charity_id, uuid);
        }else{
            await Wallet.sendMAD(recipient,amount, type, donor_name,donor_email,charity_id,uuid);
        }
    },
    insertToHistory : async (donor_name,donor_email,donor_address,amount,type,cv_rate,hash,charities,item,uuid) => {
        let obj;
        try{
            obj = {
                donor_name : donor_name,
                donor_email: donor_email,
                donor_address : donor_address,
                amount: amount,
                type: type,
                cv_rate: cv_rate,
                hash: hash,
                charities: charities,
                item: item,
                tx_id: uuid
            }

            const res = await axios.post('/create/history',
                obj,
                {
                    headers: {
                        'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    }
                });
            console.log('success insert to history');
            return res;
        }catch(e){
            console.log(`Error : ${e}`);
            return false;
        }
    },
    getHistory: async (address,type,charity_id) => {
        let result;
        if(!address || !type || !charity_id){
            console.log(`Invalid parameters : ${JSON.stringify({
                address : address,
                type : type,
                charity_id : charity_id
            })}`);
            return false;
        }
        try{
            result = await axios.get(`/histories/get?address=${address}&type=${type}&charity_id=${charity_id}`);
            Handle.getHistory(result.data);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    },
    swapIntoMAD : async (amount, address, type, recipient, donor_name,donor_email,charity_id,uuid) => {
        let swap, tx = {}, amountSend, dataToken, deadline, pancakeRouter, connectToken, fromToken, amountOutMin;
        deadline = await Wallet.getDeadline();
        pancakeRouter = await Wallet.connectPancake();
        dataToken = await Wallet.getTokenCA(type);
        connectToken = await Wallet.connectToken(dataToken.ca);

        amountSend = (amount * 10 ** dataToken.decimal);
        fromToken = dataToken.ca;

        if (type !== 'bnb'){
            amountOutMin = await Wallet.getAmountOutMin(amountSend,[fromToken, WBNB_CA, MAD_CA]);
            swap = pancakeRouter.methods.swapExactTokensForTokens(
                amountSend.toString(),
                amountOutMin.amountOutMin,
                [fromToken, WBNB_CA, MAD_CA],
                address,
                deadline
            ).encodeABI();
        }else{
            amountOutMin = await Wallet.getAmountOutMin(amountSend,[WBNB_CA, MAD_CA]);
            swap = pancakeRouter.methods.swapExactETHForTokens(
                amountOutMin.amountOutMin,
                [WBNB_CA, MAD_CA],
                address,
                deadline
            ).encodeABI();
            Object.assign(tx,{value : amountSend.toString()});
        }

        console.log({
            type : type,
            dataToken : dataToken,
            connectToken : connectToken,
            amount,
            address,
            amountSend,
        });

        // gasPrice = await web3.eth.getGasPrice();

        Object.assign(tx,{
            from: address,
            to: PANCAKE_ROUTER_ADDRESS,
            data: swap,
        });

        let amountOutMinGwei = web3.utils.fromWei(amountOutMin.amountOutMin.toString(),'gwei');

        return web3.eth.sendTransaction(tx)
            .on('transactionHash', (hash) => {
                Handle.showAlertTxHash(hash);
            })
            .on('receipt', async (receipt) => {
                let priceBNB = await Wallet.getPriceBNB(dataToken.ca);
                await Wallet.insertToHistory(donor_name,donor_email,
                    address,amount,
                    type,priceBNB,receipt.transactionHash,charity_id,'swap',uuid
                );
                return Wallet.sendMAD(recipient,amountOutMinGwei, type, donor_name,donor_email,charity_id,uuid);
            })
            .on('error', (error => {
                alert(`Error : ${JSON.stringify(error)}`);
                return false;
            }));

    },
    getDeadline : async () => {
        let deadline;
        await web3.eth.getBlock('latest', (error, block) => {
            deadline = block.timestamp + 300; // transaction expires in 300 seconds (5 minutes)
        });

        return web3.utils.toHex(deadline);
    },
    getAmountOutMin : async (amountIn,tokens) => {
        let pancakeRouter, amounts, amountOutMin;
        pancakeRouter = await Wallet.connectPancake();
        amounts = await pancakeRouter.methods.getAmountsOut(amountIn.toString(), tokens).call();
        if(amounts.length <= 2){
            amountOutMin = amounts[1] - (amounts[1] / 12).toFixed();
        }else{
            amountOutMin = amounts[2] - (amounts[2] / 20).toFixed();
        }
        console.log({
            amounts: amounts,
            amountIn,
            amountOutMin,
        });
        return {
            amountOutMin: amountOutMin,
            amountOutMinOrigin: amounts[1]
        };
    },
    getPriceMAD : async () => {
        let data, result;
        result = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${MAD_CA}`);
        result = result.data.data;
        data = {
            BUSD_MAD : 1 / parseFloat(result.price),
            MAD_BUSD : parseFloat(result.price),
            BNB_MAD : 1 / parseFloat(result.price_BNB),
            MAD_BNB : parseFloat(result.price_BNB).toFixed(19),
            ETH_MAD : 1 / parseFloat(result.price ),
            MAD_ETH : parseFloat(result.price)

        }
        Handle.getPriceMAD(data);
        return data;
    },
    getPriceBNB : async (token,convert) => {
        let result,dataToken;
        if (convert === true){
            dataToken = await Wallet.getTokenCA(token);
            token = dataToken.ca;
        }
        if (token){
            result = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${token}`);
        }else{
            result = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${WBNB_CA}`);
        }
        result = result.data.data;
        return parseFloat(result.price).toFixed(4);
    },
    getPriceETH : async (token,convert) => {
        let result,dataToken;
        if (convert === true){
            dataToken = await Wallet.getTokenCA(token);
            token = dataToken.ca;
            console.log(token)
        }
        if (token){
            result = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${WETH_CA}`);
            console.log("fuck 1");
            result = result.data.data;
            console.log(result);
            

        }else{
            result = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${WETH_CA}`);
 
            console.log("fuck 2");
        }
        result = result.data.data;
        console.log(result);

        return parseFloat(result.price).toFixed(4);
 

    },
    sendEmailTransaction : async (uuid) => {
        let data,result;
        result = await axios.get(`/email/send?uuid=${uuid}`);
        data = result.data;
        if(data.status === 'OK'){
            console.log('Please check your email for transaction receipt');
            return true;
        }else{
            console.log(data);
            alert('error');
            return false;
        }
    }
}

Wallet.getAddress().then(r => Wallet.getBalance(r));
Wallet.getPriceMAD();
