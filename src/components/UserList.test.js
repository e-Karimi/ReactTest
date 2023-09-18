import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  
  const users = [
    { name: "ensiye", email: "ensiye@gmail.com" },
    { name: "shiva", email: "shiva@gmail.com" },
  ];
  render(<UserList users={users} />);

  return { users };
};

test("render one row per user", async () => {
  renderComponent();

  //*  screen.logTestingPlaygroundURL()

  //! Way 1 - data-testid
  const rows = within(screen.getByTestId("tbodyElem")).getAllByRole("row");
  expect(rows).toHaveLength(2);

  //! Way 2 - container.querySelector()
  //eslint-disable-next-line
  // const { container } = render(<UserList users={users} />);
  // const rows = container.querySelectorAll("tbody tr");
  // expect(rows).toHaveLength(2);
});


test("render the name and email of each user", async () => {

  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
