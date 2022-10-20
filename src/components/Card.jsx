function Card({ name, amount, married, points, address }) {
  return (
    <>
      <h1>User Info</h1>
      <p>Name: {name}</p>
      <p>Amount: ${amount}</p>
      <p>Married: {married ? "Yes" : "No"}</p>
      <p>Points: {points.join(", ")}</p>
      <p>Points:</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p>Address:</p>
      <ul>
        <li>Street: {address.street}</li>
        <li>Number: {address.number}</li>
        <li>City: {address.city}</li>
      </ul>
    </>
  );
}
export default Card;
