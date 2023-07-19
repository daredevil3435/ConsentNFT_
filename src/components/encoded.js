const json = '{"name":"kanak","image":"https://www.forex.academy/wp-content/uploads/2019/12/Blockchain-1.jpg","attributes":[{"value":"kanak@ok.com","trait_type":"email"},{"value":"Yes","trait_type":"Consent"}],"description":"Simple Consent NFT"}';

const encodedData = btoa(json);
console.log(encodedData);
