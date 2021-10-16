import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* Navbar componenet hai ye, componeent is basicall dhaancha jise properties ki hisaab se fill kar sakte hai...like kisi exam ka application form is componenet and uske andar ki details is like properties....mote mote taur par */}
   <Navbar title="Textutils" aboutText = "About Text" />    
   {/*agr aap component ki andar ki cheezo ko manipulate karna chahte ho to wo props ya properties ki madad se hoga...props is just like jhola hai jisme hum yaha se kuch cheeze daaldenge aur fir Navbar componenet mein jaakar props. karke nikal lenge ya fir agar curly braces ke form mein props pass kiya hai to props. karne ki koi jarurat nahi direct hi jo pass kiya hai use apply kar sakte ho*/}
   {/* AAP KABHI BHI PROPS KO COMPONENET MEIN JAAKR CHANGE NAHI KARENGE, app.js se jo decide kar liye aapne props uske naad change nahi honge componenet waale folder mein jaakar here it is Navbar....means PROPS ARE READ ONLY */}


  {/* <Navbar/>      */}
  {/*defaultProps will be used*/}

   </>

   
  );
}

export default App;
