require("chromedriver")
let swd = require("selenium-webdriver")

//browser build
let bldr = new swd.Builder()

let credentialsFile = process.argv[2];

//tab
let driver = bldr.forBrowser("chrome").build()
//tab
// let googlePageIsOpenedPromise =driver.get("https://www.pepcoding.com/login")
// googlePageIsOpenedPromise.then(function(){
//     console.log("Pepcoding Login Page will be Opened")
// })
// googlePageIsOpenedPromise.catch(function(err){
//     console.log(err)
// })
let fs = require("fs")
let username, password;
let credentialsWillBeSelectedPromise = fs.promises.readFile(credentialsFile)
credentialsWillBeSelectedPromise.then(function (credentials) {
    credentials = JSON.parse(credentials);
    username = credentials.username
    password = credentials.password
    let google = driver.get("https://www.pepcoding.com/login")
    return google
}).then(function () {
    console.log("starting")
    let EmailWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=email]"))
    return EmailWillBeSelectedPromise
}).then(function (emailElement) {
    let promise = emailElement.sendKeys(username)
    return promise;
}).then(function (forpass) {
    let PasswordWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=password]"))
    return PasswordWillBeSelectedPromise
}).then(function (forpass) {
    // console.log(password)
    let pass = forpass.sendKeys(password)
    return pass;
}).then(function () {
    let submitWillBeSelectedPromise = driver.findElement(swd.By.css("button[type=submit]"))
    return submitWillBeSelectedPromise
}).then(function (btn) {
    btn.click()
}).catch(function (err) {
    console.log(err)
})