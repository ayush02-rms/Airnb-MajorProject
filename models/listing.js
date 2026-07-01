const mongoose=require("mongoose");
const listingSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default:"https://www.bing.com/images/search?view=detailV2&ccid=Kd4UF8DN&id=FAF6A4B47AAA3B8CDDC914BB73BCAB59C6C35689&thid=OIP.Kd4UF8DN5K_cYcbGBM2ClAHaE8&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f036%2f756%2f164%2fnon_2x%2fai-generated-beautiful-nature-tropical-beach-and-sea-with-coconut-palm-tree-at-sunset-time-for-travel-and-vacation-photo.jpg&exph=980&expw=1470&q=image+sos+sun+adn+ocean+with+tree&mode=overlay&FORM=IQFRBA&ck=60A6EFB8C410D710CCCAE961666B6277&selectedIndex=0&idpp=serp&ajaxhist=0&ajaxserp=0",
        set:(v)=> v===""? "https://www.bing.com/images/search?view=detailV2&ccid=Kd4UF8DN&id=FAF6A4B47AAA3B8CDDC914BB73BCAB59C6C35689&thid=OIP.Kd4UF8DN5K_cYcbGBM2ClAHaE8&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f036%2f756%2f164%2fnon_2x%2fai-generated-beautiful-nature-tropical-beach-and-sea-with-coconut-palm-tree-at-sunset-time-for-travel-and-vacation-photo.jpg&exph=980&expw=1470&q=image+sos+sun+adn+ocean+with+tree&mode=overlay&FORM=IQFRBA&ck=60A6EFB8C410D710CCCAE961666B6277&selectedIndex=0&idpp=serp&ajaxhist=0&ajaxserp=0":v,
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    }
})
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;