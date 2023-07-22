
document.querySelector('form').addEventListener('submit', function(){

    event.preventDefault();

    var name = document.querySelector('#name').value;
    var address = document.querySelector('#address').value;
    var pincode = document.querySelector('#pincode').value;

    alert("Dear " + name + " your COD order will be shipped to " + address + " " + pincode);
})