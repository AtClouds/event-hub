import { Navbar } from "../components/landing-layout/NavBar";



function  AllEvent() {
 
  return (
    <div className="relative">

      {/*NavBar*/}
      <div className="absolute inset-x-0 top-0 z-20bg-linear-to-r from-brand-secondary to-brand-primary"> 
        <Navbar /> 
      </div>


    </div>
  )
}

export default AllEvent;
