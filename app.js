const express=require("express");
const app=express();
const mongoose=require("mongoose")
const Listing=require("./models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"
main().
       then(()=>{
        console.log("connect to Data base")
       })
       .catch((err)=>{
        console.log(err)

       })

async function main(params) {
    await mongoose.connect(MONGO_URL);
    
}
const port = 8080;
app.get('/', (req, res) => {
   res.send('Hello World!');
});
app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});
app.get("/testListing",async (req,res)=>{
    let sampleListing=new Listing({
        title:"My first villa",
        description:"By the beach",
        price:2000,
        location:"catalyc,goa",
        country:"India"
    })
    await sampleListing.save()
    console.log("sample was saved");
    res.send("succesfull testing")
})