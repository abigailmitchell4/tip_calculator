document.addEventListener("DOMContentLoaded", function() {

  function calculateTip() {
    var billAmt = document.getElementById("bill-amt").value;
    var serviceQual = document.getElementById("service-qual").value;
    var numOfChecks = document.getElementById("num-of-checks").value;
      if (billAmt === '' || serviceQual == 0){
      alert("Please enter bill amount and number of checks");
      return;
    }
      if (numOfChecks === '' || numOfChecks <=1){
      numOfChecks = 1;
    }
    var total = (billAmt * serviceQual)/numOfChecks;
      total = Math.round(total*100)/100;
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    }
  //click to call function
  document.getElementById("calc-button").onclick = function() {
  calculateTip();
  }
})





