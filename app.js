const express=require("express");
const app=express();
const mongoose=require("mongoose")
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
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
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));  


const port = 8080;
app.get('/', (req, res) => {
   res.send('Hello World!');
});
app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});
//index route
app.get("/listings",async (req,res)=>{
    const listings=await Listing.find({})
    res.render("listings/index.ejs", { listings });
})
//accept create new list request
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//show roiute
app.get("/listings/:id",async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id)
    res.render("listings/show.ejs", { listing });
})
//create route
app.post("/listings",async (req,res)=>{
    let listing=req.body;
    console.log(listing);
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

})

app.get("/listings/:id/edit",async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const listing=await Listing.findById(id);

    res.render("listings/edit.ejs",{listing});

});
//update route
app.put("/listings/:id",async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findByIdAndUpdate(id,{...req.body.listing},{runValidators:true,new:true});
    console.log(req.body.listing.title);
    res.redirect(`/listings/${listing._id}`);
})
//delte route
app.delete("/listings/:id/delete",async (req,res)=>{
    const {id}=req.params;
    await Listing.findByIdAndDelete(id);
    console.log("deleted");
    res.redirect("/listings");
})


// //app.get("/testListing",async (req,res)=>{
//     //let sampleListing=new Listing({
//       //  title:"My first villa",
//       //  description:"By the beach",
//         price:2000,
//         location:"catalyc,goa",
//         country:"India"
//     })
//     await sampleListing.save()
//     console.log("sample was saved");
//     res.send("succesfull testing")
// })