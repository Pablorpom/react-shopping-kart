import { useState } from 'react';
import './App.css';
import Kart from './components/Kart'
import ProductsGrid from './components/ProductsGrid';
import PropTypes from 'prop-types';
import productShape from './prop-types/product'

function App(props) { // props es un objeto y cuando se crea un prop es una propiedad del objeto
  const [kart, setKart] = useState([]);
  const addItem = (id)=> {
    const index = kart.indexOf(id);
    if(index === -1){
      setKart([...kart, id]);
    }
  };
  const removeItem = (id) => {
    const newKart = [...kart];
    const index = kart.indexOf(id)
    newKart.splice(index, 1)
    setKart(newKart)
  }
  const mapKartItems = (kart, products)=> {
    const productsById = products.reduce((acc, product)=>{
      return {
        ...acc,
        [product.id]: product
      }
    },{})
    return kart.map((id)=>{
      return productsById[id]
    })
  }
  // const mapKartItems = (kart, products)=>{
  //   const kartObj = {};
  //   products.forEach(product => {
  //     return kartObj[product.id] = product
  //   })
  //   return kart.map(id => kartObj[id])
  // }
  return (
    <div className="App">
      <ProductsGrid data={props.data} onAddItem={addItem}/>
      <Kart items={mapKartItems(kart, props.data)} onRemoveItem={removeItem}/>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.arrayOf(productShape),
}

export default App;
