import imageHero from "../assets/pexels-jeremy-wong-1026390.jpg"

function HeroSection (){
    return (
        <div className="relative"> 
             <img src={imageHero} alt="" className="" />
    
    <div className="absolute   -mt-[140%]">
        <h1 className="text-7xl  text-white " >Bienvenu(e) chez Wedding Planning by lkl</h1>
        <button className=" border p-3 text-white rounded-full">Commencer</button>
    </div>
        
        </div>
    );
    }
    
    export default HeroSection;