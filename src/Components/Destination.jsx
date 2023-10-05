import "./Destinationstyles.css";
import Andaman1 from "../assets/andaman1.jpg";
import Andaman2 from "../assets/andaman2.jpg";
import Andaman3 from "../assets/andaman3.jpg";
import Andaman4 from "../assets/andaman4.jpg";
import Destinationdata from "./Destinationdata";

const Destination =()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to experience lots of magic, within a time frame.</p>

            <Destinationdata 
            className="first-des"

                heading="Andaman and Nicobar islands"

                text="One of the most beautiful destinations of India with iconic views. Must visit at least once in your lifetime. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites. Tourism to the Andaman and Nicobar Islands is increasing due to the popularity of beaches and adventure sports like snorkelling and sea-walking."

                img1={Andaman1}
                img2={Andaman2}

            />
            <Destinationdata 

            className="first-des-reverse"

                heading="Havelock island"

                text="Radhanagar Beach on the western coast, also known as Number 7 Beach, is one of the most popular beaches on Swaraj and was named 'Best Beach in Asia' by Time in 2004. Radhanagar beach also bagged the prestigious blue flag certification in 2020. A Blue Flag beach is an eco-tourism model endeavouring to provide the tourists or beachgoers clean and hygienic bathing water, facilities, safe and healthy environment. Other notable beaches include Elephant Beach on the northwest coast and Vijay Nagar Beach (No. 5), Beach No. 3 and Beach No. 1 on the east coast. Kalapathar is another famous beach. Port Blair serves as the entry point for visiting the Andaman and Nicobar Islands. Port Blair is connected with mainland India by both air and sea. Port Blair is also famous for the historic Cellular Jail and other small islands like Corbyn's Cove, Wandoor, Ross Island, Viper Island and so forth, which were once home to British colonists."

                img1={Andaman3}
                img2={Andaman4}

            />
        </div>

    )
}

export default Destination