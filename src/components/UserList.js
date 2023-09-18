/* eslint-disable react/prop-types */

export default function UserList({ users }) {
  return (
    <>
      <table >
        <thead >
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="tbodyElem">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border-n">{user.name}</td>
              <td className="border-e">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
