import { BusinessCard } from "./components/BusinessCard"

function App() {

  return (
    <>
    <BusinessCard 
      name="Dhanajayan"
      description="A TA in the 100xDevs Cohort 2.0" 
      interests={["Ionic", "Open Source", "App Dev"]}
      linkedin="https://www.linkedin.com"
      twitter="https://twitter.com"/>
    </>
  )
}

export default App
