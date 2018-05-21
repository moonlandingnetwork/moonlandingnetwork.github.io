/* Global Window Width Variable */
let width = window.screen.width;
/* Random TopBanner */
const topBannerElem = document.getElementById('topbanner');
if(topBannerElem != null){
    let bannerData = new XMLHttpRequest();
    bannerData.open('GET', 'topbannerdata.json');
    bannerData.onload = function(){
    if(this.status == 200){
        let bannerDataJSON = JSON.parse(bannerData.responseText);
        bannerDataRandom = bannerDataJSON[Math.floor(Math.random()*bannerDataJSON.length)];
        const topBannerLogo = document.getElementById('topbannerlogo');
        const topBannerContent = document.getElementById('topbannercontent');
        const topBannerLink = document.getElementById('topbannerlink'); 

        topBannerLogo.src= bannerDataRandom.logo
        topBannerContent.innerHTML =  "<span>" + bannerDataRandom.name + "</span>" + " " + bannerDataRandom.desc;
        topBannerLink.href =  bannerDataRandom.website;
    }
    }
bannerData.send();
}
/* Mobile Navbar */
const navMenu = document.getElementById('humbruger-menu');
const navSearch = document.getElementById('nav-search');
const navList = document.querySelector('nav ul');
const navListItem = document.querySelectorAll('nav ul li');
const navSearchBox = document.getElementById('search-container');
const cryptoPrice = document.querySelector('.crypto-price');
navMenu.addEventListener('click', function (){
    if (navSearch.innerHTML == '<i class="far fa-eye-slash"></i>'){
        navSearch.innerHTML = '<i class="fas fa-search"></i>';
        cryptoPrice.classList.remove('hidden');
        navList.classList.remove('flex');
        for(i=0; i<navListItem.length; i++){
            navListItem[i].style.display="flex";
            }
        navSearchBox.style.display = 'none';
    }
    if(navMenu.innerHTML == '<i class="fas fa-bars"></i>'){
        navMenu.innerText = 'X';
        navList.classList.add('flex');
    } else if (navMenu.innerText == 'X'){
        navMenu.innerHTML = '<i class="fas fa-bars"></i>';
        navList.classList.remove('flex');
    }
    for(i=0; i<navListItem.length; i++){
    navListItem[i].style.display="flex";
    }
    navSearchBox.style.display = 'none';
    
});
navSearch.addEventListener('click', function(){
    if (navMenu.innerText == 'X'){
        navMenu.innerHTML = '<i class="fas fa-bars"></i>';
        navList.classList.remove('flex');
    }
    if(navSearch.innerHTML == '<i class="fas fa-search"></i>'){
        navSearch.innerHTML = '<i class="far fa-eye-slash"></i>';
        cryptoPrice.classList.add('hidden');
        navList.classList.add('flex');
        for(i=0; i<navListItem.length; i++){
            navListItem[i].style.display="none";
            }
        navSearchBox.style.display = 'flex';
    } else if (navSearch.innerHTML == '<i class="far fa-eye-slash"></i>'){
        navSearch.innerHTML = '<i class="fas fa-search"></i>';
        cryptoPrice.classList.remove('hidden');
        navList.classList.remove('flex');
        for(i=0; i<navListItem.length; i++){
            navListItem[i].style.display="flex";
            }
        navSearchBox.style.display = 'none';
    }

});
/* Split & Wrap Logo Element inside span */
const logo = document.querySelectorAll('.logo');
for(let i=0; i<logo.length; i++){
  let logoString = logo[i];
  let logoStringText = logo[i].textContent.split(' ');
  logoString.innerHTML = logoStringText[0] +"<span>" + logoStringText[1] + "<span>";
}
/* Telegeram Chat */
const telegramChatToggle = document.getElementById('telegram-chat-toggle');
if(telegramChatToggle != null ){
const telegramChat = document.getElementById('telegram-chat');
const telegramBrodcast = document.getElementById('telegram-broadcast');

telegramChatToggle.addEventListener('click', () =>{
  telegramChat.classList.toggle('hidden');  
  telegramBrodcast.classList.toggle('hidden');     
});
}
/* Modal Toggle */
const body = document.querySelector('body');
const modalClose = document.getElementsByClassName('modal-close');
const modalDisclaimer = document.getElementById('disclaimer-modal');
const modalDisclaimerToggle = document.getElementById('disclaimer-modal-toggle');
const modalSubscribeToggle = document.getElementById('subscribe-modal-toggle');
if(modalSubscribeToggle != null){
document.addEventListener("DOMContentLoaded", function(event) {
    modalSubscribeToggle.addEventListener('click', () => {
        require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us18.list-manage.com","uuid":"2ce60cfaa1d59af941dc65248","lid":"93c42b0c4d"}) })
      document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    });
});
}
if(modalDisclaimerToggle != null){
modalDisclaimerToggle.addEventListener('click', () => {
    body.classList.add('modal-open');
    modalDisclaimer.style.display = 'flex';
});
}
if(modalClose != null){
    for(var i=0; i<modalClose.length; i++){
        modalClose[i].addEventListener('click', () => {
            body.classList.remove('modal-open');
            modalDisclaimer.style.display = 'none';
        });
    }
}
/* CoinmarketCap API Data For Live BTC / ETH */
let cmcBtc = new XMLHttpRequest();
cmcBtc.open('GET', 'https://api.coinmarketcap.com/v1/ticker/bitcoin/');
cmcBtc.onload = function(){
    if(this.status == 200){
        let cmcBtcData = JSON.parse(cmcBtc.responseText);
        let btcLive = document.querySelector('#btc-live-value');
        let btcChange = document.querySelector('#btc-live-change');
        btcLive.textContent = '$ ' + cmcBtcData[0].price_usd;
        if(cmcBtcData[0].percent_change_24h>0){
            btcChange.textContent = '+' + cmcBtcData[0].percent_change_24h;
        } else {
            btcChange.textContent = cmcBtcData[0].percent_change_24h;
        }
    
    }
}
cmcBtc.send();

let cmcEth = new XMLHttpRequest();
cmcEth.open('GET', 'https://api.coinmarketcap.com/v1/ticker/ethereum/');
cmcEth.onload = function(){
    if(this.status == 200){
        let cmcEthData = JSON.parse(cmcEth.responseText);
        let ethLive = document.querySelector('#eth-live-value');
        let ethChange = document.querySelector('#eth-live-change');
        ethLive.textContent = '$ ' + cmcEthData[0].price_usd;
        if(cmcEthData[0].percent_change_24h>0){
            ethChange.textContent = '+' + cmcEthData[0].percent_change_24h;
        } else {
            ethChange.textContent = cmcEthData[0].percent_change_24h;
        }
    }
}
cmcEth.send();
/* End  CoinmarketCap API Data For Live BTC / ETH */
/* Homepage ICO Grid Tabs */
if(width <= 690){
    const icoGridTabs = document.querySelectorAll('.ico-grid-tab');
    if(icoGridTabs != null){
       icoGridTabs.forEach((tab) => {
          tab.addEventListener('click', (e) =>{
              icoGridTabs.forEach((tab) => tab.classList.remove('active'));
              tab.classList.add('active');
              let tabId = e.target.dataset.id;
              const activeIcoCol = document.getElementById(`ico-col-${(tabId)}`);
              const icoColAll = document.querySelectorAll('.ico-col');
              icoColAll.forEach((col) =>{
                  col.classList.remove('active');
              });
              activeIcoCol.classList.add('active');
          });
       });
    }
}
/* ICO Nav Mobile Humburger Menu */
if(width <= 690){
let icoNav = document.querySelector('.ico-nav li.active');
if(icoNav != null){
    let icoNavList = document.querySelectorAll('.ico-nav li');
    icoNavList.forEach((item) => {
        if(!item.classList.contains('active')){
        item.classList.add('hidden');
        }
    });
    icoNav.addEventListener('click', ()=>{
        icoNavList.forEach((item) => {
            if(!item.classList.contains('active')){
            item.classList.toggle('hidden');
            }
        });
    });
}
}

/*  Dynamically Set Rating Background based on Number */

/*  Home Page */
let ratingStarts = document.querySelectorAll('.ico-card-rating.number');

if(ratingStarts != null){
    ratingStarts.forEach( function (star){
        if(star.textContent <= 3){
            star.classList.add('low');
        } else if(star.textContent <= 6){
            star.classList.add('medium');
        } else if(star.textContent <= 10){
            star.classList.add('high');
        }

    });
}
/*  Full List */
let ratingNumber = document.querySelectorAll('.ico-moonability.number');
if(ratingNumber != null){
    ratingNumber.forEach(function (number){
        if(number.textContent <= 3){
            number.classList.add('red');
        } else if(number.textContent <= 6){
            number.classList.add('yellow');
        } else if(number.textContent <= 10){
            number.classList.add('green');
        }
    });
}
/*  Dynamically Set Date Background based on Number */
let dateButton = document.querySelectorAll('.ico-ends-in button');
let dateButtonValue = document.querySelectorAll('.ico-date-value');
if(dateButton && dateButtonValue != null){
    dateButton.forEach(function(date, i){
        if(dateButtonValue[i].textContent <= 2){
            date.classList.add('red');
        } else if(dateButtonValue[i].textContent <= 5){
            date.classList.add('yellow');
        } else if(dateButtonValue[i].textContent >= 6){
            date.classList.add('green');
        } else if(dateButtonValue[i].textContent == 'Today'){
            date.classList.add('red');
        }
        
    });
}
/* Dynamically set Whitelist Status Button Color */
const whitelistStatus = document.querySelectorAll('.whitelist-status');
if(whitelistStatus != null){
    whitelistStatus.forEach((button) => {
        if(button.textContent == 'Soon'){
            button.classList.add('yellow');
        } else if(button.textContent == 'Open'){
            button.classList.add('green');
        } else if(button.textContent == 'Closed'){
            button.classList.add('red');
        }
    });
}
/* ICO Inner Page Coinmeter Dynamic Value */
const coinMeterNeedle = document.getElementById('coinmeter-needle');
if(coinMeterNeedle != null){
    const coinMeter = document.querySelector('.coinmeter-rating');
    const coinMeterContent = coinMeter.textContent;
    var coinMeterValue = parseFloat(coinMeterContent, 10);
    const coinMeterDegree = 30 + (coinMeterValue*30);
    coinMeterNeedle.style.transform = `rotate(${coinMeterDegree}deg)`;
}

/* ICO Inner Page Progress Bar Dynamic Color */
const icoProgressBar = document.getElementById('coin-progress-hr');
if(icoProgressBar != null){
    const icoProgressPercentageElem = document.getElementById('ico-coin-percentage');
    icoProgressPercentage = icoProgressPercentageElem.textContent;
    icoProgressBar.style.background = 'linear-gradient(90deg, #3EADB4, #45F4CE ' + icoProgressPercentage + ', darkgray 0%)';
    const icoProgressBaloon = document.getElementById('coin-progress-baloon');
    icoProgressBaloon.style.left = 'calc('+icoProgressPercentage+' - 16.5px)';

}
/* ICO Inner Page Coin Progress Element Word Split */
let text = document.getElementById("coin-page-card-status");
if(text != null){
let string = text.textContent;
text.innerHTML = "";
string.split("");
let i = 0, length = string.length;
for (i; i < length; i++) {
    if(string[i] == " "){
        text.innerHTML +=  "&nbsp;" ;
    }
    else{
        text.innerHTML += "<span>" + string[i] + "</span>";
    }
    
}
}
/* End ICO Inner Page Coin Progress Element Word Split */

/* Hide Crypto Price on Coin Detail Page */
const coinHeader = document.querySelector('.ico-page-header');
if(coinHeader != null ){
    const cryptoPrice = document.querySelector('.crypto-price');
    cryptoPrice.classList.add('hidden-mobile');
}

/* Javascript Countdown Timer */
const Doom=function(b){function e(){var a,d=new Date,c=d.getTime()/1E3;a=parseInt(c/3600)%24;var b=parseInt(c/60)%60,c=Math.floor(c%60),d=[d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");a=[a,b,c].join(":");a=[d,a].join(" ");a=k(a);c=a<f?f-a:a-f;a=isNaN(c)?NaN:{secsPart:g(Math.floor(c/1E3%60)),minsPart:g(Math.floor(c/6E4%60)),hoursPart:g(Math.floor(c/36E5%24)),daysPart:g(Math.floor(c/864E5))};b=[l,m,n,p];d=["days","hours","mins","secs"];1E3>c&&(q||clearInterval(r),h||(s(),h=!0));for(c=0;c<b.length;c++){var e= document.getElementById(b[c]);null!==e&&(e.innerHTML=a[d[c]+"Part"])}}function g(a){return t?1===a.toString().length?"0"+a:a:a}function k(a){return new Date(Date.parse(a))}function v(a){var b;a?(b=a.charAt(0),a=a.substring(1).split(":"),a=3600*+a[0]+60*+a[1],a=-Math.abs(60*date.getTimezoneOffset())+eval(b+a),b=a/3600,a=Math.abs(a/60%60),b=[b,a].join(":")):b=null;return b}var t,s,q,f,u,l,m,n,p,r,h;(function(){var a=b.targetDate||null,d=b.targetTime||"00:00:00";u=v(b.utcOffset||null);l=b.ids?b.ids.days|| "days":"days";m=b.ids?b.ids.hours||"hours":"hours";n=b.ids?b.ids.mins||"mins":"mins";p=b.ids?b.ids.secs||"secs":"secs";t=!1===b.addZero?!1:!0;s=b.callback||function(){};q=b.biDirectional||!1;f=k([a,d,u].join(" "));h=!1})();return{doom:function(){e();r=setInterval(e,1E3)}}};
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1; //January is 0!
const yyyy = today.getFullYear();
const todayFormatted = mm+'/'+dd+'/'+yyyy;
let counterDate = document.getElementById('counter-date');
if(counterDate != null){
    counterDate = counterDate.dateTime;
    let d = new Date(0);
    d.setUTCSeconds(counterDate);
    let counterDateFormatted = (d.getMonth() + 1) + "/" +  d.getDate() + "/" +  d.getFullYear();
    let counter = Doom({
        targetDate: counterDateFormatted
      })
      counter.doom();

}

/* End Javascript Countdown Timer */

/* CoinmarketCap API Data For Coin Detail */
let coin = document.getElementById('coin-name');
if(coin != null){
coin = coin.textContent;
coin = coin.replace(/\s+/g, '-').toLowerCase();
let cmcRequest = new XMLHttpRequest();
let cmcGetUrl = 'https://api.coinmarketcap.com/v1/ticker/'+coin+'/?convert=ETH';
cmcRequest.open('GET', cmcGetUrl);
cmcRequest.onload = function(){
    if(this.status == 200){
    let cmcData = JSON.parse(cmcRequest.responseText);
    let icoUsdPrice = document.querySelector('#ico-usd-price');
    let icoEthPrice = document.querySelector('#ico-eth-price');
    let icoBtcPrice = document.querySelector('#ico-btc-price');
    let returnsUsd = document.querySelector('#returns-usd');
    let returnsEth = document.querySelector('#returns-eth');
    let returnsBtc = document.querySelector('#returns-btc');
    let usdLive = document.querySelector('#coin-usd-live');
    let ethLive = document.querySelector('#coin-eth-live');
    let btcLive = document.querySelector('#coin-btc-live'); 
    let dailyVolume = document.querySelector('#daily-volume');
    let marketCap = document.querySelector('#market-cap');
    
    let usdReturn = cmcData[0].price_usd/icoUsdPrice.textContent + '';
    let ethReturn = cmcData[0].price_eth/icoEthPrice.textContent + '';
    let btcReturn = cmcData[0].price_btc/icoBtcPrice.textContent + '';


    returnsUsd.textContent = usdReturn.substring(0,4)+'x';
    returnsEth.textContent = ethReturn.substring(0,4)+'x';
    returnsBtc.textContent = btcReturn.substring(0,4)+'x';
    usdLive.textContent = cmcData[0].price_usd + ' $';
    ethLive.textContent = cmcData[0].price_eth + ' ETH';
    btcLive.textContent = cmcData[0].price_btc + ' BTC';
    dailyVolume.textContent =  cmcData[0]['24h_volume_usd'] + ' $';
    marketCap.textContent = cmcData[0].market_cap_usd + ' $';

    
    }
    else if(this.status == 404){
        let returnsCard = document.getElementById('coin-returns');
        returnsCard.classList.add('hidden');
    }
}
cmcRequest.send();
}
/* Nested Flexbox Layout Break */
if(width <= 690){
    const flexColFirst = document.querySelector('#card-col-1');
    const flexColSecond = document.querySelector('#card-col-2');
    const flexParent = document.querySelector('#card-col-parent');
    if(flexParent != null){
    while (flexColFirst.firstChild) flexParent.insertBefore(flexColFirst.firstChild, flexColFirst);
    while (flexColSecond.firstChild) flexParent.insertBefore(flexColSecond.firstChild, flexColSecond);
    flexParent.removeChild(flexColFirst);
    flexParent.removeChild(flexColSecond);
    }
}

/* Twitter Iframe Styling  */
if(width >= 991){
waitForElementToDisplay('#twitter-widget-0',5000);
function waitForElementToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
        let twitterFrame = document.getElementById('twitter-widget-0');
        if(twitterFrame.parentElement.className != 'twitter-box'){
        let twitterFrameContent = twitterFrame.contentDocument || twitterFrame.contentWindow.document;
        let inner_tf = twitterFrameContent.getElementsByClassName('timeline-TweetList');
        inner_tf[0].style.padding = '1.5rem';
        let inner_tf_text = twitterFrameContent.getElementsByClassName('timeline-Tweet-text');
        for(i=0; i<inner_tf_text.length;i++){
            inner_tf_text[i].style.fontSize = '13px';
        }
        let head_tf = twitterFrameContent.querySelector('head');
        head_tf.querySelector('style').innerText += '::-webkit-scrollbar { width: 15px; } ::-webkit-scrollbar-track {  border-radius: 0; background: #4d6382;} ::-webkit-scrollbar-thumb { border-radius: 15px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); background: #1a2541; height: 5rem;}'; 
        }
        return;
        
    }
    else {
        setTimeout(function() {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}
}

/* Format Numbers and add comma separtors */
var noToFormatArray = document.querySelectorAll('.formatted-no');
if(noToFormatArray != null){
    noToFormatArray.forEach((item) =>{
        let numberToFormat = parseInt(item.textContent);
        item.textContent = numberToFormat.toLocaleString();
    });
}
