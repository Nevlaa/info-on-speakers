"use strict"; 
$(document).ready(function () {
    //applies to all aside > nav > ul > li > a
    $("aside > nav > ul > li > a").click(function () {
        //fill this array with parts of json file path. please note, with json file location change, you will change it.
        var pathparts = [];
        pathparts.push(
          "json_files/",
          $(this).attr('title'),
          ".json"
          
        );
        consumeJSON(pathparts.join(""));
    });
    //anchor with title toobin
    $("a[title='toobin']").click();
}); // end ready

function consumeJSON(jsonFileURL) {
    $.ajax({
        url: jsonFileURL,
        //default method is GET so need not mention
        dataType: "text", // you may pass json here and avoid parseJSON below
        success: function (data) {

            //data downloaded so we call parseJSON function 
            //and pass downloaded data
            var json = $.parseJSON(data);
            //use html() instead of text() below, note that input has html tags too. see the json also to observe these tags.
            //each json has single element under speakers collection
            // important : we could also prepare whole html and set html inside main element
            $("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
            $("main > h1").html(json.speakers[0].title);
            $("main > img").attr("src", json.speakers[0].image);
            $("main > p").html(json.speakers[0].text);
        }
    });
}