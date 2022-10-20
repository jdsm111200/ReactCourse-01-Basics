import Button from "../components/Button";
import Card from "../components/Card";
import CounterApp from "../components/CounterApp";
import { FirstApp } from "../components/FirstApp";
import { HelloWorld, Object } from "../components/HelloWorld";

function App() {
  return (
    <>
      <CounterApp value={0} />
      {/* <FirstApp title="Hola, soy Vegeta"/>
      <CounterApp value={2} />
      <HelloWorld />
      <Object />
      <Button text="Click Me" />
      <Button text="Go To" />
      <Button text="Go Back" name="Alex" />
      <Card
        name="Jose"
        amount={3000}
        married={true}
        points={[1, 2, 3, 4, 5]}
        address={{
          street: "Calle 1",
          number: 123,
          city: "Bogota",
        }}
      />
      <Card
        name="Maria"
        amount={5000}
        married={false}
        points={[1, 2, 3, 4, 5]}
        address={{
          street: "Calle 2",
          number: 456,
          city: "Bogota",
        }}
      /> */}
    </>
  );
}

export default App;
