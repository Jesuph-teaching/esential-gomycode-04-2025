const shoppingList = {
	items: [
		{
			product: 'Chips',
			quantity: 5,
		},
	],
	addItem(product, quantity) {
		this.items.push({
			product: product,
			quantity: quantity,
		});
	},
	printList() {
		let message = 'Shopping List: [';
		for (const item of this.items) {
			message += `${item.product}:${item.quantity}, `;
		}
		message = message.substring(0, message.length - 2) + ']';
		return message;
	},
};
shoppingList.addItem('Soda', 3);
shoppingList.addItem('milk', 1);
shoppingList.addItem('M3arek', 1);
console.log(shoppingList.printList());
