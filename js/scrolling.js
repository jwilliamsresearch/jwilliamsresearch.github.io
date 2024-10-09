function scrollToElement(element) {
    var getHTML = document.getElementById(element);
    getHTML.scrollIntoView({ behavior: "smooth"});
}