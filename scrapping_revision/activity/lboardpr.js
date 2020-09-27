let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let count = 0;
let leaderBoard = [];
request("https://www.espncricinfo.com/scores/series/19322",
    function (err, res, html) {
        if (err == null && res.statusCode == 200) {
            fs.writeFileSync("abc.html", html);
            parseHtml(html);
        } else if (res.statusCode == 404) {
            console.log("page not found");
        } else {
            console.log("err");
            console.log(res.statusCode);
        }
    });

//open all series and open all cards
function parseHtml(html) {
    let $ = cheerio.load(html);
    //parsing series
    let cards = $(".cscore.cscore--final.cricket.cscore--watchNotes");
    for (let i = 0; i < cards.length; i++) {
        let matchtype = $(cards[i]).find(".cscore_info-overview").html();
        let test = matchtype.includes("ODI") || matchtype.includes("T20I");
        if (test === true) {
            // console.log(matchtype);
            let anchors = $(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");
            let links = `https://www.espncricinfo.com${anchors}`;
            goToEachMatch(links);

            // console.log("//////////////////////////////////////////////////////////////");
            // count++;
        }
    }


}

//link -> request
function goToEachMatch(matchLink) {
    count++;
    request(matchLink, function (err, res, html) {
        if (err == null && res.statusCode == 200) {
            //    fs.writeFileSync(``,html);
            handleMatchFunction(html);
            count--;
            if (count == 0) {
                console.table(leaderBoard);
            }
        } else if (res.statusCode == 404) {
            console.log("page not found");
        } else {
            console.log("err");
            console.log(res.statusCode);
        }
    })
}
//handle match=team,format,runs,name
function handleMatchFunction(html) {
    let $ = cheerio.load(html);
    //batsmen ,runs,format,teams
    let format = $(".cscore.cscore--final.cricket .cscore_info-overview").html();
    format = format.includes("ODI") ? "ODI" : "T20I";
    //teams
    let teams = $(".sub-module.scorecard h2");
    let innigs = $(".sub-module.scorecard");
    // console.log("-------------------------------------------");
    for (let i = 0; i < innigs.length; i++) {
        let batsmenRow = $(innigs[i]).find(".scorecard-section.batsmen .flex-row .wrap.batsmen");
        let team = $(teams[i]).text();
        //   console.log("..........................................");
        for (let br = 0; br < batsmenRow.length; br++) {
            let batsmen = $(batsmenRow[br]);
            let batsmenName = batsmen.find(".cell.batsmen").text();
            let batsmenRun = batsmen.find(".cell.runs").html();
            handlePlayer(format, team, batsmenName, batsmenRun);
        }
    }
}

//add player to leaderboard
function handlePlayer(format, team, batsmenName, batsmenRun) {
    batsmenRun = Number(batsmenRun);
    for (let i = 0; i < leaderBoard.length; i++) {
        let pOBj = leaderBoard[i];
        if (pOBj.Name == batsmenName && pOBj.Teams == team && pOBj.Format === format) {
            pOBj.Runs += batsmenRun;
            return;
        }
    }
    let obj={
        Runs:batsmenRun,
        Format:format,
        Teams:team,
        Name:batsmenName
    }
    leaderBoard.push(obj);
}