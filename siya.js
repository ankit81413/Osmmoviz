redirect=null;
function getAllRedirectLinks() {
    // Get all div elements with class "link"
    var linkDivs = document.querySelectorAll('.link');
    
    var redirectLinks = [];

    // Loop through each link div
    linkDivs.forEach(function(divElement) {
        // Get the onclick attribute value
        var onclickAttributeValue = divElement.getAttribute('onclick');

        // Extract the URL enclosed in single quotes
        var redirectLink = onclickAttributeValue.match(/redirect\('([^']+)'\)/);

        if (redirectLink && redirectLink.length > 1) {
            redirectLinks.push(redirectLink[1]); // Store the link in the array
        }
    });

    return redirectLinks;
}

// Call the function to get an array of all redirect links
var allLinks = getAllRedirectLinks();
console.log(allLinks);

var totalLinks = allLinks.length;

console.log(totalLinks);

linkscode="";

document.getElementsByClassName("movlink")[0].innerHTML="";

for (var i = 0; i < allLinks.length; i++) {
  linkscode='<a class="link" href="https://osmmoviz.github.io/osmmoviz/midsender?mov='+allLinks[i]+'"  target="_blank">Server '+i+'</a>';
  
  document.getElementsByClassName("movlink")[0].innerHTML+=linkscode;


};








//document.getElementsByClassName("wbutton")[0].addEventListener('click', check);


function getImageWidth(className) {
  const imageElement = document.querySelector("." + className);
  if (imageElement) {
    const width = imageElement.width;
    return width;
  } else {
    return null;
  }
}

const posterWidth = getImageWidth("poster");

if (posterWidth>130) {
  console.log("apply");




function getMultiLineHeight(element) {
  const clone = element.cloneNode(true);
  clone.style.width = element.offsetWidth + "px";
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";
  document.body.appendChild(clone);
  const height = clone.offsetHeight;
  document.body.removeChild(clone);
  return height;
}

const h1Element = document.querySelector("h1");
var multiLineHeight = getMultiLineHeight(h1Element);
console.log("Multi-lined height:", multiLineHeight, "pixels");



if (window.innerWidth < 500) {
  
  var ptop=multiLineHeight-30+"px";
  
  var p=document.getElementsByClassName("p")[0];
  p.style.position="relative";
  p.style.top=ptop;
  
};



};




var siya= document.getElementById("siya");
var movname=document.getElementsByClassName("movname")[0].innerText;
console.log(movname.length);
siya.innerHTML=`<a href="https://wa.me/917027522310?text=I%20was%20searching%20for%20the%20movie%20`+movname+`%20but%20the%20movie%20is%20unavailable%20"><img src="https://onedrive.live.com/download?resid=E67DFB46413022F4%21241&authkey=%21AFoSA-8BYxC6nEg&width=320&height=320" alt="Image Not Found??? CLICK ME" height="100px" width="100px"></a>
`;
var kakak=siya.innerHTML;
console.log(kakak);
siya.style.height="100px";
siya.style.width="100px";
siya.style.backgroundColor="none";
siya.style.position="absolute";
siya.style.bottom="200px";
siya.style.left="5px";
siya.style.transition="0.7s";

document.getElementsByClassName("wbutton")[0].addEventListener('click', siyagone);
document.getElementsByClassName("backbtn")[0].addEventListener('click', siyacome);


//document.querySelector('#upcleft').addEventListener('click', slideLeft);

/*function check(){
  var bim=document.getElementById("siya");
  if (bim.style.backgroundColor=="red") {
    bim.style.backgroundColor=="blue"
  } else {
    bim.style.backgroundColor=="red"
  }
};
*/

function siyagone(){
  siya.style.left="-200px";
  
};
function siyacome(){
  setTimeout(function() {
      siya.style.left="5px";
      siya.style.transition="0.7s"
    }, 300);

};

