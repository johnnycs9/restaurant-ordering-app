
import {menuArray} from './data.js';


const menuList = document.querySelector('#menu-list__fooditems');
const orderList = document.querySelector('#order-list__fooditems');
const orderListSummarySection = document.querySelector('.order-list__summary');
const container = document.querySelector('.container');
const grandTotalEntry = document.querySelector('.order__grand-total-price');
const overlay = document.querySelector('.overlay');


const orderListData = [];
const orderULHTML = '';


//Detects clicks on the the div.container element
container.addEventListener('click', (e) => {

	//"Add button" click detection
	const addBtn = e.target.closest('.menu-item__cta')
	if (addBtn) { 
		orderListData.push(menuArray.find(item => item.name===addBtn.dataset.itemName));
			
		renderOrderList()
	}

	//"Remove" text click detection
	const remBtn = e.target.closest('.order-list__remove-link')
	if (remBtn) { 
 		orderListData.splice(parseInt(remBtn.dataset.orderItemIndex),1);

		renderOrderList()
	}

	const overlayArea = e.target.matches('.overlay')
	if(overlayArea){
		overlay.classList.toggle('hidden')
		document.documentElement.classList.remove('noscroll')
	}

	const orderBtn = e.target.closest('#order-summary__cta')
	if(orderBtn){
		overlay.classList.toggle('hidden')
		document.documentElement.classList.add('noscroll')
	}

	orderListSummarySection.classList.toggle('hidden', orderListData.length === 0);
});


//Generates menu list on top of page
menuList.innerHTML = menuArray.reduce((completeHTMLString, item) => {
	const htmlString = `
		<li class="menu-list__single-item">
			<img class="menu-item__photo" src="assets/images/${item.image}" alt="${item.name}">

			<div class="menu-item__description-wrapper">
				<h3 class="item-name">${item.name}</h3>
				<p class="item-ingredients">${item.ingredients}</p>
				<span class="item-price">$${item.price}</span>
			</div>

			<button class="menu-item__cta" data-item-price="${item.price}" data-item-name="${item.name}">+</button>
		</li>
		`;

	return completeHTMLString + htmlString;
	},'');


function renderOrderList(){
	let grandTotal = 0;

	orderList.innerHTML = orderListData.reduce((completeHTMLString, item, index) => {
		const htmlString = `
			<li class="order-list__singleitem">
				<h3 class="item-name">${item.name}</h3>
				<div class="order-list__remove-link" data-order-item-index="${index}">Remove</div>
				<span class="order-list__total-price">$${item.price}</span>
			</li>
		`;

		grandTotal +=  item.price
		return completeHTMLString + htmlString;
		},'') 

		grandTotalEntry.innerHTML = `$${grandTotal}`;
}