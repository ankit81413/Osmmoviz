//.  handling movie scroller



var movscroll = 3;
var movpstr1 = document.getElementsByClassName("mov-poster_container")[0];
var movpstr2 = document.getElementsByClassName("mov-poster_container")[1];
var movpstr3 = document.getElementsByClassName("mov-poster_container")[2];
var movpstr4 = document.getElementsByClassName("mov-poster_container")[3];
var movpstr5 = document.getElementsByClassName("mov-poster_container")[4];
var movpstr6 = document.getElementsByClassName("mov-poster_container")[5];
var movpstr7 = document.getElementsByClassName("mov-poster_container")[6];
var movpstr8 = document.getElementsByClassName("mov-poster_container")[7];
var movpstr9 = document.getElementsByClassName("mov-poster_container")[8];
var movpstr10 = document.getElementsByClassName("mov-poster_container")[9];
var movpstr11 = document.getElementsByClassName("mov-poster_container")[10];
var movpstr12 = document.getElementsByClassName("mov-poster_container")[11];







function Upmovclick(up_down) {

  if (window.innerWidth <= 700) {


    var up_down;
    if (up_down === "down") {



      if (movscroll === 1) {

        movscroll = 2;

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-58px";
        }

        $(movpstr1).addClass('mov-active');
        $(movpstr12).removeClass('mov-active');
        back_changer(1);

      }


      else if (movscroll === 2) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-58px";
        }


        $(movpstr2).addClass('mov-active');
        $(movpstr1).removeClass('mov-active');
        back_changer(2);
        // document.getElementsByClassName('arrow-top')[0].style.color = "white";

        movscroll = 3;
      } else if (movscroll === 3) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-122px";
        }

        $(movpstr3).addClass('mov-active');
        $(movpstr2).removeClass('mov-active');
        back_changer(3);
        movscroll = 4;
      } else if (movscroll === 4) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-186px";
        }

        $(movpstr4).addClass('mov-active');
        $(movpstr3).removeClass('mov-active');
        movscroll = 5;
        back_changer(4);
      } else if (movscroll === 5) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-252px";
        }

        $(movpstr5).addClass('mov-active');
        $(movpstr4).removeClass('mov-active');
        movscroll = 6;
        back_changer(5);
      } else if (movscroll === 6) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-314px";
        }

        $(movpstr6).addClass('mov-active');
        $(movpstr5).removeClass('mov-active');
        movscroll = 7;
        back_changer(6);
      } else if (movscroll === 7) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-377px";
        }

        $(movpstr7).addClass('mov-active');
        $(movpstr6).removeClass('mov-active');
        back_changer(7);
        movscroll = 8;
      } else if (movscroll === 8) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-442px";
        }

        $(movpstr8).addClass('mov-active');
        $(movpstr7).removeClass('mov-active');
        back_changer(8);
        movscroll = 9;
      } else if (movscroll === 9) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-505px";
        }

        $(movpstr9).addClass('mov-active');
        $(movpstr8).removeClass('mov-active');
        back_changer(9);
        movscroll = 10;
      } else if (movscroll === 10) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-574px";
        }

        $(movpstr10).addClass('mov-active');
        $(movpstr9).removeClass('mov-active');
        back_changer(10);
        movscroll = 11;
      } else if (movscroll === 11) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-640px";
        }

        $(movpstr11).addClass('mov-active');
        $(movpstr10).removeClass('mov-active');
        back_changer(11);
        movscroll = 12;
      } else if (movscroll === 12) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-640px";
        }

        $(movpstr12).addClass('mov-active');
        $(movpstr11).removeClass('mov-active');
        back_changer(12);
        movscroll = 1;
      }







    } else if (up_down === "up") {




      if (movscroll === 1) {

        movscroll = 12;

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-640px";
        }

        $(movpstr11).addClass('mov-active');
        $(movpstr12).removeClass('mov-active');
        back_changer(11);


      }


      else if (movscroll === 2) {



        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-640px";
        }


        $(movpstr12).addClass('mov-active');
        $(movpstr1).removeClass('mov-active');
        back_changer(12);


        movscroll = 1;
      } else if (movscroll === 3) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-58px";
        }

        $(movpstr1).addClass('mov-active');
        $(movpstr2).removeClass('mov-active');
        back_changer(1);




        movscroll = 2;
      } else if (movscroll === 4) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-58px";
        }

        $(movpstr2).addClass('mov-active');
        $(movpstr3).removeClass('mov-active');
        back_changer(2);
        movscroll = 3;
      } else if (movscroll === 5) {

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-122px";
        }

        $(movpstr3).addClass('mov-active');
        $(movpstr4).removeClass('mov-active');
        back_changer(3);
        movscroll = 4;
      } else if (movscroll === 6) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-186px";
        }

        $(movpstr4).addClass('mov-active');
        $(movpstr5).removeClass('mov-active');
        back_changer(4);
        movscroll = 5;
      } else if (movscroll === 7) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-252px";
        }

        $(movpstr5).addClass('mov-active');
        $(movpstr6).removeClass('mov-active');
        back_changer(5);
        movscroll = 6;
      } else if (movscroll === 8) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-314px";
        }

        $(movpstr6).addClass('mov-active');
        $(movpstr7).removeClass('mov-active');
        back_changer(6);
        movscroll = 7;
      } else if (movscroll === 9) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-377px";
        }

        $(movpstr7).addClass('mov-active');
        $(movpstr8).removeClass('mov-active');
        back_changer(7);
        movscroll = 8;
      } else if (movscroll === 10) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-442px";
        }

        $(movpstr8).addClass('mov-active');
        $(movpstr9).removeClass('mov-active');
        back_changer(8);
        movscroll = 9;
      } else if (movscroll === 11) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-502px";
        }

        $(movpstr9).addClass('mov-active');
        $(movpstr10).removeClass('mov-active');
        back_changer(9);
        movscroll = 10;
      } else if (movscroll === 12) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-574px";
        }

        $(movpstr10).addClass('mov-active');
        $(movpstr11).removeClass('mov-active');


        back_changer(10);
        movscroll = 11;
      }



    };



    if (movscroll === 2) {
      document.getElementsByClassName('arrow-up')[0].style.color = "rgba(225,225,225,.50)";
    } else {
      document.getElementsByClassName('arrow-up')[0].style.color = "white";
    };

    if (movscroll === 1) {
      document.getElementsByClassName('arrow-down')[0].style.color = "rgba(225,225,225,.50)";
    } else {
      document.getElementsByClassName('arrow-down')[0].style.color = "white";
    };






    // marked
    /*
    
    if (movscroll===1) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + + "');background-size:cover;";
    } else if (movscroll===2) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===3) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    } else if (movscroll===4) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===5) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===6) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    } else if (movscroll===7) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===8) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===9) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    } else if (movscroll===10) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===11) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===12) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    };
    
    */





  } else if (window.innerWidth > 700 && window.innerWidth < 1440) {
    console.log("bigger");
    var up_down;
    if (up_down === "down") {



      if (movscroll === 1) {

        movscroll = 2;

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-110px";
        }

        $(movpstr1).addClass('mov-active');
        $(movpstr12).removeClass('mov-active');
        back_changer(1);

      }


      else if (movscroll === 2) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-110px";
        }


        $(movpstr2).addClass('mov-active');
        $(movpstr1).removeClass('mov-active');
        back_changer(2);
        // document.getElementsByClassName('arrow-top')[0].style.color = "white";

        movscroll = 3;
      } else if (movscroll === 3) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-280px";
        }

        $(movpstr3).addClass('mov-active');
        $(movpstr2).removeClass('mov-active');
        back_changer(3);
        movscroll = 4;
      } else if (movscroll === 4) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-450px";
        }

        $(movpstr4).addClass('mov-active');
        $(movpstr3).removeClass('mov-active');
        back_changer(4);
        movscroll = 5;
      } else if (movscroll === 5) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-625px";
        }

        $(movpstr5).addClass('mov-active');
        $(movpstr4).removeClass('mov-active');
        back_changer(5);
        movscroll = 6;
      } else if (movscroll === 6) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-797px";
        }

        $(movpstr6).addClass('mov-active');
        $(movpstr5).removeClass('mov-active');
        back_changer(6);
        movscroll = 7;
      } else if (movscroll === 7) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-970px";
        }

        $(movpstr7).addClass('mov-active');
        $(movpstr6).removeClass('mov-active');
        back_changer(7);
        movscroll = 8;
      } else if (movscroll === 8) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1143px";
        }

        $(movpstr8).addClass('mov-active');
        $(movpstr7).removeClass('mov-active');
        back_changer(8);
        movscroll = 9;
      } else if (movscroll === 9) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1315px";
        }

        $(movpstr9).addClass('mov-active');
        $(movpstr8).removeClass('mov-active');
        back_changer(9);
        movscroll = 10;
      } else if (movscroll === 10) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1490px";
        }

        $(movpstr10).addClass('mov-active');
        $(movpstr9).removeClass('mov-active');
        back_changer(10);
        movscroll = 11;
      } else if (movscroll === 11) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1665px";
        }

        $(movpstr11).addClass('mov-active');
        $(movpstr10).removeClass('mov-active');
        back_changer(11);
        movscroll = 12;
      } else if (movscroll === 12) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1680px";
        }

        $(movpstr12).addClass('mov-active');
        $(movpstr11).removeClass('mov-active');
        back_changer(12);
        movscroll = 1;
      }







    } else if (up_down === "up") {




      if (movscroll === 1) {

        movscroll = 12;

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1665px";
        }

        $(movpstr11).addClass('mov-active');
        $(movpstr12).removeClass('mov-active');
        back_changer(11);


      }


      else if (movscroll === 2) {



        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1680px";
        }


        $(movpstr12).addClass('mov-active');
        $(movpstr1).removeClass('mov-active');
        back_changer(12);


        movscroll = 1;
      } else if (movscroll === 3) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-110px";
        }

        $(movpstr1).addClass('mov-active');
        $(movpstr2).removeClass('mov-active');
        back_changer(1);




        movscroll = 2;
      } else if (movscroll === 4) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-110px";
        }

        $(movpstr2).addClass('mov-active');
        $(movpstr3).removeClass('mov-active');
        back_changer(2);
        movscroll = 3;
      } else if (movscroll === 5) {

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-280px";
        }

        $(movpstr3).addClass('mov-active');
        $(movpstr4).removeClass('mov-active');
        back_changer(3);
        movscroll = 4;
      } else if (movscroll === 6) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-450px";
        }

        $(movpstr4).addClass('mov-active');
        $(movpstr5).removeClass('mov-active');
        back_changer(4);
        movscroll = 5;
      } else if (movscroll === 7) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-625px";
        }

        $(movpstr5).addClass('mov-active');
        $(movpstr6).removeClass('mov-active');
        back_changer(5);
        movscroll = 6;
      } else if (movscroll === 8) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-797px";
        }

        $(movpstr6).addClass('mov-active');
        $(movpstr7).removeClass('mov-active');
        back_changer(6);
        movscroll = 7;
      } else if (movscroll === 9) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-970px";
        }

        $(movpstr7).addClass('mov-active');
        $(movpstr8).removeClass('mov-active');
        back_changer(7);
        movscroll = 8;
      } else if (movscroll === 10) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1143px";
        }

        $(movpstr8).addClass('mov-active');
        $(movpstr9).removeClass('mov-active');
        back_changer(8);
        movscroll = 9;
      } else if (movscroll === 11) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1315px";
        }

        $(movpstr9).addClass('mov-active');
        $(movpstr10).removeClass('mov-active');
        back_changer(9);
        movscroll = 10;
      } else if (movscroll === 12) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-px";
        }

        $(movpstr10).addClass('mov-active');
        $(movpstr11).removeClass('mov-active');
        back_changer(10);


        movscroll = 11;
      }



    };



    if (movscroll === 2) {
      document.getElementsByClassName('arrow-up')[0].style.color = "rgba(225,225,225,.50)";
    } else {
      document.getElementsByClassName('arrow-up')[0].style.color = "white";
    };

    if (movscroll === 1) {
      document.getElementsByClassName('arrow-down')[0].style.color = "rgba(225,225,225,.50)";
    } else {
      document.getElementsByClassName('arrow-down')[0].style.color = "white";
    };






    // marked 

    /*
    if (movscroll===1) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===2) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===3) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    } else if (movscroll===4) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===5) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===6) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    } else if (movscroll===7) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===8) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===9) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    } else if (movscroll===10) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/HD-wallpaper-rrr-movie-rrr.jpg');background-size:cover;";
    } else if (movscroll===11) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/images/IMG_20230509_223312_215.jpg');background-size:cover;";
    } else if (movscroll===12) {
      document.getElementsByClassName("banner_background")[0].style="background:url('/avengersinfinitywar_lob_mas_hlf_01_3.jpg');background-size:cover;";
    };
    
    */




  } else {
    console.log("biggest");
    var up_down;
    if (up_down === "down") {



      if (movscroll === 1) {

        movscroll = 2;

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-160px";
        }

        $(movpstr1).addClass('mov-active');
        $(movpstr12).removeClass('mov-active');
back_changer(1);

      }


      else if (movscroll === 2) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-160px";
        }


        $(movpstr2).addClass('mov-active');
        $(movpstr1).removeClass('mov-active');
        back_changer(2);
        // document.getElementsByClassName('arrow-top')[0].style.color = "white";

        movscroll = 3;
      } else if (movscroll === 3) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-345px";
        }

        $(movpstr3).addClass('mov-active');
        $(movpstr2).removeClass('mov-active');
        back_changer(3);
        movscroll = 4;
      } else if (movscroll === 4) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-530px";
        }

        $(movpstr4).addClass('mov-active');
        $(movpstr3).removeClass('mov-active');
        back_changer(4);
        movscroll = 5;
      } else if (movscroll === 5) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-715px";
        }

        $(movpstr5).addClass('mov-active');
        $(movpstr4).removeClass('mov-active');
        back_changer(5);
        movscroll = 6;
      } else if (movscroll === 6) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-904px";
        }

        $(movpstr6).addClass('mov-active');
        $(movpstr5).removeClass('mov-active');
        back_changer(6);
        movscroll = 7;
      } else if (movscroll === 7) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1088px";
        }

        $(movpstr7).addClass('mov-active');
        $(movpstr6).removeClass('mov-active');
        back_changer(7);
        
        movscroll = 8;
      } else if (movscroll === 8) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1274px";
        }

        $(movpstr8).addClass('mov-active');
        $(movpstr7).removeClass('mov-active');
        back_changer(8);
        movscroll = 9;
      } else if (movscroll === 9) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1460px";
        }

        $(movpstr9).addClass('mov-active');
        $(movpstr8).removeClass('mov-active');
        back_changer(9);
        movscroll = 10;
      } else if (movscroll === 10) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1646px";
        }

        $(movpstr10).addClass('mov-active');
        $(movpstr9).removeClass('mov-active');
        back_changer(10);
        movscroll = 11;
      } else if (movscroll === 11) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1830px";
        }

        $(movpstr11).addClass('mov-active');
        $(movpstr10).removeClass('mov-active');
        back_changer(11);
        movscroll = 12;
      } else if (movscroll === 12) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1830px";
        }

        $(movpstr12).addClass('mov-active');
        $(movpstr11).removeClass('mov-active');
        back_changer(12);
        movscroll = 1;
      }







    } else if (up_down === "up") {




      if (movscroll === 1) {

        movscroll = 12;

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1830px";
        }

        $(movpstr11).addClass('mov-active');
        $(movpstr12).removeClass('mov-active');
        back_changer(11);



      }


      else if (movscroll === 2) {



        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1830px";
        }


        $(movpstr12).addClass('mov-active');
        $(movpstr1).removeClass('mov-active');
        back_changer(12);



        movscroll = 1;
      } else if (movscroll === 3) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-160px";
        }

        $(movpstr1).addClass('mov-active');
        $(movpstr2).removeClass('mov-active');
        back_changer(1);





        movscroll = 2;
      } else if (movscroll === 4) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-160px";
        }

        $(movpstr2).addClass('mov-active');
        $(movpstr3).removeClass('mov-active');
        back_changer(2);
        movscroll = 3;
      } else if (movscroll === 5) {

        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-345px";
        }

        $(movpstr3).addClass('mov-active');
        $(movpstr4).removeClass('mov-active');
        back_changer(3);
        movscroll = 4;
      } else if (movscroll === 6) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-530px";
        }

        $(movpstr4).addClass('mov-active');
        $(movpstr5).removeClass('mov-active');
        back_changer(4);
        movscroll = 5;
      } else if (movscroll === 7) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-715px";
        }

        $(movpstr5).addClass('mov-active');
        $(movpstr6).removeClass('mov-active');
        back_changer(5);
        movscroll = 6;
      } else if (movscroll === 8) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-904px";
        }

        $(movpstr6).addClass('mov-active');
        $(movpstr7).removeClass('mov-active');
        back_changer(6);
        movscroll = 7;
      } else if (movscroll === 9) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1088px";
        }

        $(movpstr7).addClass('mov-active');
        $(movpstr8).removeClass('mov-active');
        back_changer(7);
        movscroll = 8;
      } else if (movscroll === 10) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1274px";
        }

        $(movpstr8).addClass('mov-active');
        $(movpstr9).removeClass('mov-active');
        back_changer(8);
        movscroll = 9;
      } else if (movscroll === 11) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1460px";
        }

        $(movpstr9).addClass('mov-active');
        $(movpstr10).removeClass('mov-active');
        back_changer(9);
        movscroll = 10;
      } else if (movscroll === 12) {


        for (let i = 0; i < 12; i++) {

          document.getElementsByClassName("mov-poster_container")[i].style.top = "-1646px";
        }

        $(movpstr10).addClass('mov-active');
        $(movpstr11).removeClass('mov-active');
        back_changer(10);



        movscroll = 11;
      }



    };



    if (movscroll === 2) {
      document.getElementsByClassName('arrow-up')[0].style.color = "rgba(225,225,225,.50)";
    } else {
      document.getElementsByClassName('arrow-up')[0].style.color = "white";
    };

    if (movscroll === 1) {
      document.getElementsByClassName('arrow-down')[0].style.color = "rgba(225,225,225,.50)";
    } else {
      document.getElementsByClassName('arrow-down')[0].style.color = "white";
    };






    // marked


    /*
    if (movscroll===1) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===2) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===3) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===4) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===5) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===6) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===7) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===8) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===9) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===10) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===11) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    } else if (movscroll===12) {
      document.getElementsByClassName("banner_background")[0].style="background:url('" + mov_ban_name_1 + "');background-size:cover;";
    };
    
    
    */

  }



};







function back_changer(movnum) {

  var movnum;
  if (movnum === 1) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_1 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_1 + `</h1>
                         <a href="` + mov_ban_link_1 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 2) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_2 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_2 + `</h1>
                         <a href="` + mov_ban_link_2 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 3) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_3 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_3 + `</h1>
                         <a href="` + mov_ban_link_3 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 4) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_4 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_4 + `</h1>
                         <a href="` + mov_ban_link_4 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 5) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_5 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_5 + `</h1>
                         <a href="` + mov_ban_link_5 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 6) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_6 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_6 + `</h1>
                         <a href="` + mov_ban_link_6 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 7) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_7 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_7 + `</h1>
                         <a href="` + mov_ban_link_7 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 8) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_8 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_8 + `</h1>
                         <a href="` + mov_ban_link_8 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 9) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_9 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_9 + `</h1>
                         <a href="` + mov_ban_link_9 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 10) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_10 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_10 + `</h1>
                         <a href="` + mov_ban_link_10 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 11) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_11 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_11 + `</h1>
                         <a href="` + mov_ban_link_11 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  } else if (movnum === 12) {
    document.getElementsByClassName("banner_background")[0].style = "background:url('" + mov_ban_back_12 + "');background-size:cover;";
    document.getElementsByClassName("banner_mov_name")[0].innerHTML = `<h1 id="banner_mov_name_h1">` + mov_ban_name_12 + `</h1>
                         <a href="` + mov_ban_link_12 + `" id="banner_mov_name_a"><i class="fa-solid fa-circle-play"></i>Watch</a>`;
  };

};