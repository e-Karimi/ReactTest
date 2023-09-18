/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

//* First test
test("it shows two inputs and a button", async () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

//* Second test

test("make sure inputs have some values and click on the button", async () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name :/i });
  const emailInput = screen.getByLabelText(/email :/i);

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("ensiye");

  user.click(emailInput);
  user.keyboard("ensiye@gmail.com");

  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "ensiye", email: "ensiye@gmail.com" });
});

//* Third test

test("empties the two inputs when form submitted", async () => {
 
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("ensiye");
  user.click(emailInput);
  user.keyboard("ensiye@gmail.com");
  user.click(button);

  await waitFor(async () => {
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
