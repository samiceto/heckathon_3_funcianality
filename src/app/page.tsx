
import Hero from "./Components/Hero";
import Range from "./Components/Range";
import Products from "./Components/Products";
import Carasol from "./Components/Carasol";
import Galeray from "./Components/Galeray";



export default function Home() {
  let rang=[
    {
      img:'/c1.png',
      des:'Dining',
    },
    {
      img:'/c2.png',
      des:'Living',
    },
    {
      img:'/c3.png',
      des:'Bedroom',
    }
  ]

  return (
   <div className=" w-[100vw]">
   <Hero />
   <Range rang={rang}/>
   <Products />
   <Carasol />
   <Galeray />
  
   </div>
  );
}
