window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");

    var wiki='https://en.wikipedia.org/w/api.php?action=opensearch&search=%bob&prop=info&format=json&origin=*&inprop=url'





    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        console.log("Saving value", form.elements.ssearchh.value);
        //console.log(wiki)


        var xhr = new XMLHttpRequest();
        xhr.open("GET", wiki, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);






        event.preventDefault();
    });


    // var el = document.getElementById("search");
    // el.addEventListener("click", startsearch, false);
    //
    //
    //
    // function startsearch(event) {
    //      {
    //         console.log("Saving value", form.elements.value.value);
    //         event.preventDefault();

        // var form = document.forms.form; // можно document.forms[0]
        //
        // var elem = form.elements.ssearchh; // можно form.elements[0]
        //
        //
        // console.log(elem.value )








    //
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "/bar/foo.txt", true);
    // xhr.onload = function (e) {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             console.log(xhr.responseText);
    //         } else {
    //             console.error(xhr.statusText);
    //         }
    //     }
    // };
    // xhr.onerror = function (e) {
    //     console.error(xhr.statusText);
    // };
    // xhr.send(null);


});