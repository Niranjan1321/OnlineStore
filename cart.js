var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function displayData(cartItems) {

    document.querySelector('#displayData').innerHTML = '';

    cartItems.forEach(Phones => {

        var div = document.createElement('div');

        var image = document.createElement('img');
        image.setAttribute('src', Phones.img);

        var name = document.createElement('h2');
        name.innerText = Phones.name;

        var price = document.createElement('h3');
        price.innerText = Phones.price;

        var rating = document.createElement('h3');
        rating.innerText = Phones.rating;

        var Add = document.createElement('button');
        Add.setAttribute('id', 'Remove from Cart');
        Add.innerText = 'Remove from Cart';
        Add.style.padding = '0.5rem';
        Add.style.backgroundColor = 'aqua-marine';
        Add.style.color = 'blue';
        Add.style.borderRadius = '5px';
        Add.style.border = 'none';

        Add.addEventListener('click', function(e, i){

            cartItems.splice(i, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('Phone removed from cart Succesfully');
            window.location.replace('./cart.html');

        })

        div.append(image, name, price, rating, Add);

        document.querySelector('#displayData').append(div);

    });

}

displayData(cartItems);

function displayPrice(coupon){

    var Items = JSON.parse(localStorage.getItem('cartItems')) || [];

    console.log(coupon);

    var finalCost  = 0;

    Items.forEach(function(Item){
       finalCost += Item.price;

    });

    if(coupon === 'masai30'){
        finalCost = finalCost*0.7;
    }

    document.querySelector('#price').innerText = 'The cart value is ' + finalCost;
}

document.querySelector('#coupon').addEventListener('input', function(){

    var coupon = document.querySelector('#coupon').value;
    console.log(coupon);
    displayPrice(coupon);
});

displayPrice('xyz');


