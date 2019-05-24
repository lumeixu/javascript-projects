var $ = function(id) {
    return document.getElementById(id);
};

var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
	var entry = $("cents").value;         // get user entry
    var cents = parseInt(entry); 
    
    if(cents>99 || cents<0){
        $("quarters").value = 0;
        $("dimes").value = 0;
	   $("nickels").value = 0;
	   $("pennies").value = 0;
        alert("Amount of change due is invalid");
    }
    else{
          // parse entry
        makeChange(cents);
	   $("cents").focus();
        
    }
  
};

var makeChange = function(cents) {
    

	var quarters = parseInt(cents / 25);  // get number of quarters

    cents=cents-quarters*25;

	var dimes = parseInt(cents / 10);                        // get number of dimes
   

    
    cents=cents-dimes*10; 
	var nickels =parseInt( cents / 5);                      // get number of nickels

    cents=cents-nickels*5;

    var pennies = cents;     

	
	// display the results of the calculations
	$("quarters").value = quarters;
	$("dimes").value = dimes;
	$("nickels").value = nickels;
	$("pennies").value = pennies;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
	$("cents").focus();
};
