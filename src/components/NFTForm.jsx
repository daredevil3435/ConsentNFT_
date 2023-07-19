import React, { useState } from 'react'
import {ethers} from 'ethers';
import {useForm} from 'react-hook-form';
import './NFTForm.css';
const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/56b3512dca694df7b66190af7a53988a');

const address = "0x6d3aA365CF52F71A46524e7B183772a6aA24131B";
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
		"inputs": [
			{
				"internalType": "string",
				"name": "json",
				"type": "string"
			}
		],
		"name": "mint",
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
]

const NFTForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
// console.log the data to see the input values
        console.log(data)
    };

    // const[name, setName] = useState('');
    // const[description , setDescription] = useState('');
    // const[image, setImage]= useState();
    const[encodedData, setEncodedData] = useState('');
    // const[email,setEmail] = useState('');
    // const[consent, setConsent] = useState('');
    const[walletAddress, setWalletAddress]= useState('');
    // const[tokenId, setTokenId] = useState();
    const[tokenName, setTokenName] = useState();
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        attributes:{
          email:'',
          consent:''
        }
    })
    // const [formData, setFormData] = useState({
    //     name:"",
    //     email:"",

    // })

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

    const handleEncode = () => {
        const encodedFormData = btoa(JSON.stringify(formData));
        console.log(encodedFormData);
      };

    // const handleMintNFT = async () => {
    //     try {
            // const providers = new ethers.BrowserProvider(window.ethereum);
            // await providers.send("eth_requestAccounts",[]);
            // const signer = await providers.getSigner();
            // console.log(signer);
    
            // const contract = new ethers.Contract(address, abi, signer);
    //         // const result = await contract.mintConsentNFT(email, username, consent);
            
    //         // const email = {email};
    //         // const username ={username};
    //         // const consent = {consent};
    //         // const WalletAddress = {walletAddress};
            
    //         const result = await contract.mintConsentNFT(walletAddress, email, username, consent);
            
    //         // setTokenId(result.toString());
    //         console.log("Success!!");
    //     } catch (error) {
    //       console.error('Error minting NFT:', error);
    //     }
    //   };

    // const handleMintNFT = async () =>
    // {
    //     try{
    //     const metaData = 
    //     {
    //         name,
    //         description,
    //         attributes: [
    //           {
    //             trait_type: 'email',
    //             value: email,
    //           },
    //           {
    //             trait_type: 'Consent',
    //             value: consent,
    //           },
    //         ],
    //     }
    //     console.log("success: ", metaData);

    //      if(window.ethereum)
    //     {
    //         console.log("Detected");
    
    //         const accounts = await window.ethereum.request
    //         ({
    //             method: "eth_requestAccounts",
    //         })
    
    //         console.log(accounts);
    //         setWalletAddress(accounts[0]);
            
    //         const jsonData = JSON.stringify(metaData, null, 2);
    //         console.log(jsonData);
    //         const _encodedData = btoa(jsonData);
    //         setEncodedData(_encodedData);
    //         console.log(_encodedData);
    //         console.log(encodedData);
    //         console.log("success");

    //         try{

    //             const providers = new ethers.BrowserProvider(window.ethereum);
    //             const signer = new providers.getSigner();
    
    //             const contract = new ethers.Contract(address, abi, signer);
    
    //             const result = await contract.mint(_encodedData);
    
    //             const supply = await contract.totalSupply();
    
    //             if(supply===1){
    //                 console.log("nft minted");
    //             }
    //             else{
    //                 console.log("Error");
    //             }
    //         }catch (error) {
    //             console.error('Error minting NFT:', error);
    //         }


            
            
    //     }
    //   }catch(error){
        // console.error("Error handling buttin", error);
    //   }
    // }



    
        


    

    async function readData(){
        const contract = new ethers.Contract(address, abi, provider);
        const name = await contract.name();
        setTokenName(name);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // If the field belongs to the attributes object
        if (name.startsWith('attributes.')) {
          const attributeName = name.split('.')[1];
    
          setFormData((prevData) => ({
            ...prevData,
            attributes: {
              ...prevData.attributes,
              [attributeName]: value,
            },
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    

    // async function createNFT() {
    //     try {
          // Generate the metadata object
        //   const metadata = {
        //     name,
        //     description,
        //     attributes: [
        //       {
        //         trait_type: 'email',
        //         value: email,
        //       },
        //       {
        //         trait_type: 'Consent',
        //         value: consent,
        //       },
        //     ],
        //   };
        //   const metadata ={
        //     formData.name,
        //     formData.description,
        //     attributes:[

        //     ]
        //   }
      
          // Convert metadata object to JSON string
        //   const jsonData = JSON.stringify(metadata, null, 2);
      
          
        //   const _encodedData = btoa(jsonData);
    //     //   console.log(encodedData);
    //       setEncodedData(_encodedData);
    //       console.log(encodedData);
      
    //     } catch (error) {
    //       console.error('Error creating JSON file:', error);
    //     }

        

    //   }
      
  return (
    <div className='div1'>
        <h1>Mint NFT</h1>
        
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className='form1'>
        <label className='l1'>
          Name: 
          <input 
        //   {...register("name", { required: true })}
          className='name' 
          type="text" 
          value={formData.name}  
        //   onChange={(e)=> setName(e.target.value)} 
        onChange={handleChange}
          required/>
        </label>
        <br />
       
        <label className='l2'>
          Description: 
          <input 
        //   {...register("description", { required: true })}
          className='desc' 
          type="text" 
          value={formData.description} 
        //   onChange={(e)=> setDescription(e.target.value)} 
          onChange={handleChange}
          required/>
        </label>
        <br />
        
        {/* <label className='l3'>
          Image: 
          <input className='img' type="file" value={image} onChange={(e)=> setImage(e.target.value)}/>
        </label> */}
        
        <br/>
        <label className='l4'>
          Email:
          <input 
        //   {...register("email", { required: true })}
          className='mail' 
          type="text" 
          value={formData.attributes.email}  
        //   onChange={(e) => setEmail(e.target.value)} 
          onChange={handleChange}
          required/>
         </label>
        <br />
        
         <label className='l5'>
         Consent:
          <select 
           {...register("consent", { required: true })}
          className='cbtn' 
          value={formData.attributes.consent} 
        //    onChange={(e) => setConsent(e.target.value)} 
        onChange={handleChange}
          required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

         </label>
         <br/>
         <label className='l6'>
            <button 

            onClick={getAccount} 
            value={walletAddress} 
            onChange={(e) => setWalletAddress(e.target.value)}>Connect wallet</button>
            <input type='text' className='wlt' value={walletAddress}  />
         </label>
         <br/>
         <label>
            <button type="submit" onClick={handleEncode}>Submit</button>
         </label>
         
         {/* <label>
            Token id: 
            <input type='number' value={tokenId} onChange={(e) => setTokenId(e.target.value)}/>
         </label> */}
         <br/>
         <br/>
         <br/>
         {/* <button onClick={createNFT}>Mint nft_</button> */}
         {/* {encodedData && (
          <div>
            <label>Base64-encoded Metadata:</label>
            <textarea className='end' value={encodedData} readOnly />
          </div>
        )} */}
         {/* <h1 onChange= {(e)=>setEncodedData(e.target.value)}>Encoded data : {encodedData} </h1> */}
         <br/>
         <br/>
         <br/>
         {/* <button onClick={handleMintNFT}>Mint NFT</button> */}
        <br />
        <br/>
        <label>
            <button onClick={readData}>get token name</button>
           
            <input className='tname' value= {tokenName} />
        </label>

      </form>
    </div>
  )
}

export default NFTForm
