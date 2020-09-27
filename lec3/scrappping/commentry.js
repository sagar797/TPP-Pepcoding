let request = require("request");
let fs=require("fs");
let cheerio=require("cheerio");
let seriesid=process.argv[2];
let matchid=process.argv[3];
request(`http://espncricinfo.com/series/${seriesid}/scorecard/${matchid}/`,function(err,res,html){
    if(err==null&&res.statusCode==200){
        // fs.writeFileSync("abc.html",html);
        parsehtml(html);
    }else if(res.statusCode==404){
        console.log("page not found");
    }else{
        console.log(err);
        console.log(res.statusCode);
    }
});

function parsehtml(html){
    console.log("parsing html");
    let co=cheerio.load(html);
    let lastcommentry = co(".item-wrapper .description").html();
    fs.writeFileSync("commentry.html",lastcommentry);
}