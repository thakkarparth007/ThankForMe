var qs = document.querySelectorAll.bind(document);
var SeeMorePostsButtonSelector = "a[href^='/ajax/feed/substories/']";
var BirthdayPostDivSelector = "ul.uiList.uiCollapsedList li>div";

function calcCount() {
    return qs(SeeMorePostsButtonSelector)[0] && 
            +qs(SeeMorePostsButtonSelector)[0].innerText.match(/See (\d+) more posts/)[1];
}

function click() { 
    qs(SeeMorePostsButtonSelector)[0].click(); 
}

function letsDoIt() { 
    var count = calcCount();
    if(!count) {
        console.log("Done");
        return;
    }
    click();
    setTimeout(letsDoIt, 1500);
}

var postids = [];
var list = qs(BirthdayPostDivSelector);

for(var wish in list)
    postids.push( list[wish].dataset.dedup.replace(/^S\:_I/,"").replace(":","_") );

console.log(postids.join(","));
