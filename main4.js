var upcmakeposter = document.getElementsByClassName("upcoming_container")[0];
var webmakeposter = document.getElementsByClassName("poster_container")[2];
var movmakeposter = document.getElementsByClassName("mov-poster_container")[1];

upcmakeposter.classList.add('upc_active');
webmakeposter.classList.add('web-active');
movmakeposter.classList.add('mov-active');






















var scrollDiv = document.getElementsByClassName("movie-cards")[0];

scrollDiv.addEventListener('wheel', function(e) {
  e.preventDefault(); // Prevent default scrolling behavior

  // Adjust the horizontal scroll position based on the scroll wheel delta
  scrollDiv.scrollLeft += e.deltaY;
});








// Add event listeners to navigation arrows
document.querySelector('#upcleft').addEventListener('click', slideLeft);
document.querySelector('#upcright').addEventListener('click', slideRight);

function slideLeft() {

  const activeCard = document.querySelector('.upc_active');
  const previousCard = activeCard.previousElementSibling;
  if (previousCard) {
    activeCard.classList.remove('upc_active');
    previousCard.classList.add('upc_active');
    previousCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  }
};






function slideRight() {
  const activeCard = document.querySelector('.upc_active');
  const nextCard = activeCard.nextElementSibling;
  if (nextCard) {
    activeCard.classList.remove('upc_active');
    nextCard.classList.add('upc_active');
    nextCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  }
};





document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_3 + `</h1>
       <a href="` + web_ban_link_3 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;


var webcounter = 3;

function counerweb(status) {
  // var status;
  if (status === 'Add') {
    console.log("add");
    if (webcounter === 1) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_2 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_2 + `</h1>
       <a href="` + web_ban_link_2 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=2;
    } else if (webcounter === 2) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_3 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_3 + `</h1>
       <a href="` + web_ban_link_3 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=3;
    } else if (webcounter === 3) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_4 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_4 + `</h1>
             <a href="` + web_ban_link_4 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=4;
    } else if (webcounter === 4) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_5 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_5 + `</h1>
             <a href="` + web_ban_link_5 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=5;
    } else if (webcounter === 5) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_6 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_6 + `</h1>
             <a href="` + web_ban_link_6 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=6;
    } else if (webcounter === 6) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_7 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_7 + `</h1>
                   <a href="` + web_ban_link_7 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=7;
    } else if (webcounter === 7) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_8 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_8 + `</h1>
                   <a href="` + web_ban_link_8 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=8;
    } else if (webcounter === 8) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_9 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_9 + `</h1>
                   <a href="` + web_ban_link_9 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=9;
    } else if (webcounter === 9) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_10 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_10 + `</h1>
                   <a href="` + web_ban_link_10 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=10;
    } else if (webcounter === 10) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_11 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_11 + `</h1>
                   <a href="` + web_ban_link_11 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=11;
    } else if (webcounter === 11) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_12 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_12 + `</h1>
                   <a href="` + web_ban_link_12 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=12;
    } else {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_12 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_12 + `</h1>
                   <a href="` + web_ban_link_12 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter = 12;
    }
    console.log(webcounter);



  } else {
    console.log("sub");

    if (webcounter === 1) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_1 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_1 + `</h1>
                   <a href="` + web_ban_link_1 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter = 1;
    } else if (webcounter === 2) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_1 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_1 + `</h1>
                         <a href="` + web_ban_link_2 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;

      webcounter=1;
    } else if (webcounter === 3) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_2 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_2 + `</h1>
                         <a href="` + web_ban_link_2 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=2;
    } else if (webcounter === 4) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_3 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_3 + `</h1>
                         <a href="` + web_ban_link_3 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=3;
    } else if (webcounter === 5) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_4 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_4 + `</h1>
                         <a href="` + web_ban_link_4 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=4;
    } else if (webcounter === 6) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_5 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_5 + `</h1>
                         <a href="` + web_ban_link_5 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=5;
    } else if (webcounter === 7) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_6 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_6 + `</h1>
                         <a href="` + web_ban_link_6 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=6;
    } else if (webcounter === 8) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_7 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_7 + `</h1>
                         <a href="` + web_ban_link_7 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=7;
    } else if (webcounter === 9) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_8 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_8 + `</h1>
                         <a href="` + web_ban_link_8 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=8;
    } else if (webcounter === 10) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_9 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_9 + `</h1>
                         <a href="` + web_ban_link_9 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=9;
    } else if (webcounter === 11) {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_10 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_10 + `</h1>
                         <a href="` + web_ban_link_10 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=10;
    } else {
      document.getElementsByClassName("banner_background")[0].style = "background:url('" + web_ban_back_11 + "');background-size:cover;";
      document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + web_ban_name_11 + `</h1>
                         <a href="` + web_ban_link_11 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
      webcounter=11;
    }
    console.log(webcounter);

  };

};





function slideLeft2() {

  const activeCard = document.querySelector('.web-active');
  const previousCard = activeCard.previousElementSibling;
  if (previousCard) {
    activeCard.classList.remove('web-active');
    previousCard.classList.add('web-active');
    previousCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    setTimeout(function() {
      counerweb('Sub')
    }, 400);

  }

};



function slideRight2() {


  const activeCard = document.querySelector('.web-active');
  const nextCard = activeCard.nextElementSibling;
  if (nextCard) {
    activeCard.classList.remove('web-active');
    nextCard.classList.add('web-active');
    nextCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    setTimeout(function() {
      counerweb('Add')
    }, 400);

  }

};