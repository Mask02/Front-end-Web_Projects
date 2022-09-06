// const numbers = document.querySelectorAll('[data-number]').
var out_sc = document.getElementById("out_sc");
var in_sc = document.getElementsByClassName("input-screen");

var input_value = "";

var result = "";

var is_equal_pressed = false;
var is_operand_pressed = false;

function show(value) {
  if (value == "c") {
    document.getElementsByClassName("input-screen")[0].innerText = "";
    document.getElementById("out_sc").innerHTML = "";

    input_value = "";

    is_equal_pressed = false;
    is_operand_pressed = false;

  } else if (value == "=") {

    result = eval(input_value);

    document.getElementById("out_sc").innerHTML = result;

    input_value = result;

    document.getElementsByClassName("input-screen")[0].innerText = "";

    is_equal_pressed = true;
    is_operand_pressed = false;

  } else {



    if (is_equal_pressed && !isNaN(value)) {

      input_value = value;

      result = "";

      document.getElementById("out_sc").innerHTML = result;
      document.getElementsByClassName("input-screen")[0].innerText = input_value;

      is_equal_pressed = false;

    }else if (!is_operand_pressed || !isNaN(value)){
       
        input_value += value;

        document.getElementsByClassName("input-screen")[0].innerText = input_value;
    
        is_equal_pressed = false;

    }

    if(isNaN(value))
        is_operand_pressed = true;
    else
        is_operand_pressed = false;

  
  }

  
}
