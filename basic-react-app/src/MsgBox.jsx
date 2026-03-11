export default function MsgBox({userName,textcolor}){
    let styles = {color:textcolor};
    return (
        <h1 style={styles}> hello {userName} </h1>
    )
}