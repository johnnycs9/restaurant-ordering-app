
import {menuArray} from './data.js';


const menuList = document.querySelector('#menu-list__fooditems');
const orderList = document.querySelector('#order-list__fooditems');
const container = document.querySelector('.container');

const orderListData = [];
const orderULHTML = ''

container.addEventListener('click', (e) => {

	if (e.target.dataset.itemName!==undefined) { 
		orderListData.push(menuArray.find(item => item.name===e.target.dataset.itemName))

			orderList.innerHTML = orderListData.reduce((completeHTMLString, item) => {
			const htmlString = `
				<li class="order-list__singleitem">
					<h3 class="item-name">${item.name}</h3>
					<div class="order-list__remove-link" data-order-item-index="${item.name}>Remove</div>
					<span class="order-list__total-price">$${item.price}</span>
				</li>
			`
			return completeHTMLString + htmlString;
		},'')

	}
console.log(e.target)




});


	menuList.innerHTML = menuArray.reduce((completeHTMLString, item) => {
		const htmlString = `
		<li class="menu-list__single-item">
			<img class="menu-item__photo" src="assets/images/${item.image}" alt="${item.name}">
		
			<div class="menu-item__description-wrapper">
				<h3 class="item-name">${item.name}</h3>
				<p class="item-ingredients">${item.ingredients}</p>
				<span class="item-price">$${item.price}</span>
			</div>

			<button class="menu-item__cta" data-item-name="${item.name}">+</button>
		</li>
		`
		return completeHTMLString + htmlString;
		},'')



/*

*/
