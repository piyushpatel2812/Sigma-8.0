// handle clicking event 
function handleClick(){
    console.log("hello!");
}

function handleMouseOver(){
    console.log("bye bye!");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>dnfnihfiubnuj jbuiv  ubvi i uh fhiv  hrbvnjdc vurv jenvjke 4
            nneinvrn inrnjv dv ovnjirbhjdf invvjh u nj rign4 r v r
            bvhjf ijt
             </p>
        </div>
    );
}