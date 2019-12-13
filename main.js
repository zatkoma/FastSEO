
searchGoogle = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.google.com/search?q=" + query});
};

searchSeznam = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://search.seznam.cz/?q=" + query});
};

searchGoogleTrends = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://trends.google.com/trends/explore?geo=CZ&q=" + query});
};

siteGoogleSearch = function(word){
    var query = word.selectionText;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://www.google.com/search?q=site:"+domain+" "+ query});
    });

};

siteSeznamSearch = function(word){

    var query = word.selectionText;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://search.seznam.cz/?q=site:"+domain+" "+ query});
    });

};

siteGoogle = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://www.google.com/search?q=site:"+domain});
    });

};

siteSeznam = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://search.seznam.cz/?q=site:"+domain});
    });

};

urlGoogle = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);

        chrome.tabs.create({url: "https://www.google.com/search?q=inurl:"+url});
    });
};

urlSeznam = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);

        chrome.tabs.create({url: "https://search.seznam.cz/?q="+url});
    });
};

urlGSC = function(word){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;
        var protocol = url.protocol;


        chrome.tabs.create({url: "https://search.google.com/search-console/performance/search-analytics?resource_id="+protocol+"//"+domain});
    });


};

urlGSCKeyword = function(word){

    var query = word.selectionText;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;
        var protocol = url.protocol;


        chrome.tabs.create({url: "https://search.google.com/search-console/performance/search-analytics?resource_id="+protocol+"//"+domain+"&query=!"+query});
    });

};

urlGSCURL = function(word){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;
        var protocol = url.protocol;


        chrome.tabs.create({url: "https://search.google.com/search-console/performance/search-analytics?resource_id="+protocol+"//"+domain+"&breakdown=page&page=!"+tab.url});
    });

};


function mmdomainProfiler(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://www.marketingminer.com/cs/profiler/domain/"+domain+"/cs_CZ"});
    });
}

mmkeywordProfiler = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.marketingminer.com/cs/profiler/keyword/" + query + "/cs_CZ"});
};

mmkeywordMiner = function(){
    chrome.tabs.create({url: "https://www.marketingminer.com/cs/wizard/keyword"});
};

mmurlMiner = function(){
    chrome.tabs.create({url: "https://www.marketingminer.com/cs/wizard/url"});
};

mmdomainMiner = function(){
    chrome.tabs.create({url: "https://www.marketingminer.com/cs/wizard/domain"});
};

mmopen = function(){

    chrome.tabs.create({url: "https://www.marketingminer.com/cs"});
};


function seznam_ready(){

    seznam_create();
    seznam_destroy();

}
// <000> - Začátek funkcí
function aktualizujmenu(){

    chrome.contextMenus.removeAll();
    seznam_ready();
    utility_ready();
    // marketingminer_ready();
    ahrefs_ready();

}


function seznam_destroy(){

    chrome.contextMenus.remove("20", function () {});

    chrome.contextMenus.remove("40", function () {});

    chrome.contextMenus.remove("120", function () {});

    chrome.contextMenus.remove("150", function () {});

    chrome.contextMenus.remove("160", function () {});

}

function seznam_create(){

    chrome.contextMenus.create({
        title: "Check URL Indexation in Google",
        id: "140",
        contexts:["all"],
        onclick: urlGoogle
    });

    chrome.contextMenus.create({
        title: "Search site:domain in Google",
        id: "110",
        contexts:["all"],
        onclick: siteGoogle
    });

    chrome.contextMenus.create({
        title: "site:domain in Seznam",
        id: "120",
        contexts:["all"],
        onclick: siteSeznam
    });

    chrome.contextMenus.create({
        title: "--------------------------",
        id: "130",
        contexts:["all"],
        enabled: false
    });

    chrome.contextMenus.create({
        title: "Search \"%s\" in Google",
        id: "10",
        contexts:["selection"],
        onclick: searchGoogle
    });

    chrome.contextMenus.create({
        title: "Search \"%s\" in Google Trends",
        id: "50",
        contexts:["selection"],
        onclick: searchGoogleTrends
    });

    chrome.contextMenus.create({
        title: "\"%s\" in Seznam",
        id: "20",
        contexts: ["selection"],
        onclick: searchSeznam
    });

    chrome.contextMenus.create({
        title: "Search site:domain \"%s\" in Google",
        id: "30",
        contexts:["selection"],
        onclick: siteGoogleSearch
    });

    chrome.contextMenus.create({
        title: "site:domain %s in Seznam",
        id: "40",
        contexts:["selection"],
        onclick: siteSeznamSearch
    });


    chrome.contextMenus.create({
        title: "--------------------------",
        id: "60",
        contexts:["selection"],
        enabled: false
    });

    chrome.contextMenus.create({
        title: "Open GSC for this domain",
        id: "70",
        contexts:["all"],
        onclick: urlGSC
    });

    chrome.contextMenus.create({
        title: "Find \"%s\" in GSC performance report",
        id: "80",
        contexts:["selection"],
        onclick: urlGSCKeyword
    });

    chrome.contextMenus.create({
        title: "Find URL in GSC performance report",
        id: "90",
        contexts:["all"],
        onclick: urlGSCURL
    });


    // chrome.contextMenus.create({
    //     title: "--------------------------",
    //     id: "100",
    //     contexts:["selection"],
    //     enabled: false
    // });


    chrome.contextMenus.create({
        title: "Indexation in Seznam",
        id: "150",
        contexts:["all"],
        onclick: urlSeznam
    });

}


urlStructuredData = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);

        chrome.tabs.create({url: "https://search.google.com/structured-data/testing-tool/u/0/#url="+url});
    });
};

urlPageSpeed = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);

        chrome.tabs.create({url: "https://developers.google.com/speed/pagespeed/insights/?url=" + url});
    });
};

urlMobileFriendly = function(word){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);

        chrome.tabs.create({url: "https://search.google.com/test/mobile-friendly?url=" + url});
    });
};

urlDupliciteTest = function(word){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;


        chrome.tabs.create({url: "http://www.siteliner.com/"+domain});
    });


};

domainBuiltWith = function(word){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;


        chrome.tabs.create({url: "https://builtwith.com/"+domain});
    });


};

domainObservatory = function(word){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;


        chrome.tabs.create({url: "https://observatory.mozilla.org/analyze/"+domain});
    });


};

urlGTMetrix = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);


        chrome.tabs.create({url: "https://gtmetrix.com/"}, function(tab){

            var c="var s = document.createElement('script');\
                s.textContent = \"document.getElementsByClassName('js-analyze-form-url')[0].setAttribute('value', '"+url+"');\";\
                document.head.appendChild(s);";
            chrome.tabs.executeScript(tab.id, {code:c});

            var d="var s = document.createElement('script');\
                s.textContent = \"document.getElementsByTagName('button')[1].click();\";\
                document.head.appendChild(s);";

            chrome.tabs.executeScript(tab.id, {code:d});

        });


    });


};

function utility_create(){

    chrome.contextMenus.create({
        title: "--------------------------",
        id: "1000",
        contexts:["all"],
        enabled: false
    });


    chrome.contextMenus.create({
        title: "Structured data test",
        id: "1102",
        contexts:["all"],
        onclick: urlStructuredData
    });

    chrome.contextMenus.create({
        title: "Page speed test",
        id: "1200",
        contexts:["all"],
        onclick: urlPageSpeed
    });

    chrome.contextMenus.create({
        title: "Mobile friendly test",
        id: "1301",
        contexts:["all"],
        onclick: urlMobileFriendly
    });

    chrome.contextMenus.create({
        title: "Duplicite content test",
        id: "1400",
        contexts:["all"],
        onclick: urlDupliciteTest
    });

    chrome.contextMenus.create({
        title: "Builtwith test",
        id: "1500",
        contexts:["all"],
        onclick: domainBuiltWith
    });


    chrome.contextMenus.create({
        title: "Observatory mozila test",
        id: "1600",
        contexts:["all"],
        onclick: domainObservatory
    });

    chrome.contextMenus.create({
        title: "GTmetrix test",
        id: "1700",
        contexts:["all"],
        onclick: urlGTMetrix
    });

    chrome.contextMenus.create({
        title: "--------------------------",
        id: "1990",
        contexts:["all"],
        enabled: false
    });

}

function utility_ready(){
    chrome.storage.sync.get(["utility"], function(result) {
        if(result.utility === true){

            utility_create();

        }
    });
}


AHopen = function(){

    chrome.tabs.create({url: "https://ahrefs.com/dashboard"});

};

AHdashboard = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://ahrefs.com/site-explorer/overview/v2/subdomains/live?target="+domain});
    });

};

AHpagesbyorganic = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://ahrefs.com/positions-explorer/top-pages/v2/subdomains/cz/all/all/all/all/all/all/all/1/traffic_desc?target="+domain});
    });

};

AHpagesbylinks = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://ahrefs.com/site-explorer/overview/top-pages-backlinks/v3/subdomains/live/external/all/all/1/ahrefs_rank_desc?target="+domain});
    });

};

AHanchors = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://ahrefs.com/site-explorer/backlinks/v2/anchors/subdomains/live/phrases/all/1/refdomains_dofollow_desc?target="+domain});
    });

};

AHnewlinks = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://ahrefs.com/site-explorer/backlinks/v7/external-similar-links/subdomains/live/all/all/all/1/ahrefs_rank_desc?target="+domain});
    });

};

AHbrokenlinks = function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        var url = new URL(tab.url);
        var domain = url.hostname;

        chrome.tabs.create({url: "https://ahrefs.com/site-explorer/others/v2/broken-links/subdomains/live/all/1/ahrefs_rank_desc?target="+domain});
    });

};



function ahrefs_create(){

    chrome.contextMenus.create({
        title: "Ahrefs",
        id: "1305",
        contexts:["all"],
        onclick: AHopen
    });

    chrome.contextMenus.create({
        title: "Domain dashboard",
        id: "1310",
        contexts:["all"],
        onclick: AHdashboard
    });

    chrome.contextMenus.create({
        title: "Top pages by organic",
        id: "1320",
        contexts:["all"],
        onclick: AHpagesbyorganic
    });

    chrome.contextMenus.create({
        title: "Top pages by links",
        id: "1330",
        contexts:["all"],
        onclick: AHpagesbylinks
    });

    chrome.contextMenus.create({
        title: "Anchors",
        id: "1340",
        contexts:["all"],
        onclick: AHanchors
    });

    chrome.contextMenus.create({
        title: "Backlinks",
        id: "1350",
        contexts:["all"],
        onclick: AHnewlinks
    });

    chrome.contextMenus.create({
        title: "Broken links",
        id: "1350",
        contexts:["all"],
        onclick: AHbrokenlinks
    });

    chrome.contextMenus.create({
        title: "--------------------------",
        id: "1360",
        contexts:["all"],
        enabled: false
    });
}

function ahrefs_destroy(){


    chrome.contextMenus.remove("1300", function () {});

    chrome.contextMenus.remove("1305", function () {});

    chrome.contextMenus.remove("1310", function () {});

    chrome.contextMenus.remove("1320", function () {});

    chrome.contextMenus.remove("1330", function () {});

    chrome.contextMenus.remove("1340", function () {});

    chrome.contextMenus.remove("1350", function () {});

    chrome.contextMenus.remove("1360", function () {});

}

function ahrefs_ready(){
    chrome.storage.sync.get(["ahrefs","marketingminer"], function(result) {
        if(result.ahrefs === true){

            ahrefs_create();

            if(result.marketingminer === true){
                chrome.contextMenus.remove("1300", function () {});
            }

        }
    });
}



function marketingminer_create(){

    chrome.contextMenus.create({
        title: "Marketing Miner",
        id: "1105",
        contexts:["all"],
        onclick: mmopen
    });

    chrome.contextMenus.create({
        title: "Domain profiler",
        id: "1110",
        contexts:["all"],
        onclick: mmdomainProfiler
    });

    chrome.contextMenus.create({
        title: "Keyword profiler",
        id: "1120",
        contexts:["all"],
        onclick: mmkeywordProfiler
    });

    chrome.contextMenus.create({
        title: "New keyword miner",
        id: "1130",
        contexts:["all"],
        onclick: mmkeywordMiner
    });

    chrome.contextMenus.create({
        title: "New URL miner",
        id: "1140",
        contexts:["all"],
        onclick: mmurlMiner
    });

    chrome.contextMenus.create({
        title: "New domain miner",
        id: "1150",
        contexts:["all"],
        onclick: mmdomainMiner
    });

    chrome.contextMenus.create({
        title: "--------------------------",
        id: "1160",
        contexts:["all"],
        enabled: false
    });
}

function marketingminer_destroy(){


    chrome.contextMenus.remove("1100", function () {});

    chrome.contextMenus.remove("1105", function () {});

    chrome.contextMenus.remove("1110", function () {});

    chrome.contextMenus.remove("1120", function () {});

    chrome.contextMenus.remove("1130", function () {});

    chrome.contextMenus.remove("1140", function () {});

    chrome.contextMenus.remove("1150", function () {});

    chrome.contextMenus.remove("1160", function () {});

}

function marketingminer_ready(){
    chrome.storage.sync.get(["marketingminer"], function(result) {
        if(result.marketingminer === true){

            marketingminer_create();

        }
    });
}

// <010> - Konec funkcí


// Zákkladní nastavení proměnných:
chrome.storage.sync.get(["seznam","marketingminer","collabim","collabim_account","ahrefs","majestic","utility"], function(result) {

    // První inicializace
    if(result.seznam == null && result.marketingminer == null && result.collabim == null && result.ahrefs == null && result.majestic == null && result.utility == null){
        chrome.storage.sync.set({"seznam": true}, function() {});
        result.seznam = true;

        chrome.storage.sync.set({"marketingminer": false}, function() {});
        result.marketingminer = false;

        chrome.storage.sync.set({"collabim": false}, function() {});
        result.collabim = false;

        chrome.storage.sync.set({"ahrefs": false}, function() {});
        result.ahrefs = false;

        chrome.storage.sync.set({"majestic": false}, function() {});
        result.majestic = false;

        chrome.storage.sync.set({"utility": true}, function() {});
        result.utility = true;
    }

    // Úvodní inicializace menu:
    //aktualizujmenu();

});


seznam_ready();
utility_create();
// marketingminer_create();
ahrefs_create();


chrome.runtime.onInstalled.addListener(function (details) {
    chrome.tabs.create({url: "https://www.zatkovic.cz/rychleseo-chrome-plugin/"});
});





