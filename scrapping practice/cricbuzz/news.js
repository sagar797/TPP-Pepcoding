let fs=require("fs");
let cheerio=require("cheerio");
let request =require("request");

request("https://www.cricbuzz.com/",function(err,res,html){
    if(err===null&&res.statusCode===200){
        console.log("scrapping");
        parseHtmml(html);
        console.log("scrapping done");
    }else if(res.statusCode===404){
        console.log("Page Not Found");
    }else{
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtmml(html){
    let d=cheerio.load(html)
    let news=d(".cb-hm-lft .cb-col-100.cb-lst-itm.cb-lst-itm-sm a").html();
    console.log(news);
}
