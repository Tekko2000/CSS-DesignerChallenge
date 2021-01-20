function subscribeConfirmation() {
    console.log("it works")
    console.log(document.getElementById("emailHTML").value)
    document.getElementById("popUp").innerHTML = document.getElementById("emailHTML").value
    document.getElementById("popUp").style.display = 'block'
    document.getElementById("sub1").style.visibility = 'hidden'
    document.getElementById("sub2").style.visibility = 'hidden'
    document.getElementById("sub3").style.visibility = 'hidden'

}
function popUp() {
    document.getElementById("signForm").style.display = 'none'
    document.getElementById("sub1").style.visibility = 'visible'
    document.getElementById("sub2").style.visibility = 'visible'
    document.getElementById("sub3").style.visibility = 'visible'
}