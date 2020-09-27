let request = require("request");
let fs=require("fs");
let cheerio=require("cheerio");
request("http://espncricinfo.com/series/19322/scorecard/1187679",function(err,res,html){
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
    let $=cheerio.load(html);
    let tablearr =$(".scorecard-section.bowling table tbody tr");
    // let tablehtml =$(".scorecard-section.bowling");   if we dont use html it will show all tables in this  class
    let maxwicketstaker="";
    let maxwickets=0;
    for(let i=0;i<tablearr.length;i++){
        let tdarr= $(tablearr[i]).find("td");
        let wicket = $(tdarr[5]).html();
        let bowlername=$(tablearr[i]).find("td a").html();
        if(wicket>maxwickets){
            maxwicketstaker=bowlername;
            maxwickets=wicket;
        }
    }
    console.log(maxwicketstaker+""+maxwickets);


    // fs.writeFileSync("table.html",tablehtml);
    // console.log("file writtten to disk");
}