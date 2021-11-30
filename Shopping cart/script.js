let carts = document.querySelectorAll (".add-cart ");

let products =[ { 
    name: "Serpentine",
    tag: "chainNecklace",
    price: 435,
    count:0

},
{ 
    name: "Balck Onyx",
    tag: "menring",
    price: 278,
    count:0

},
{ 
    name: "Pave Diamon",
    tag: "diamonNecklace",
    price: 916,
    count:0

},
{ 
    name: "Engravable",
    tag: "menbracelet",
    price: 143,
    count:0

},
{ 
    name: "Small Flat Hoops",
    tag: "goldearring",
    price: 637,
    count:0

},
{ 
    name: "Cavier Ring",
    tag: "goldring",
    price: 329,
    count:0

},
{ 
    name: "Round Cut Earring",
    tag: "roundearring",
    price: 191,
    count:0

},
{ 
    name: "Princess Cut Necklace",
    tag: "princess",
    price: 715,
    count:0

},
{ 
    name: "Square Signet Ring",
    tag: "lapis",
    price: 115,
    count:0

},
]


for (let i = 0; i < carts.length; i++) {
   carts[i].addEventListener("click", () =>{
    cartCounts(products[i]);
    totalCost(products[i]);
   })
}
function onLoadCartCounts(){
    let productCounts = localStorage.getItem("cartCounts");
    if(productCounts){
        document.querySelector(".cart span").textContent = productCounts;
    }
}
function cartCounts(product){
    // console.log("the product clicked is ", product);
    let productCounts = localStorage.getItem("cartCounts");

    productCounts = parseInt(productCounts);

    if(productCounts){
        localStorage.setItem("cartCounts", productCounts + 1); 
        document.querySelector(".cart span").textContent =productCounts + 1;

    }
    else{
        localStorage.setItem("cartCounts", 1); 
        document.querySelector(".cart span").textContent = 1;

    }
    setItems(product);

}
function setItems(product){
    let cartItems = localStorage.getItem("productsInCart"==null);
    cartItems =JSON.parse(cartItems);

    if(cartItems !== null){
        cartItems[product.tag].count +=1;
    }
    else{
        product.count =1;
        cartItems ={
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
calcCount();



function calcCount() {
    let countEle = document.querySelector(".count")
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))

    countEle.innerHTML = productsInCart.length
    
    totalPrice();
}


function totalPrice() {
    let price = document.querySelector(".price")
    if (localStorage.getItem("productsInCart") == null) {
        localStorage.setItem("productsInCart", JSON.stringify([]))
    }
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))
    
    let total = productsInCart.reduce((total, product) => {
        return total += +product.price * product.count
    }, 0)
    price.innerHTML = total;
}

function showCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems =JSON.parse(cartItems);
    let productContainer =document.querySelector(".product-container");
    if(cartItems && productContainer){
        productContainer.innerHTML = " ";
        Object.values(cartItems);
    }


}

onLoadCartCounts();
showCart();