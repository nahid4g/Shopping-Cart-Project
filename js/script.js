let addToCartBtn = document.querySelectorAll(".addToCartBtn");
let productContainer = document.querySelector(".productContainer")

for (let i = 0; i < addToCartBtn.length; i++) {
	addToCartBtn[i].addEventListener("click",updateCartProduct);
}

function updateCartProduct (e) {
	cartContainer = e.target.parentElement.parentElement;
	let productTitle  = cartContainer.querySelector(".product-title").textContent;
	let productPrice = cartContainer.querySelector(".product-price").textContent;


    cartTitles = productContainer.querySelectorAll('.cartTitle');
    for (var i = 0; i < cartTitles.length; i++) {
        if (cartTitles[i].textContent == productTitle) {
            alert("Product already in cart!");
            return;
        }
        
    }
	
	let div = document.createElement("div");
	div.classList.add("row");
	let insideDiv = `
	<div class="col-md-4 item">
                    <p class="cartTitle">${productTitle}</p>
                    <hr class="b-bottom">
                </div>
                <div class="col-md-4 price">
                    <p>${productPrice}</p>
                    <hr class="b-bottom">
                </div>
                <div class="col-md-4 quantity">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="number" value="1" class="form-control for-mt">
                            <hr class="b-bottom">
                        </div>
                        <div class="col-md-8">
                            <button class="btn btn-danger for-mt removeButton">Remove</button>
                            <hr class="b-bottom">
                        </div>
                        </div>
                </div>

	`
	div.innerHTML = insideDiv;
	productContainer.appendChild(div);

    

    let removeButton = document.querySelector(".removeButton");

    removeButton = document.querySelectorAll('.removeButton');
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }
}

function removeFromCart(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
}