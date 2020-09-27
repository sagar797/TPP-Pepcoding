let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let leaderboard = [];
let gcount = 0;
request("https://www.espncricinfo.com/scores/series/19322", function (err, res, html) {
    if (err === null && res.statusCode === 200) {
        fs.writeFile("index.html", html, function () {
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

function parseHtml(html) {
    console.log("requesting")
    //parsing series page
    let d = cheerio.load(html);
    let cards = d(".cscore.cscore--final.cricket,cscore--watchnotes")
    //console.log(cards.length)
    //cards type=>ODI/T20
    for (let i = 0; i < cards.length; i++) {
        let macthtype = d(cards[i]).find(".cscore_info=overview").html();
        let test = macthtype.includes("ODI") || macthtype.includes("T20");
        if (test === true) {
            console.log(macthtype);
            let anchor = d(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");
            let matchlink = `http://www.espncricinfo.com$(anchor)`;
            goToMatchPage(matchlink);
        }
    }

    function goToMatchPage(MatchLink) {
        gcount++;
        console.log("req for"+gcount);
        request(MatchLink, function (err, res, html) {
            if (err == null && res.statusCode == 200) {
                handleMatch(html)
                gcount--;
                // console.log(gcount)
                if(gcount==0){
                    console.table(gcount);
                }
            }
            else if (res.statusCode == 404) {
                console.log("Invalid URL");
            } else {
                console.log(err);
                console.log(res.statusCode);
            }
        })

    }
    function handleMatch(html) {
        const d = cheerio.load(html);
        let format = d(".cscore.cscore--final.cricket .cscore_info-overview").html()
        let teams = d(".sub-module.scorecard h2");
        let innings = d(".sub-module.scorecard");
        console.log(format);
        for (let i = 0; i < innings.length; i++) {
            let batsManRows = d(innings[i]).find(".scorecard-section.batsman .flex-row .wrap.batsman");
            console.log(d(teams[i]).text());
            for (let br = 0; br < batsManRows.length; br++) {
                let batsman = d(batsManRows[br]);
                let batsmanName = batsMan.find(".cell.batsman").text();
                let batsmanRuns = batsMan.find(".cell.runs").html();
                // console.log(batsmanName + " " + batsmanRuns)
                handlePlayer(format,team,batsmanName,batsmanRuns);
            }
        }
    }

    function handlePlayer(format,team,batsmanName,batsmanRuns){
        batsmanRuns=Number(batsmanRuns);
        for(let i=0;i<leaderboard.length;i++){
            let pObj=leaderboard[i];
            if(pObj.name==batsmanName&&pObj.team==team&&pObj.format==format){
                pObj.runs+=batsmanRuns
                return;
            }
            let Obj={
                runs:batsmanRuns,
                format:format,
                team:team,
                name:batsmanName
            }
            leaderboard.push[obj];
        }
    }
}