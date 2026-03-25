import "./AboutUs.css";
import { Outlet, Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="about-us">
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
       <ul>
   <li>
     <Link to="site-history">Nuestro sitio</Link>
   </li>
   <li>
     <Link to="site-mission">Nuestra misión</Link>
   </li>
 </ul>
<Outlet /> 
</div>
  );
}

export default AboutUs;
