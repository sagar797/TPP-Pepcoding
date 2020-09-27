// let fs = require("fs");
// let cheerio = require("cheerio");
// let request = require("request");

// request("https://www.cricbuzz.com/live-cricket-scorecard/22585/aus-vs-nz-1st-odi-new-zealand-tour-of-australia-2020", function (err, res, html) {
//     if (err === null && res.statusCode === 200) {
//         console.log("scrapping");
//         parseHtmml(html);
//         // fs.writeFileSync("newdata.html",html);
//         console.log("scrapping done");
//     } else if (res.statusCode === 404) {
//         console.log("Page Not Found");
//     } else {
//         console.log(err);
//         console.log(res.statusCode);
//     }
// })

// function parseHtmml(html) {
//     let d = cheerio.load(html)
//     let WholeDiv = d("#innings_1 .cb-col.cb-col-100.cb-ltst-wgt-hdr").html()
//     // fs.writeFileSync("newdata1.html", WholeDiv)
//     let Row = d(WholeDiv).find(".cb-col.cb-col-100.cb-scrd-itms")
//     for (let i = 0; i < Row.length; i++) {
//         let items=Row[i]
//         for(let j=0;j<items.length;j++){
//             let CricketerName = d(".cb-col.cb-col-27 a").html()
//             let RunsOfCricketer = d(".cb-col.cb-col-100.cb-scrd-itms .cb-col.cb-col-8.text-right.text-bold").html()
//             // let CricketerName=items[0]
//             // let RunsOfCricketer=items[2]
//             console.log(CricketerName + "" + RunsOfCricketer)
//         }
//     }
//     // fs.writeFileSync("newdata.html",cricketers);
// }



let fs = require("fs");
let cheerio = require("cheerio");
let request = require("request");

request("https://www.cricbuzz.com/live-cricket-scorecard/22585/aus-vs-nz-1st-odi-new-zealand-tour-of-australia-2020", function (err, res, html) {
    if (err === null && res.statusCode === 200) {
        console.log("scrapping");
        parseHtmml(html);
        // fs.writeFileSync("newdata.html",html);
        console.log("scrapping done");
    } else if (res.statusCode === 404) {
        console.log("Page Not Found");
    } else {
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtmml(html) {
    let d = cheerio.load(html)
    let a = d('#innings_1 .cb-col.cb-col-100.cb-ltst-wgt-hdr .cb-col.cb-col-100.cb-scrd-itms');
    // console.log(a.length);
    fs.writeFileSync('cric.html',a);
    for(let i=0;i<a.length;i++)
    {
        let co = d(a[i]);
        let bname = co.find('.cb-col.cb-col-27 a').html();
        if(bname!=null)
        {
            let runs = co.find(".cb-col.cb-col-8.text-right.text-bold").html();
            console.log(bname+" "+runs);
        }
    }
   
}