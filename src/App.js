import Header from './Components/Header/Header'
import ProductList from './Components/ProductList/ProductList';
import Scanner from './Components/Scanner/Scanner';
import Total from './Components/Total/Total';
import products from './data/data';
import ScannedProducts from './Components/ScannedProducts/ScannedProducts';

function App() {

  const { scannedProducts, total, scanProduct } = ScannedProducts();

  return (
    <div>
      <Header />
      <Scanner onScan={scanProduct} products={products} />
      <ProductList products={scannedProducts} onScan={scanProduct} />
      <Total total={total} />
    </div>
  );
}

export default App;