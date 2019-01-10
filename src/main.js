
function toggleCompany(){
    var checkbox = document.getElementById('company-check');
    if (checkbox.checked == true){
        document.getElementsByClassName("company-form")[0].classList.add("show");
    } else {
        document.getElementsByClassName("company-form")[0].classList.remove("show");
    }
}

toggleCompany();

AOS.init({
    duration: 900,
});