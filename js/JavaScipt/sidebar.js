/**
 * Created by User on 4/29/15.
 */
$(document).ready(function(){
   $('.follow').click(function(){
       $(this).removeClass('btn-info');
       $(this).addClass('btn-success');
       $(this).text("following");
//       $(this).parent().parent().delay(2000).hide();
//       window.setTimeout($(this).parent().parent().hide(),2000);
       // ba takhir hide nemishe!
//       )
   }) ;
});
