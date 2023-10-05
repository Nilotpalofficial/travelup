import "./Recenttripstyles.css";
import TripData from "./Recenttripdata";
import Trip1 from "../assets/eiffel.jpg";
import Trip2 from "../assets/japan.jpg";
import Trip3 from "../assets/norway.webp";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using our website.</p>
            <div className="trip-card">
                <TripData 

                    img={Trip1}
                    heading="Trip in Paris"
                    txt="Paris lives up to its hype: A city with unbelievable food and culture, plus stunning views everywhere you turn. With 18 arrondissements, it’s a lot to see in one trip, but each neighbourhood has a personality all its own. You can’t miss the iconic 7th, where art and history meet—there’s the Eiffel Tower, sure, but the impressive Musée du quai Branly is just a short walk away. It houses an amazing collection of indigenous art. Or, hit up Montmartre (the 18th), with its boho shops and cosy brasseries. It’s a must-stop on the way up or down from Sacre Coeur. While the French practically invented fine dining, don’t skip the street food—Paris has world-class kebabs and falafel. But no matter where you are, be sure to pop into a sidewalk cafe, sip a glass of wine, and people watch—it’s the way to get a taste of true Parisian culture."

                />
                <TripData 

                    img={Trip2}
                    heading="Trip in Japan"
                    txt="In the Land of the Rising Sun, ancient temples sit alongside neon wonderlands and shinto shrines offer pockets of peace amid metropolises. Add tea ceremonies, snow monkeys, sushi, kimonos, and karaoke to the mix, and you’ve got one of the world’s most fascinating countries."

                />
                <TripData 

                    img={Trip3}
                    heading="Trip in Norway"
                    txt="With sparkling fjords lacing its coastline and soaring mountains dotting its interior, Norway could rightfully claim to be one of the world's most beautiful countries. A progressive society, thriving cultural scene, and free camping in most areas make Norway a great place to visit.
"

                />

            </div>
        </div>

    )
}

export default Trip