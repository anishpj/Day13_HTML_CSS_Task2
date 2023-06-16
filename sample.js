// function getValue() {
//     var selectedValue = this.value;  
//     console.log(selectedValue); 
    
//   }

//   function getValue() {
//     var dropdown = document.getElementById("myDropdown");
//     var selectedValue = dropdown.value;
//     console.log("Value clicked");  
     
//   }



function getValue() {
    var dropdown = document.getElementById("myDropdown");
    // console.log(selectedVal)
    var selectedValue = dropdown.options[dropdown.selectedIndex].text;
    console.log(selectedValue);  
    document.getElementById("numOfAttn").innerHTML = selectedValue;
   
  }
