const express=require("express")
const app = express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
 res.sendFile(__dirname+"/index.html")
});


app.post("/",function(req,res){
    var n1 =Number(req.body.num1);
    var n2=Number(req.body.num2);
    res.send("The answer is" + n1+n2);
})


app.post("/",function(req,res){
    console.log(req.body.num1);
     res.send("Thanks for posting")
});

app.listen(3000,function(){
    console.log("Server is started...!");
});
