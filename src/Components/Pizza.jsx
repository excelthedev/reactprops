const Pizz = ({ pizzaObj }) => {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <>
      {/* this is the Child Component */}
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        {/* we wrote a javascript expression using template literal above , so it says pizza sold out or pizza*/}
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients} </p>

          <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
};

export default Pizz;
