
            var p1 =  document.querySelector('.div1');
        var p2 = document.querySelector('.div2');
        var p3 =  document.querySelector('.div3');
        var p4 =  document.querySelector('.div4');
        $(".dis1").click(function(){ 
            $(".div1").toggleClass("disdiv");
            $(".dis1").toggleClass("distyle");
            if($(".div2").hasClass("disdiv") && $(".dis2").hasClass("distyle")){
                $(".div2").removeClass("disdiv");
                $(".dis2").removeClass("distyle");
            }
            if($(".div3").hasClass("disdiv") && $(".dis3").hasClass("distyle")){
              $(".div3").removeClass("disdiv");
              $(".dis3").removeClass("distyle");
          }
          if($(".div4").hasClass("disdiv") && $(".dis4").hasClass("distyle")){
            $(".div4").removeClass("disdiv");
            $(".dis4").removeClass("distyle");
        }  
          });
          $(".dis2").click(function(){ 
            $(".div2").toggleClass("disdiv");
            $(".dis2").toggleClass("distyle");
            if($(".div1").hasClass("disdiv") && $(".dis1").hasClass("distyle")){
                $(".div1").removeClass("disdiv");
                $(".dis1").removeClass("distyle");
            }
            if($(".div3").hasClass("disdiv") && $(".dis3").hasClass("distyle")){
              $(".div3").removeClass("disdiv");
              $(".dis3").removeClass("distyle");
          }
          if($(".div4").hasClass("disdiv") && $(".dis4").hasClass("distyle")){
            $(".div4").removeClass("disdiv");
            $(".dis4").removeClass("distyle");
        }  
          });
          $(".dis3").click(function(){ 
            $(".div3").toggleClass("disdiv");
            $(".dis3").toggleClass("distyle");
            if($(".div1").hasClass("disdiv") && $(".dis1").hasClass("distyle")){
                $(".div1").removeClass("disdiv");
                $(".dis1").removeClass("distyle");
            }
            if($(".div2").hasClass("disdiv") && $(".dis2").hasClass("distyle")){
              $(".div2").removeClass("disdiv");
              $(".dis2").removeClass("distyle");
          }
          if($(".div4").hasClass("disdiv") && $(".dis4").hasClass("distyle")){
            $(".div4").removeClass("disdiv");
            $(".dis4").removeClass("distyle");
        }  
          });
          $(".dis4").click(function(){ 
            $(".div4").toggleClass("disdiv");
            $(".dis4").toggleClass("distyle");
            if($(".div2").hasClass("disdiv") && $(".dis2").hasClass("distyle")){
                $(".div2").removeClass("disdiv");
                $(".dis2").removeClass("distyle");
            }
            if($(".div3").hasClass("disdiv") && $(".dis3").hasClass("distyle")){
              $(".div3").removeClass("disdiv");
              $(".dis3").removeClass("distyle");
          }
          if($(".div1").hasClass("disdiv") && $(".dis1").hasClass("distyle")){
            $(".div1").removeClass("disdiv");
            $(".dis1").removeClass("distyle");
        }  
          });



