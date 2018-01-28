// This script can be used in a webpage to get a sorted list of ANOVAcoin token holders
// Written by hamsterdetectiv

var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // standard is to put the default provider you want here.
    // Currently set to the ropsten chain provider.
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
}

// This long thing is the contract abi. You can encode it to be shorter if you want...
var contract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "address"
			}
		],
		"name": "getBalanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAddressAmount",
		"outputs": [
			{
				"name": "length",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getAddress",
		"outputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]).at("0xa85ae31b3483d4402bf20be72d20677ea8127b8b"); // here we create the contract object to work off

function getBalances(callback) {
	var addresses = [];
    var addrLength = contract.getAddressAmount(function(error, addrLength){
		if (error) console.log(error);
		counter = 0;
		length = addrLength.toNumber();
		// Nothing found...
		if (length == 0) {
			document.getElementById('leaderboard').innerHTML = "<p>No leaderboard details found. Make sure you're listening to the correct ethereum network (ropsten)!</p>";
			return;
		}
		for (var i = 0; i < length; i++) {
			console.log("going through each one");
			contract.getAddress(i, function(err, addr){
				if (err) console.log(error);
				addresses.push(addr);
				// nasty hack to deal with callbacks
				console.log('getting address');
				counter++;
				if (counter == length) {
					sortBalances(addresses, callback);
				}
			});
		}
	});
}
function sortBalances(addresses, callback) {
    // we now have the addresses, so all we do is grab the values
	// note these will all be BigNumber objects
	count = 0;
	balances = [];
    addresses.forEach(addr => {
        var obj = {};
        obj.address = addr;
        contract.getBalanceOf(addr, function(error, balance) {
			obj.balance = balance.toNumber();
			balances.push(obj);
			count++;
			if (count == addresses.length) {
				balances.sort((a, b) => b.balance-a.balance);
				callback(balances);
			}
		});
    });
}

function createTable(list) {
// for running the script on the ANOVAwebsite
	var myTable= "<table class='table table-striped black'><tr><td style='width: 100px;'>Ranking</td>";
		myTable+= "<td style='width: 100px; text-align: left;'>Amount</td>";
		myTable+="<td style='width: 100px; text-align: left;'>Wallet Address</td></tr>";
	for (var i = 0; i < list.length; i++) {
		myTable+="<tr><td style='width: 100px;'><b>" + (i+1) + "</b></td>";
		myTable+="<td style='width: 100px; text-align: left;'>" + list[i].balance + "</td>";
		myTable+="<td style='width: 100px; text-align: left;'>" + list[i].address + "</td></tr>";
	}
	myTable += "</table>";
	document.getElementById('leaderboard').innerHTML = myTable;
}

getBalances(createTable);

