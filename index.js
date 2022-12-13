document.querySelectorAll('h3') 
const h3Nodes = document.querySelectorAll('h3');

h3Nodes.forEach(element => console.info(element.innerHTML))
const searchRegex = /Kid/;
h3Nodes.forEach((element) => { if (searchRegex.test(element.innerHTML)) console.log(element.innerHTML)})
const productDescriptionNodes = document.querySelectorAll('.product-thumbnail__product-description')
const products = document.querySelectorAll('.product-thumbnail__product-info')

products.forEach(element => console.info(element.innerHTML))
products.forEach(element => console.info(element))


products.forEach(element => element.getElementByClassName(''))

products.forEach(element => console.info(element))

