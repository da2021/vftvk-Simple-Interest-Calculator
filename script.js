    /* Cursera exercises: javascript code to implement the simple interest calculation logic. */
   
    function compute() {

        // variable declarations.
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        // interest variable calculation.
        var interest = principal * years * rate / 100;

        var inputBox = document.getElementById("principal");
        
        // convert the 'No of Years' into the actual year in the future.
        var d = new Date();
        var n = Number(d.getFullYear());
        console.log(n);
        n = n + Number(years);
        console.log(n);
    
        // Process calculation description on element 'result'.
        var strPrincipal = "If you deposit <mark>" + principal + "</mark>,<br>";
        var strRate = "at an interest rate of <mark>" + rate + "%.</mark><br>";
        var strInterest = "You will receive an amount of <mark>" + interest + "</mark>,<br>";
        var strYears = "in the year <mark>" + n + "</mark>.";
        var strResult = strPrincipal.concat(strRate,strInterest,strYears);
        

        // Add validation for "Principal" input box.
        if (inputBox.value > 0 ) {
            rate = inputBox.value;
            document.getElementById("result").innerHTML = strResult;
        } else {
            alert("Enter a positive number");
            inputBox.value = "";
            document.getElementById("result").innerHTML = "";
            // Take the user back to the "Principal" input box, by setting the focus on this box.
            inputBox.focus();
        }
    }
    
    // Functio to display range slider value it the <span> adjacent to the slider.
    function updateSlider(x) {
        document.getElementById("slidervalue").innerHTML = x + "%";
    }
  