/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Step 1: Create a variable to hold the number of NFTs
let numberOfNFTs = 0;

// Step 2: Create an object inside the mintNFT function to hold the metadata
function mintNFT(name, description, image) {
  let nft = {
    name: name,
    description: description,
    image: image
  };

  numberOfNFTs++; // Increment the number of NFTs
}

// Step 3: Print all NFT metadata using listNFTs function
function listNFTs() {
  // Implement an array of NFT objects
  let nfts = [
    {
      name: "NFT 1",
      description: "Description for NFT 1",
      image: "nft1.jpg"
    },
    {
      name: "NFT 2",
      description: "Description for NFT 2",
      image: "nft2.jpg"
    }
    // Add more NFT objects as needed
  ];

  for (let nft of nfts) {
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("-----------------------");
  }
}

// Step 4: Get the total supply of NFTs
function getTotalSupply() {
  return numberOfNFTs;
}

// Call the functions
mintNFT("NFT 1", "Description for NFT 1", "nft1.jpg");
mintNFT("NFT 2", "Description for NFT 2", "nft2.jpg");

listNFTs();

console.log("Total NFTs: " + getTotalSupply());
