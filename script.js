const InputName = document.getElementById("Name");
const InputSurname = document.getElementById("Surname");
const InputDOB = document.getElementById("DOB");
const InputTlf = document.getElementById("Tlf");
const InputTerms = document.getElementById("Terms");

function submitForm() {
  if (
    InputName.value === "" ||
    InputSurname.value === "" ||
    InputDOB.value === "" ||
    InputTlf.value === "" ||
    InputTerms.checked === false
  ) {
    alert("Vennligst fyll inn alle feltene");
  } else {
    alert("Vi har mottatt ditt medlemskap. Velkommen i cluben!");
    InputName.value = "";
    InputSurname.value = "";
    InputDOB.value = "";
    InputTlf.value = "";
    InputTerms.checked = false;
  }
}

function submitTur() {
  if (
    InputName.value === "" ||
    InputSurname.value === "" ||
    InputDOB.value === "" ||
    InputTlf.value === "" ||
    InputTerms.checked === false
  ) {
    alert("Vennligst fyll inn alle feltene");
  } else {
    alert("Vi har mottat ditt påmelding. Sees på turen! ");
    InputName.value = "";
    InputSurname.value = "";
    InputDOB.value = "";
    InputTlf.value = "";
    InputTerms.checked = false;
  }
}
