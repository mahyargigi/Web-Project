/**
 * Created by User on 4/29/15.
 */
$(document).ready(function(){
   $('.follow').click(function(){
       $(this).removeClass('btn-info');
       $(this).addClass('btn-success');
       $(this).text("following");
       $(this).removeClass('follow');
       $(this).addClass('following');
//       $(this).parent().parent().delay(2000).hide();
//       window.setTimeout($(this).parent().parent().hide(),2000);
       // ba takhir hide nemishe!
//       )
   }) ;
//    $('.following').hover(function(){
//        console.log("hover");
//        $(this).removeClass('btn-success');
//        $(this).addClass('btn-danger');
//        $(this).text("Unfollow");
//    });
//    $('.btn-danger').hover(function(){
//
//    });
//
//    $('.btn-danger').click(function(){
//       $(this).removeClass('btn-danger');
//       $(this).addClass('btn-info');
//       $(this).text("follow");
//       $(this).removeClass('following');
//       $(this).addClass('follow');
//    });

});
