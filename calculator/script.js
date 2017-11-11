$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(0,9));
        } 
    };
	var number = "";
    var oldnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		oldnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			oldnumber = "";
		}
    });
    $("#equals").click(function(){
        var result;
        number = parseInt(number);
        oldnumber = parseInt(oldnumber);
        if(operator == "+"){
            result = number + oldnumber;
        }else if(operator === "-"){
            result = oldnumber - number;
        }else if(operator === "/"){
            result = oldnumber / number;
        }else if(operator === "*"){
            result = number * oldnumber;
        }else if(operator === ""){
            result = oldnumber;
        }
        
        totaldiv.text(result.toString());
        testNumLength(result.toString());
        number = "";
        oldnumber = "";
    });
    
});