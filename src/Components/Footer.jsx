import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   console.log("we're currently opened Now");
  // } else {
  //   console.log("Closed for the day");
  // }

  return (
    <footer className="footer">
      {/* if isOpen = true, it sharply re-renders, it it's false it doesnt even bother looking at the options */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          {" "}
          We{"'"}re happy to have you between {openHour}:00.{" "}
        </p>
      )}
    </footer>
  );
};

export default Footer;
