import './App.css'
// import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';
// import MsgBox from './msgBox.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';

function App() {
  return (
    <>
      {/* <Title />
      <MsgBox userName="Piyush" textcolor="pink"/>
      <ProductTab /> */}
       {/* activity // */}
        <h2>Blockbuster Deals</h2>
        <ProductTab />
        <Button/>
        <Form/>
        
    </>
  );
}

export default App;