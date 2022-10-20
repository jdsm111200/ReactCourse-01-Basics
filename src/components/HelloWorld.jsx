function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
      <p>My first React app</p>
    </>
  );
}
function Object() {
  const user = {
    name: "John",
    age: 30,
    city: "New York",
  };
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export { HelloWorld, Object };
