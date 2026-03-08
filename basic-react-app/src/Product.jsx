import "./Product.css";

function Product({title,price,features,features2}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            {/* <h5>price : {price+15000}</h5> */}
            <h5>price : {price}</h5>
            <p>{features}</p>
            <p>{features2?.a}</p>
            {/* <p>{features2?.b}</p>
            <p>{features2?.c}</p> */}
        </div>
    );
}

export default Product;