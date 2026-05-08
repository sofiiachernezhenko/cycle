const InputName = document.getElementById("Name");
const InputSurname = document.getElementById("Surname");
const InputDOB = document.getElementById("DOB");
const InputTlf = document.getElementById("Tlf");
const InputTerms = document.getElementById("Terms"); //creating constants with objects using id from html

function submitForm() {
  if (
    InputName.value === "" ||
    InputSurname.value === "" ||
    InputDOB.value === "" ||
    InputTlf.value === "" ||
    InputTerms.checked === false //cheking if all fields were filled
  ) {
    alert("Vennligst fyll inn alle feltene"); //pop-up window if more info needed
  } else {
    alert("Vi har mottatt ditt medlemskap. Velkommen i cluben!"); //pop-up if everything is filled
    InputName.value = "";
    InputSurname.value = "";
    InputDOB.value = "";
    InputTlf.value = "";
    InputTerms.checked = false; //removing values from all inputs
  }
}

function submitTur() {
  if (
    InputName.value === "" ||
    InputSurname.value === "" ||
    InputDOB.value === "" ||
    InputTlf.value === "" ||
    InputTerms.checked === false //cheking if all fields were filled
  ) {
    alert("Vennligst fyll inn alle feltene"); //pop-up window if more info needed
  } else {
    alert("Vi har mottat ditt påmelding. Sees på turen! "); //pop-up if everything is filled
    InputName.value = "";
    InputSurname.value = "";
    InputDOB.value = "";
    InputTlf.value = "";
    InputTerms.checked = false; //removing values from all inputs
  }
}
