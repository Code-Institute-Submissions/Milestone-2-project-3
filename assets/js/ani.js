$(document).ready(function() { 
    $("#review-bubble").click(function() { 
        $("#review-bubble p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble p").text("Aquitaine, France").css("font-size", "30px");
        }); 
    }); 

    $("#review-bubble").mouseleave(function() { 
        $("#review-bubble p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble p").text("'I had just found out that my great grandparents were related to French Royalty so I decided to book a trip to my ancestral homeland (or at least that's what I'm going to tell my friends!'").css("font-size", "14px");
        }); 
    }); 

    $("#review-bubble-2").click(function() { 
        $("#review-bubble-2 p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble-2 p").text("Krakow, Poland").css("font-size", "30px");
        }); 
    }); 

    $("#review-bubble-2").mouseleave(function() { 
        $("#review-bubble-2 p").slideToggle("slow", 
                function callback() { 
            $("#review-bubble-2 p").text("'I've been a massive history fan since I learnt about the Battle of Hastings back in school. I managed to have a perfect holiday and learn about something new while I was there!'").css("font-size", "14px");
        }); 
    }); 

    $("#bern-button").click(function(){
        $("#info-head-toggle-west").html("BERN"), $("#info-p-toggle-west").html("Bern traces its origins back to the 12th century, with medieval architecture preserved in the Altstadt (Old Town). The Swiss Parliament and diplomats meet in the Neo-Renaissance Bundeshaus (Federal Palace). The Französische Kirche (French Church) and the nearby medieval tower known as the Zytglogge both date to the 13th century.");
    });
    $("#bern-button").click(function(){
        $("#poi-one-west").html("The city was ravaged by a fire back in 1405 with the medieval wooden homes destroyed, and the Old Town as you see it today with its replacement sandstone buildings, remains largely as it has since the early 15th century."), $("#poi-two-west").html("The 12th-century clock tower stands tall in Marktgasse at the Western City Gate, in the Old Town. The tower houses a beautiful astronomical clock, constructed in 1530 and considered to be one of the oldest in Switzerland. The Zytglogge also boasts the largest clock face in Switzerland.");
    });
    $("#bern-button").click(function(){
        $("#poi-three-west").html("Bern has three resident brown bears living in the purpose-built Bern Bear Park (Bärengraben) near the Old Town – just across the River Aare. If you are visiting Bern with children, they’ll love watching the bears at play."), $("#poi-four-west").html("If you’re interested in politics, you will enjoy a visit to Bundeshaus, the Swiss Federal Assembly. Built during the 19th century, the imposing Neo-Renaissance building draws the eye with its green domed roof and 300-metre-long facade.");
    });
    $("#bern-button").click(function(){
        $("#image-one-west").attr("src","assets/images/bernbear.jpg"), $("#image-two-west").attr("src","assets/images/berntownnight.jpg"), $("#image-three-west").attr("src","assets/images/bernclocktower.jpg");
    });

    $("#annecy-button").click(function(){
        $("#info-head-toggle-west").html("ANNECY"), $("#info-p-toggle-west").html("Annecy is an alpine town in southeastern France, where Lake Annecy feeds into the Thiou River. It’s known for its Vieille Ville (old town), with cobbled streets, winding canals and pastel-colored houses. Overlooking the city, the medieval Château d’Annecy, once home to the Counts of Geneva, contains a museum with regional artifacts such as religious art.");
    });
    $("#annecy-button").click(function(){
        $("#poi-one-west").html("Dubbed the “Venice of the Alps”, the winding cobblestone streets of the Vieille Ville, or old town, are lined by pastel houses and bright flower boxes that will make you fall in love with this small French town. Stop for a croissant at a boulangerie, or sit and have ice cream at one of the town’s many gelaterias and spend the afternoon admiring the architecture."), $("#poi-two-west").html("With its turreted facade looking like the prow of a ship, the Palais de l’Île splits the river Thiou into two canals. Now a local history museum, it was built in the 12th century and was at one time a prison, mint, courthouse and lord’s residence.");
    });
    $("#annecy-button").click(function(){
        $("#poi-three-west").html("Annecy has many Catholic churches worth visiting, where you’ll find beautiful stained-glass windows, impressive grand organs and Medieval paintings. If history is your thing, take the time to explore the old churches dotted around Annecy’s old town."), $("#poi-four-west").html("Annecy has various markets on throughout the week selling an array of fresh foods and market wares. The Sunday Annecy market is one of the finest markets in France, with its colourful stalls lining the old town’s streets and canals.");
    });
    $("#annecy-button").click(function(){
        $("#image-one-west").attr("src","assets/images/annecycastle.jpg"), $("#image-two-west").attr("src","assets/images/annecylake.jpg"), $("#image-three-west").attr("src","assets/images/annecytown.jpg");
    });
    $("#krakow-button").click(function(){
        $("#info-head-toggle-east").html("KRAKOW"), $("#info-p-toggle-east").html("Kraków, a southern Poland city near the border of the Czech Republic, is known for its well-preserved medieval core and Jewish quarter. Its old town – ringed by Planty Park and remnants of the city’s medieval walls – is centered on the stately, expansive Rynek Glówny (market square). This plaza is the site of the Cloth Hall, a Renaissance-era trading outpost, and St. Mary’s Basilica, a 14th-century Gothic church.");
    });
    $("#krakow-button").click(function(){
        $("#poi-one-east").html("The Wawel Royal Castle is one of Krakow top attractions, which is impressive both from the outside and from the inside. Inside you will find 71 exhibition halls holding thousands of valuable exhibits including numerous paintings, famous tapestries, furniture, military collections as well as archaeological findings which were found on Wawel Hill."), $("#poi-two-east").html("The Main Market Square is one of the must-see places to visit in Krakow, especially since St. Mary's Church is just one of the many attractions you will find there. It is also worth visiting the underground multimedia exhibition which teaches the history of Krakow.");
    });
    $("#krakow-button").click(function(){
        $("#poi-three-east").html("The history buff will be delighted to visit the museum inside Oskar Schindler’s factory. You can visit Schindler’s preserved office and learn more about his heroism than you ever would from the Spielberg movie."), $("#poi-four-east").html("At the Auschwitz-Birkenau Museum, visitors can see many authentic items. There are over 150 buildings and about 300 ruins of the former concentration camp. Also, the  fences, ramps and roads are original objects.");
    });

    $("#krakow-button").click(function(){
        $("#image-one-east").attr("src","assets/images/krakowmound.jpg"), $("#image-two-east").attr("src","assets/images/krakowhead.jpg"), $("#image-three-east").attr("src","assets/images/krakowtown.jpg");
    });

    $("#tblisi-button").click(function(){
        $("#info-head-toggle-east").html("TBLISI"), $("#info-p-toggle-east").html("Tblisi is the capital of the country of Georgia. Its cobblestoned old town reflects a long, complicated history, with periods under Persian and Russian rule. Its diverse architecture encompasses Eastern Orthodox churches, ornate art nouveau buildings and Soviet Modernist structures. Looming over it all are Narikala, a reconstructed 4th-century fortress, and Kartlis Deda, an iconic statue of the “Mother of Georgia.");
    });
    $("#tblisi-button").click(function(){
        $("#poi-one-east").html("Perched on the banks of the Mtkvari River against a striking mountainous backdrop, Tbilisi is one of the world’s oldest settlements: archaeologists have found evidence of human habitation dating back to 4,000 BC."), $("#poi-two-east").html("The thermal waters bubbling below Tbilisi have played a vital role in the city’s history. Legend has it that King Vakhtang Gorgasal chose the site for the city after his hunting falcon returned with a pheasant that had been poached in its waters.");
    });
    $("#tblisi-button").click(function(){
        $("#poi-three-east").html("Where to begin with museums? There are well over 15 within the city. Start with the classics: The Georgian National Museum, the Georgia Museum of Art and the Tbilisi History Museum will help paint a picture of the city and the country's fascinating past."), $("#poi-four-east").html("If you want to dig deeper, head to the Tbilisi Open Air Museum of Ethnography, home to countless artefacts important to Georgian folk culture. For arty types, Moma and the Silk Museum are two design-and-textile focused attractions worth visiting. Last but not least, explore the niche worlds of puppets and Soviet cars at the Tbilisi Puppet Museum and Tbilisi AutoMuseum.");
    });

    $("#tblisi-button").click(function(){
        $("#image-one-east").attr("src","assets/images/tblisistatue.jpg"), $("#image-two-east").attr("src","assets/images/tblisitown.jpg"), $("#image-three-east").attr("src","assets/images/tblisichurch.jpg");
    });
}); 