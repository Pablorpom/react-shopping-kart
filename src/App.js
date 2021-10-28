import './App.css';
import Kart from './components/Kart'
import ProductsGrid from './components/ProductsGrid';
import PropTypes from 'prop-types';
import productShape from './prop-types/product'
import useKart from './hooks/useKart';
import mapByProperty from './utils/mapByProperty';

function App(props) { // props es un objeto y cuando se crea un prop es una propiedad del objeto
  const [kart, addItem, removeItem] = useKart();
  const productsById = mapByProperty(props.data, 'id')
  const kartItems = kart.map((id)=> productsById[id])
  return (
    <div className="App">
      <ProductsGrid data={props.data} onAddItem={addItem}/>
      <Kart items={kartItems} onRemoveItem={removeItem}/>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.arrayOf(productShape),
}

export default App;
