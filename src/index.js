import 'bootstrap';
import './scss/index.scss';


function toggleCompany(){
    var checkbox = document.getElementById('company-check');
    if (checkbox.checked == true){
        console.warn('checked');
        document.getElementsByClassName('company-form').classList.toggle('show');
    } else {
        console.warn('unchecked');
    }
}

toggleCompany();