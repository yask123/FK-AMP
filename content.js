/**
 * Created by yasksrivastava on 20/02/16.
 */
function start() {
    var url  = window.location.href;
    url = url.replace('https://www.flipkart.com','https://cdn.ampproject.org/c/peaceful-peak-42190.herokuapp.com') ;
    window.location = url;
    console.log('working..', url);

}

start();