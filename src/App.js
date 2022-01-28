import Header from "./Header";
import './App.css'
function App() {

   let subcribers = [
      {
         id: 1,
         name: "abhi",
         phone: 9975887584
      },
      {
         id: 2,
         name: "rohit",
         phone: 7058052021
      }
   ]
   return (
      <div>
         <Header />
         <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>
            <div className="grid-container heading-container">
               <span className="grid-item name-heading">Name</span>
               <span className="grid-item phone-heading">Phone</span>
            </div>

            {
               subcribers.map(sub => {
                  return <div key={sub.id} className="grid-container">
                     <span className="grid-item">{sub.name}</span>
                     <span className="grid-item">{sub.phone}</span>
                     <span className="grid-item action-btn-container">
                        <button className="custom-btn delete-btn ">Delete</button>
                     </span>
                  </div>
               })
            }


         </div>
      </div>
   );
}

export default App;