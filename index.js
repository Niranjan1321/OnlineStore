var MPhones = [
    {
        img: "https://th.bing.com/th/id/OIP.KwavIwuhhIw20dSqHQA4pAHaHa?pid=ImgDet&rs=1",
        name: 'iphoneX',
        price: 50000,
        rating: 5

    },
    {
        img: "https://th.bing.com/th/id/OIP.rcUWnu1qvtbelqW2ZL4tigHaHa?pid=ImgDet&rs=1",
        name: 'OnePlus',
        price: 40000,
        rating: 4
    },
    {
        img: "https://www.dealayo.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/x/i/xiomi-poco-m3-mobile-4bg-64gb-29-nepal.png",
        name: 'Poco',
        price: 30000,
        rating: 3
    },
    {
        img: "https://th.bing.com/th/id/OIP.kfTz5na-wS2zzxYU3a6XHgHaLG?pid=ImgDet&rs=1",
        name: 'MI',
        price: 20000,
        rating: 2
    },
    {
        img: "https://cdn.techjuice.pk/wp-content/uploads/2021/04/oppo-k3-pakistan-priceoye-qc93j.jpg",
        name: 'Oppo',
        price: 15000,
        rating: 2
    },
    {
        img: "https://www.chooseyourmobile.com/wp-content/uploads/2020/11/vivo-y51s-white.jpg",
        name: 'Vivo',
        price: 12000,
        rating: 2
    }
];

localStorage.setItem('Phones', JSON.stringify(MPhones));

var Phones = JSON.parse(localStorage.getItem('Phones')) || [];
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function displayData(Phones) {

    console.log(Phones);

    document.querySelector('#displayData').innerHTML = '';

    Phones.forEach(Phones => {

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
        Add.setAttribute('id', 'addtoCart');
        Add.innerText = 'Add to Cart';
        Add.style.padding = '0.5rem';
        Add.style.backgroundColor = 'aqua-marine';
        Add.style.color = 'blue';
        Add.style.borderRadius = '5px';
        Add.style.border = 'none';

        Add.addEventListener('click', function(){

            cartItems.push(Phones);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('Phone added Successfully');
            window.location.replace('./index.html');

        })

        div.append(image, name, price, rating, Add);

        document.querySelector('#displayData').append(div);

    });

}


document.querySelector('#sortbyPrice').addEventListener('change', function(){

    var sortbyCost = document.querySelector('#sortbyPrice').value;

    console.log(sortbyCost);

    var sPhones = JSON.parse(localStorage.getItem('Phones')) || [];

    sPhones.sort(function(p1, p2){

        if(sortbyCost === 'lowtohighPrice'){
            return p1.price - p2.price ;
        }
        if(sortbyCost === 'hightolowprice'){
            return p2.price - p1.price;
        }
        else
        return 0;

    });

    displayData(sPhones);

});

document.querySelector('#sortbyrating').addEventListener('change', function(){

    var sortbyCost = document.querySelector('#sortbyrating').value;

    console.log(sortbyCost);

    var sPhones = JSON.parse(localStorage.getItem('Phones')) || [];

    sPhones.sort(function(p1, p2){

        if(sortbyCost === 'lowtohighRating'){
            return p1.rating - p2.rating ;
        }
        if(sortbyCost === 'hightolowrating'){
            return p2.rating - p1.rating;
        }
        else
        return 0;

    });

    displayData(sPhones);

});

displayData(Phones);



