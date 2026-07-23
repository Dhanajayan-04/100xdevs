
import ProfileComponent from "./components/ProfileComponent";

function App() {

  return (
    <>
      <ProfileComponent 
      profileUrl= 'https://imgs.search.brave.com/1KiyzuDRcHPqmU55ezONAKkAiaxJjIqKAentGsEkpco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FlLzMx/L2M4L2FlMzFjODEz/M2JhNzUzYTBmZDYx/OGE1MGJmNzhmNTZk/LmpwZw'
      name="Dhanajayan"
      age={22}
      city="Chennai"
      followers={6000}
      likes= {3000}
      photos= {40}
      />
    </>
  )
}

export default App
