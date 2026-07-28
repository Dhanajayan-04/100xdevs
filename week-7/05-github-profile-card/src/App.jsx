import { useState } from "react";
import "./App.css";
import GithubCard from "./GithubCard";
import { useRecoilState } from "recoil";
import { userAtom } from "./atom";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useRecoilState(userAtom);

  async function generateUser() {
    if (!userName.trim()) {
      alert("Enter a GitHub username");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      setUser(res.data);
    } catch (err) {
      alert("User not found");
      setUser({});
    }
  }

  return (
    <>
      <h1>GitHub Profile Card Generator</h1>

      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <button onClick={generateUser}>
        Generate Profile
      </button>

      <GithubCard user={user} />
    </>
  );
}

export default App;