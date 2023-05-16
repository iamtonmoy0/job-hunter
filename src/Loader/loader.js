
import { getStoredCart } from "../utilities/fakeDb";

const productLoader = async() => {
	
	const loadedProducts=await fetch('jobdata.json')
	const products=await loadedProducts.json();
	// console.log(products)
        const storedCart=getStoredCart();
	let savedCart=[]
	for(const id in storedCart){
		const addedProduct = products.find(pd=>pd.id===id);
		if(addedProduct){
			const quantity=storedCart[id]
			addedProduct.quantity=quantity;
			savedCart.push(addedProduct)
		}
	}
	return [savedCart , products];

	
}

export default productLoader  ;
