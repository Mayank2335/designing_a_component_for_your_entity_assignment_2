// write product card here
import Button from "./button";

const Productcard = () => { 
    const productName = 'Samsung S25 Ultra';
    const productImage = 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRp4sOLNPxp1UBdM5TEJD-Qg_8-e0BdmfiMKWWItJ3dTCBjG7Wx3LSNMdIm04hysu5NybpClvH1Q3KnMJS-pnMfQkr_kaoAy7V5IZDJOvr79CMnXZ4nbBGb';
    const price = 'Rs. 1,25,000';
    
    return(
        <div>
            <h3>Name of Product: {productName} </h3>
            <img style={{width: "200px"}} src={productImage} alt="product image"/>
            <p><strong>Price: {price} </strong></p>
            <Button/>
        </div>
    )
}


export default Productcard;