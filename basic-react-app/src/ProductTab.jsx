import Product from "./Product";

// function ProductTab(){
//     let option = ["hi-tech","durable","fast"];
//     let option2={a:"hi-tech",b:"durable",c:"fast"};
//     return(
//         <>
//             <Product title="phone"  price={30000} features={option} features2={option2}/>
//             <Product />
//             <Product  />
//             <Product  />
//             <Product  />
//         </>
//     )
// }

let styles={
display:"flex",
flexWrap:"wrap",
}
function ProductTab(){
    
    return(
        <div style={styles}>
       
            <Product title="Logitech MX Master" idx={0}/>
            <Product  title="Apple Pencil (2nd gen)" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2} />
            <Product title="Petronics Toad" idx={3}  />
        </div>
    )
}

export default ProductTab;