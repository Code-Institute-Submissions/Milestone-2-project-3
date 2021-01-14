$(document).ready(function() { 
    $("#review-bubble").mouseenter(function() { 
        $("#review-bubble p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble p").text("Aquitaine, France").css("font-size", "30px");
        }); 
    }); 

    $("#review-bubble").mouseleave(function() { 
        $("#review-bubble p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble p").text("I had just found out that my great grandparents were related to French Royalty so I decided to book a trip to my ancestral homeland (or at least that's what I'm going to tell my friends!").css("font-size", "16px");
        }); 
    }); 

    $("#review-bubble-2").mouseenter(function() { 
        $("#review-bubble-2 p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble-2 p").text("Krakow, Poland").css("font-size", "30px");
        }); 
    }); 

    $("#review-bubble-2").mouseleave(function() { 
        $("#review-bubble-2 p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble-2 p").text("I've been a massive history fan since I learnt about the Battle of Hastings back in school. I managed to have a perfect holiday and learn about something new while I was there!").css("font-size", "16px");
        }); 
    }); 
    
}); 