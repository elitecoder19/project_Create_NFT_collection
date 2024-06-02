/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTsCollection = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
//function to mint NFT
function mintNFT(_name, _city, _carName, _speed) {
    const NFT =
    {
        name: _name,
        city: _city,
        carName: _carName,
        speed: _speed
    }
    NFTsCollection.push(NFT);
    console.log("Minted: " + _name,);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (i = 0; i < NFTsCollection.length; i++) {
        console.log("\nID\t: " + (i + 1));
        console.log("Name:\t\t" + NFTsCollection[i].name);
        console.log("City:\t\t" + NFTsCollection[i].city);
        console.log("carName:\t" + NFTsCollection[i].carName);
        console.log("carSpeed:\t" +NFTsCollection[i].speed);
    }

}

// printing total number of NFTs we minted to the console
function getTotalNFTs() {
    console.log("\nTotal Numbers of NFTs minted:\t" + NFTsCollection.length);

}

// calling the functions

mintNFT("Rahul", "Ludhiana", "Lamborghini", 220);
mintNFT("Ankush", "mohali", "BMW", 170);
mintNFT("Rohit", "Banglore", "Mercedes", 100);
mintNFT("Abhishek","Amritsar", "Audi", 200);
mintNFT("Jim","Jalandhar", "Tata", 120);
listNFTs();
getTotalNFTs();
