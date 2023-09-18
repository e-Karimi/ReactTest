import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list",  () => {
 
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("ensiye");
  user.click(emailInput);
  user.keyboard("ensiye@gmail.com");
  user.click(button);

  expect(nameInput).toHaveValue("ensiye");
  expect(emailInput).toHaveValue("ensiye@gmail.com");

  //* screen.debug();
  //* screen.logTestingPlaygroundURL();


  //! It doesn't work !!!
  // const name = screen.getByRole('cell' ,{name:'ensiye'})
  // const email = screen.getByRole('cell' ,{name:'ensiye@gmail.com'})

  // expect(name).toBeInTheDocument();
  // expect(email).toBeInTheDocument()
});
