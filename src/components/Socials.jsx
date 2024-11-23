import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import { styles } from "../styles";


function Socials() {
  return (
	<div className=" flex flex-col  items-center justify-center  "> 
	<div>
	<h2 className={`${styles.sectionSubText} flex-1 items-center justify-center`}>Socials</h2>

	</div>

	<div className="bg-primary flex flex-row container items-center justify-between w-40 h-20">
	<a
	  href="https://www.linkedin.com/in/michael-adeyemi-gnaho-7b487020b/"
	  target="_blank"
	  rel="noopener noreferrer"
	>
	  <img src={navIcon1} alt="Icon" />
	</a>
	<a
	  href="https://web.facebook.com/micheal.adeyemi.963/"
	  target="_blank"
	  rel="noopener noreferrer"
	>
	  {" "}
	  <img src={navIcon2} alt="Icon" />
	</a>
	<a
	  href="https://www.instagram.com/simplymag_/"
	  target="_blank"
	  rel="noopener noreferrer"
	>
	  {" "}
	  <img src={navIcon3} alt="Icon" />
	</a>
  </div></div>
  )
}

export default Socials