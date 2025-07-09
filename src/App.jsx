import CounterCard from "./CounterCard";
import ShowTextButton from "./ShowTextButton";

function App() {

   console.log("hi there pranav");
   
  
  return (
    <>
    <div>
    <h1 class="text-blue-900">
      This is Solid JS
    </h1>
   </div>

    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <CounterCard />
    </div>

    

    </>
  );
}

export default App;
