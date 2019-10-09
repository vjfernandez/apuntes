let referrer = document.referrer;

if (referrer != null && referrer != "") {
    var body = document.querySelector("body");
    var enlace = document.createElement("a");
    enlace.innerHTML="&nbsp;↩&nbsp;"
    enlace.href = referrer;
    enlace.id="retornar";
    body.appendChild(enlace);
    loadCss("returnbutton.css");
}

function loadCss(sheet) {
    if(document.createStyleSheet) {
        document.createStyleSheet(sheet);
    } else {
        var styles = "@import url('"+sheet+"');";
        var newSS=document.createElement('link');
        newSS.rel='stylesheet';
        newSS.href='data:text/css,'+escape(styles);
        document.getElementsByTagName("head")[0].appendChild(newSS);
      }
}
