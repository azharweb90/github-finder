import User from "./User";

export default function Users({ users, loading, searchTerm }) {
  console.log("search keyword", searchTerm);

  //   const fetchUsers = () => {
  //     // console.log("test", process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //     fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok!");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setLoading(false);
  //         setUsers(data);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         console.log(err);
  //       });
  //   };

  return (
    <>
      {!loading && (
        <>
          {
            <h2>
              <span style={{ color: "blue" }}>{searchTerm}</span> profiles
              are : {users?.length}
            </h2>
          }
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(3, 1fr)`,
              columnGap: 20,
            }}
          >
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
