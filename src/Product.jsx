import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrices = ["₹12,786", "₹15,487", "₹1,456", "₹599"];
    let newPrices = ["₹8,578", "₹11,542", "₹899", "₹275"];
    let descriptions = ["Wireless Mouse", "Stylus", "Bluetooth Speaker", "Wired Headphones"];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{descriptions[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;