const frutas = [
  { id: 1, name: "frutillas", isStock: true },
  { id: 2, name: "manzanas", isStock: true },
  { id: 3, name: "mandarinas", isStock: false },
  { id: 4, name: "naranjas", isStock: true },
  { id: 5, name: "peras", isStock: false },
];

const display = (argument) => {
  if (argument === 1) {
    return allPoducts();
  } else if (argument === 2) {
    return productsInStock();
  } else if (argument === 3) {
    return productsOutOfStock();
  }
};

const allPoducts = () => {
  return (
    <ul>
      <span>All products</span>
      {frutas.map((fruta) => {
        return <li key={fruta.id}>{fruta.name}</li>;
      })}
    </ul>
  );
};

const productsInStock = () => {
  return (
    <ul>
      <span>In stock</span>
      {frutas.map((fruta) => {
        if (fruta.isStock) {
          return <li key={fruta.id}>{fruta.name}</li>;
        }
      })}
    </ul>
  );
};

const productsOutOfStock = () =>{
    return (
        <ul>
            <span>Out of Stock</span>{
                frutas.map(fruta=>{
                    if(!fruta.isStock){
                    return(
                        <li key={fruta.id}>{fruta.name}</li>
                    )}
                })
            }
        </ul>
    )
}

const App = (
  <div>
    {display(1)}
    {display(2)}
    {display(3)}
  </div>
);

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement);
