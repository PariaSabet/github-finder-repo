import { useEffect } from "react";

function UserResult() {

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const response = await fetch('https://api.github.com/users', {
            method: 'GET',
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        const data = await response.json();
        console.log(data);
    }

//   const { user } = useContext(UserContext);
  return (
    <div>
      {/* <h1>{user.name}</h1>
      <h2>{user.email}</h2> */}
    </div>
  );
}

export default UserResult;