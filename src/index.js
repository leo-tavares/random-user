const app = require("express")();

app.get("/", (_, response) => {
  const { name, date, internet } = require("faker");
  response.send({
    firstName: name.firstName(),
    secondName: name.lastName(),
    gender: name.gender(),
    birthDate: date.between("1990-01-01", "2000-01-01"),
    email: internet.email(),
    password: internet.password()
  });
});

app.listen("3333", () => console.log("...app inicializado"));
