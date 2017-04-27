function getAllStyles(element) {
    var stylesMap = element.currentStyle ? element.currentStyle : window.getComputedStyle(element, null);//making it compatible 
    var styles = '';//as a String
    for (var i = 0, len = stylesMap.length; i < len; i++) {
        styles = styles + '"' + stylesMap[i] + '" : ' + '"' + stylesMap.getPropertyValue(stylesMap[i]) + '",'; //making up a String in the form of key:value
    }
    var stylesToJson = ("{" + styles.substring(0,styles.length - 1) + "}").replace(/"en"/g,"en");;//making it to JSON and specially fixing the ""en"" to "en"
    return(JSON.parse(stylesToJson));
}
//--You can use it like--
//getAllStyles(demo).width
//--and it will return like 100px in type of String--
