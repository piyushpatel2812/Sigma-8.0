import "./Product.css";
import Price from "./Price";

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

// function Product({title,price,features,features2}){
//     let isDiscount = price > 3000;
//     let styles = {backgroundColor: isDiscount ? "pink" :""};
//     return (
//         <div className="Product"  >
//             <h3>{title}</h3>
          
//             <h5>price : {price}</h5>
//             <p  style={styles}>{features}</p>
     
//             {isDiscount ? <p>discount of 5%</p> : null}
           
//         </div>
//     );
// }

// // activity
function Product({title,idx}){
  let oldPrice = ["8,999","11,900","1599","599"];
  let newPrice = ["7500","9000","899","399"];
  let description = ["8000 DPI","intuitive surface","designed for iPad for ","wireless"];
    return (
        <div className="Product"  >
           <h1>{title}</h1>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}



export default Product;