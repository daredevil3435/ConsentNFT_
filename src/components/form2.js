import React, { useState } from 'react'
import {ethers} from 'ethers';

const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/56b3512dca694df7b66190af7a53988a');

const address = "0xBe466558Ab7528B575Ab75d420A5A40Cc1d5C1B1";
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
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
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
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
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
		"name": "totalSupply",
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

const NFTForm = () => {

    const[name, setName] = useState('');
    const[description , setDescription] = useState('');
    // const[image, setImage]= useState();
    const[email,setEmail] = useState('');
    const[consent, setConsent] = useState('');
    const[walletAddress, setWalletAddress]= useState('');
    // const[tokenId, setTokenId] = useState();

    // async function createMetadat()
    async function getAccount(){
        if(window.ethereum){
            console.log("Detected");
    
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
    
            console.log(accounts);
            setWalletAddress(accounts[0]);
    
        }
    
    }

    async function mintNFT()
    {
        const metaData = {
            name: {name},
            description: {description},
            attributes: [
              {
                trait_type: 'email',
                value: {email},
              },
              {
                trait_type: 'Consent',
                value: {consent},
              },
            ],
        }
        console.log("success: ", metaData);

        if(window.ethereum){
            console.log("Detected");
    
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
    
            console.log(accounts);
            setWalletAddress(accounts[0]);
            
            const jsonData = JSON.stringify(metaData, null, 2);
            const encodedData = btoa(jsonData);
            console.log(encodedData);
            console.log("success");
    
        }


    }
    

    async function createNFT() {
        try {
          // Generate the metadata object
          const metadata = {
            name,
            description,
            
            attributes: [
              {
                trait_type: 'email',
                value: email,
              },
              {
                trait_type: 'Consent',
                value: consent,
              },
            ],
          };
      
          // Convert metadata object to JSON string
          const jsonData = JSON.stringify(metadata, null, 2);
      
        //   Write JSON data to a file
          const blob = new Blob([jsonData], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
      
          // Create a download link for the JSON file
          const link = document.createElement('a');
          link.href = url;
          link.download = 'metadata.json';
          link.click();

          const encodedData = btoa(jsonData);
          console.log(encodedData);
      
          // Cleanup
          URL.revokeObjectURL(url);

        //   const providers = new ethers.BrowserProvider(window.ethereum);
        //     await providers.send("eth_requestAccounts",[]);
        //     const signer = await providers.getSigner();
        //     console.log(signer);
    
            // const contract = new ethers.Contract(address, abi, signer);
            
            
            // const result = await contract.safeMint(walletAddress,tokenId, jsonData);
            
            // setTokenId(result.toString());
            // console.log("Success!!");
        } catch (error) {
          console.error('Error creating JSON file:', error);
        }

        // try {
        //     const providers = new ethers.BrowserProvider(window.ethereum);
        //     await providers.send("eth_requestAccounts",[]);
        //     const signer = await providers.getSigner();
        //     console.log(signer);
    
        //     const contract = new ethers.Contract(address, abi, signer);
            
            
        //     const result = await contract.safeMint(walletAddress,tokenId, metadata);
            
        //     setTokenId(result.toString());
        //     console.log("Success!!");
        // } catch (error) {
        //   console.error('Error minting NFT:', error);
        // }

      }
      
  return (
    <div>
      <form className='form1'>
        <label className='l1'>
          Name: 
          <input className='name' type="text" value={name}  onChange={(e)=> setName(e.target.value)}/>
        </label>
        <br />
        <br/>
         <br/>
         <br/>
        <label className='l2'>
          Description: 
          <input className='desc' type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        </label>
        <br />
        <br/>
         <br/>
         <br/>
        {/* <label className='l3'>
          Image: 
          <input className='img' type="file" value={image} onChange={(e)=> setImage(e.target.value)}/>
        </label> */}
        <br/>
         <br/>
         <br/>
        <br/>
        <label className='l4'>
          Email:
          <input className='mail' type="text" value={email}  onChange={(e) => setEmail(e.target.value)} />
         </label>
        <br />
        <br/>
         <br/>
         <br/>
         <label className='l5'>
         Consent:
          <select className='cbtn' value={consent}  onChange={(e) => setConsent(e.target.value)} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

         </label>
         <br/>
         <br/>
         <br/>
         <label className='l6'>
            <button onClick={getAccount} value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)}>Connect wallet</button>
            <input type='text' value={walletAddress}  />
         </label>
         <br/>
         <br/>
         <br/>
         {/* <label>
            Token id: 
            <input type='number' value={tokenId} onChange={(e) => setTokenId(e.target.value)}/>
         </label> */}
         <br/>
         <br/>
         <br/>
         <button onClick={createNFT}>Mint nft</button>
         <br/>
         <br/>
         <br/>
         {/* <button onClick={mintNFT}>Get encoded json data</button> */}
        <br />

      </form>
    </div>
  )
}

export default NFTForm
