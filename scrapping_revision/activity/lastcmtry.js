let request =require("request");
let fs= require("fs");
let cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/19322/commentary/1187683", function(err,res,html) {
  if (err === null && res.statusCode === 200) {
    fs.writeFile("index.html",html,function(){
        console.log("file made");
    })
    parseHtml(html);
  } else if (res.statusCode === 404) {
    console.log("Page Not Found");
  } else {
    console.log(err);
    console.log(res.statusCode);
  }
});
function parseHtml(html){
    console.log("start");
    let d= cheerio.load(html);
    let item=d(".item-wrapper .description");
    let text=d(item[0]).text();
    console.log(text);
    console.log("end");
}