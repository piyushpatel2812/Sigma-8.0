import Product from "./Product";

function ProductTab(){
    let option = ["hi-tech","durable","fast"];
    let option2={a:"hi-tech",b:"durable",c:"fast"};
    return(
        <>
            <Product title="phone"  price={30000} features={option} features2={option2}/>
            <Product title="laptop" price={70000}/>
            <Product title="mobile" price={50000}/>

        </>
    )
}

export default ProductTab;