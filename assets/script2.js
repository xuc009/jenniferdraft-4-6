var j = 0;
document.addEventListener("click", myFunction);
  var videoArray = new Array (
        "https://www.youtube.com/embed/d21xcBix5ks?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/3jesBT-xp1A?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/1ZEHAvpAy7U?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/pB1pV8zRVaw?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/NWBqCSgj1TA?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/gjwofYhUJEM?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/LVyMZZ7QX70?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/r1jng79a5xc?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/1tShSZRHINc?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/d21xcBix5ks?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/UoOZsOcfqEQ?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/HMjFKn5Uie0?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/HMjFKn5Uie0?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/et4_4tWaomM?&modestbranding=1&rel=1&autoplay=1",
        "https://www.youtube.com/embed/Iic43MhtM64?&modestbranding=1&rel=1&autoplay=1",
        ""
    );
function myFunction() {
var height = Math.floor(1+Math.random() * 1000);
var videoString = `<iframe class="selectedvideo" width="560" height=${height}px src="${videoArray[j]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  document.getElementById("videocontainer").insertAdjacentHTML('afterbegin', videoString);
  j++;
}