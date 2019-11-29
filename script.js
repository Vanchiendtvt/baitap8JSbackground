
function startJS(){
    var imgBG = document.createElement('img');
    imgBG.src = 'http://wallarthd.com/wp-content/uploads/2015/10/Cool-Abstract-1920x1080.jpg';
    window.addEventListener('load',function(event){
        var wapperDiv = document.getElementById('wapper');
        wapperDiv.style.visibility = 'visible';
        var loadingP = document.getElementById('loading');
        loadingP.style.opacity = 0;
        loadingP.addEventListener('transitionend', function(){
            loadingP.style.visibility = 'hidden';
            });
        var backgroundImage = document.getElementById('backgroundImg');
        backgroundImage.style.backgroundImage = "url(http://wallarthd.com/wp-content/uploads/2015/10/Cool-Abstract-1920x1080.jpg)";
        backgroundImage.style.opacity = 1;
    });
}
window.addEventListener('DOMContentLoaded',function(event){
    console.log('tai xong html');
    startJS();
})
