/**
 * Created by brianaamodt on 5/13/15.
 */
var total
    , current = ""
    , operator;

$(document).ready(function(){

    $('.equal').click(function(){
        $('.screen').empty();
        current = eval(current);
        $('.screen').append(current);
    });

    $('.operator').click(function(){
        $('.screen').empty();
        current += $(this).attr('id');
        $('.screen').append(current);
    });

    $('.num').click(function(){
        $('.screen').empty();
        current += $(this).attr('id');
        $('.screen').append(current);
    });

    $('.clear').click(function(){
        current = "";
        $('.screen').empty();
    });
    //$('.equal').click(function(){
    //    $('.screen').empty();
    //    switch(operator){
    //        case "*":
    //            total *= current;
    //            break;
    //        case "/":
    //            total /= current;
    //            break;
    //        case "+":
    //            total += current;
    //            break;
    //        case "-":
    //            total -= current;
    //            break;
    //    }
    //    $('.screen').append(total);
    //})
    //
    //$('.operator').click(function(){
    //    total = current;
    //    current = '' ;
    //    $('.screen').append(operator);
    //    operator += $(this).attr('id');
    //    $('.screen').append(current);
    //});
    //
    //$('.num').click(function(){
    //    $('.screen').empty();
    //    current += $(this).attr('id');
    //    $('.screen').append(current);
    //
    //});

    //$('.clear').click(function(){
    //    $('.current', ).empty();
    //    $('.total').empty();
    //    current += $(this).attr('id');
    //    $('.screen').append(current);
    //
    //});
});