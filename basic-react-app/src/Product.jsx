import "./Product.css";

// function Product({title,price,features,features2}){
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             {/* <h5>price : {price+15000}</h5> */}
//             <h5>price : {price}</h5>
//             <p>{features}</p>
//             {/* <p>{features2?.a}</p> */}
//             {price >30000 ? <p>discount of 5%</p> : null}
           
//         </div>
//     );
// }

function Product({title,price,features,features2}){
    let isDiscount = price > 3000;
    let styles = {backgroundColor: isDiscount ? "pink" :""};
    return (
        <div className="Product"  >
            <h3>{title}</h3>
          
            <h5>price : {price}</h5>
            <p  style={styles}>{features}</p>
     
            {isDiscount ? <p>discount of 5%</p> : null}
           
        </div>
    );
}


export default Product;