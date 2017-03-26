function getAllStyles(element) {
    var stylesMap = element.currentStyle ? element.currentStyle : window.getComputedStyle(element, null);
    var styles = "";
    for (var i = 0, len = stylesMap.length; i < len; i++) {
        styles = styles + stylesMap[i] + ":" + stylesMap.getPropertyValue(stylesMap[i]) + "<br>";
    }
    console.log(styles);
    return styles;
}