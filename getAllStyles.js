function getAllStyles(element) {
    var stylesMap = element.currentStyle ? element.currentStyle : window.getComputedStyle(element, null);
    var styles = "";
    for (var i = 0, len = stylesMap.length; i < len; i++) {
        styles = styles + stylesMap[i] + ":" + stylesMap.getPropertyValue(stylesMap[i]) + "<br>";
    }
    return styles;
}
//will return like 
//...
//width:100px
//...
//height:100px
//...
