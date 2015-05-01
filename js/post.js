/**
 * Created by User on 5/1/15.
 */
$(document).ready(function(){
    expandTextarea('textarea');
});
function expandTextarea(id) {
        console.log("hii");
    var $element = $('textarea').get(0);

    $element.addEventListener('keyup', function() {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}