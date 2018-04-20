/*given by Jon for now commented out
$(function(){
  $('#btnSubmit').on("click", submit);

  function submit(){

  }
});
*/

//lets write the function that will get an element by id
function getValue(id) {
  return document.getElementById(id);
}
//lets assign an event clicker to submit button
var btn = getValue('btnSubmit'); //instead of writing a function can I use btn = documentGetElement by id?
btn.addEventListener('click', submit);

//lets write the function that will run upon the event's occurance.
  //we must define a variable and an array in with global scope.but I will comment this out for now.

function submit () {
  
}



          var elm;
          var inputs ['firstName', 'lastName', 'emailAddress', ]
        function submit () {
          var elm;
          var errorList [];

          for (var i=0; i<inputs.length)
        }

var fstName = getValue('firstName');
if (fstName.value === "") {
  fstName.classList.add(ERROR_CLASS);//adding the error_class so that CSS rule applies.
  errorList.push("first name required")
}

xreate an array so that you can push alert messages into it which then can be pulled as array list items like errorList.length
