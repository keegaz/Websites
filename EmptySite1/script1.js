window.addEventListener("load", init, false);

function init()
 {
     var theButton = document.getElementById("testBtn");
     theButton.addEventListener("click", login, false);

}

function login()
{
    var myForm = document.getElementById("myForm");
    var uName = myForm.userName.value;
    document.write("Hello " + uName);
}