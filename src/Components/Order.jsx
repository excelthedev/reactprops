const Order = ({ closeHour, openHour }) => {
  return (
    <>
      <div className="order">
        <p>
          We{"'"}re open from {openHour}:00pm until {closeHour}:00pm. Come visit
          us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
};

export default Order;
