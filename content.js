/**
 * Created by yasksrivastava on 20/02/16.
 */
function start() {
    var url  = window.location.href;
    url = url.replace('https://www.flipkart.com','http://localhost:3000') ;
    window.location = url;
    console.log('working..', url);

}

start();