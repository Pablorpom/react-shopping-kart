import './App.css';
import Kart from './components/Kart'
import ProductsGrid from './components/ProductsGrid';
import PropTypes from 'prop-types';
import productShape from './prop-types/product'
import useKart from './hooks/useKart';

function App(props) { // props es un objeto y cuando se crea un prop es una propiedad del objeto
  const [kart, addItem, removeItem] = useKart();
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
