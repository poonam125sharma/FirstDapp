'use-strict';

const MoodContractAddress = '0x2cF5dfa9Ba6bAb4154181A198473007A646E6a30';
const MoodContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let MoodContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, 'ropsten');
provider.send('eth_requestAccounts', [])
    .then(() => {
        provider.listAccounts().then((accounts) => {
            signer = provider.getSigner(accounts[0]);
            MoodContract = new ethers.Contract(MoodContractAddress, MoodContractABI, signer);
        });
    });

async function getMood() {
    const mood = await MoodContract.getMood();
    console.log(mood);
}

async function setMood() {
    const mood = document.getElementById('mood').value;
    await MoodContract.setMood(mood);
}