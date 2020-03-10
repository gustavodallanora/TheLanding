	
// Exit intent
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
    localStorage.removeItem('exitboxv2_shown');
}

// Exit intent trigger
addEvent(document, 'mouseout', function(evt) {

    if (evt.toElement == null && evt.relatedTarget == null && !localStorage.getItem('exitboxv2_shown')) {
        $('.lightbox').slideDown();
        localStorage.setItem('exitboxv2_shown', 'true');
    };

});

// Closing the Popup Box
$('a.close').click(function(){
    $('.lightbox').slideUp();
});
