setInterval (
window.onload = function random (){
    var videos = document.getElementsByClassName("video"); //this an array
    // console.log(videos);

    var topPos = Array.from({length: videos.length}, () => Math.floor(1+Math.random() * 1000));
    var leftPos = Array.from({length: videos.length}, () => Math.floor(1+Math.random() * 1000));

    var i
    for (i = 0; i < videos.length; i++){
        var currVid = videos[i];
        console.log(currVid);
        var cT = topPos[i] + "px";
        var cL = leftPos[i] + "px";
        currVid.style.width=cT;
        currVid.style.height=cL;
    }

    var links = document.getElementsByClassName("link");
    console.log("links:",links)
    var j

    for (j = 0; j < links.length; j++){
        var currlink = links[i];
        var cT = topPos[i] + "px";
        var cL = leftPos[i] + "px";
        currlink.style.top=cT;
        currlink.style.left=cL;
    }


}

,10000)

console.log("hello");

