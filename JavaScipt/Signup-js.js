!/**
 * Created by User on 4/11/15.
 */
$(document).ready(function(){
    $(function(e){var t={number:["01","02","03","04","05","06","07","08","09","10","11","12"],"short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"long":["January","February","March","April","May","June","July","August","September","October","November","December"]},n=new Date,r=n.getFullYear(),i=n.getMonth()+1,s=n.getDate();generateBirthdayPicker=function(n,s){var o=e("<fieldset class='birthdayPicker'></fieldset>"),u=e("<select class='birthYear "+s.sizeClass+"' name='birth[year]'></select>"),a=e(" <select class='birthMonth "+s.sizeClass+"' name='birth[month]'></select>"),f=e(" <select class='birthDate "+s.sizeClass+"' name='birth[day]'></select>");$birthday=e("<input class='birthDay' name='birthDay' type='hidden'/>");if(s.placeholder){e("<option value='0'>Year</option>").appendTo(u);e("<option value='0'>Month</option>").appendTo(a);e("<option value='0'>Day</option>").appendTo(f)}if(s.dateFormat=="bigEndian"){o.append(u).append(a).append(f)}else if(s.dateFormat=="littleEndian"){o.append(f).append(a).append(u)}else{o.append(a).append(f).append(u)}var l=r-s.minAge;var c=r-s.maxAge;if(s.maxYear!=r&&s.maxYear>r){l=s.maxYear;c=c+(s.maxYear-r)}for(var h=l;h>=c;h--){e("<option></option>").attr("value",h).text(h).appendTo(u)}for(var h=0;h<=11;h++){e("<option></option>").attr("value",h+1).text(t[s.monthFormat][h]).appendTo(a)}for(var h=1;h<=31;h++){var p=h<10?"0"+h:h;e("<option></option>").attr("value",h).text(p).appendTo(f)}if(s.defaultDate){var d=new Date(s.defaultDate);console.log(d);u.val(d.getFullYear());a.val(d.getMonth()+1);f.val(d.getDate())}o.append($birthday);n.append(o);o.on("change",function(){selectedYear=parseInt(u.val(),10),selectedMonth=parseInt(a.val(),10),selectedDay=parseInt(f.val(),10);var n=a.children(":last").val();if(selectedYear>r){if(n>i){while(n>i){a.children(":last").remove();n--}}}else{while(n<12){e("<option></option>").attr("value",parseInt(n)+1).text(t[s.monthFormat][n]).appendTo(a);n++}}var o=f.children(":last").val();var l=(new Date(selectedYear,selectedMonth,0)).getDate();if(o>l){while(o>l){f.children(":last").remove();o--}}else if(o<l){while(o<l){var c=parseInt(o)+1;var h=c<10?"0"+c:c;e("<option></option>").attr("value",c).text(h).appendTo(f);o++}}if(selectedYear*selectedMonth*selectedDay!=0){if(selectedMonth<10)selectedMonth="0"+selectedMonth;if(selectedDay<10)selectedDay="0"+selectedDay;hiddenDate=selectedYear+"-"+selectedMonth+"-"+selectedDay;e(this).find("input[name=birthDay]").val(hiddenDate)}})};e.fn.birthdayPicker=function(t){return this.each(function(){var n=e.extend(e.fn.birthdayPicker.defaults,t);generateBirthdayPicker(e(this),n)})};e.fn.birthdayPicker.defaults={maxAge:100,minAge:0,maxYear:r,dateFormat:"middleEndian",monthFormat:"number",placeholder:true,defaultDate:false,sizeClass:"span2"}}(jQuery))
    $("#default-birthday").birthdayPicker({}); //"defaultDate":"01-03-1980"


//    $('#user-input').val("hellpo") ;
//    console.log($('#user-input').value);
    $("#emailAddress").keyup( function(){
        var emailAddress = $("#emailAddress").val();
//        console.log("hello world!");
        if(isValidEmailAddress(emailAddress)){
        console.log("valid!");
        }
        else if(! isValidEmailAddress(emailAddress)){
        console.log("invalid");
        }
    })
    $('input').keyup(function(){
        if(isFilled()){
//            console.log(isFilled());
            $('button').removeClass('disabled');
        }
        if(($('#first-pass').val().length > 0) && ($('#second-pass').val().length > 0) && ($('#first-pass').val() !== $('#second-pass').val())){
//            $('.test').add
//            $('<p>wrong password!</p>').appendTo('.confirm-pass');
            //inja akharin bar boodi
        }
    });
 });
function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
};
function isFilled(){
            var filled = true ;
            $('input').each(function(){
                    console.log($(this).val());
                    if($(this).val() === ""){
                        filled = false ;
                    };
                });
    return filled;
};
