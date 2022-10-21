import { FormattedMessage } from "react-intl";

function DoziviGolteKulinarika () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.culinary"
                    defaultMessage="Culinary"
                />
            </h2>
            <h3>
                <FormattedMessage
                    id = "experience.culinary.hotel.header"
                    defaultMessage="Hotel restaurant"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.culinary.hotel.text"
                    defaultMessage="In the comfort of the hotel restaurant, you can enjoy a rich breakfast, hearty lunch and selected dinner with a view of the wonderful panorama of nature. The restaurant of the Golte Hotel is a popular destination for entertaining guests at birthdays, graduations, anniversaries, weddings and other private or business events. If desired, we also provide guests with an accompanying musical program."
                />
            </p>
            <h3>
                <FormattedMessage
                    id = "experience.culinary.medvedjak.header"
                    defaultMessage="Restaurant Medvedjak"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.culinary.medvedjak.text.one"
                    defaultMessage="The modernly equipped daytime restaurant allows you to quickly refresh yourself with a menu that you choose yourself during activities on the plateau. The buffet type of restaurant offers the possibility to always choose exactly the dish that suits you at any given moment. You can choose from a wide range of main dishes, side dishes, salads and desserts, as well as refreshing drinks that you can serve right from the fridge! from the daytime restaurant, the path leads you to a bright and spacious terrace with a view of the Medvedjak hill, bordered by a vast forest."
                />
            </p>
            <p>
                <FormattedMessage
                    id = "experience.culinary.medvedjak.text.two"
                    defaultMessage="On the terrace of the Golte Hotel, we organize various picnics and buffet feasts for closed parties. During the warmer months, the daytime restaurant and terrace are popular locations for afternoon get-togethers and events that are so pleasant and spontaneous that they go late into the night."
                />
            </p>
            <h3>
                <FormattedMessage
                    id = "experience.culinary.ploti.header"
                    defaultMessage="Trije Ploti cottage"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.culinary.ploti.text"
                    defaultMessage="The Trije Ploti cottage (apartment by the lake) is located next to the reservoir lake, which you can reach on foot or the Medvedjak chairlift can take you to it. At the top of the mountain, you can enjoy limitless views of the Alps, which, together with the lake, form an unforgettable scenery. This is exactly why the cottage by the lake with its spacious terrace is a popular location for rest and a warm refreshment!"
                />
            </p>
            <h3>
                <FormattedMessage
                    id = "experience.culinary.mozirska.header"
                    defaultMessage="Mozirje cottage"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.culinary.mozirska.text"
                    defaultMessage="The Mozirje cottage is a desirable and popular stop for visitors to Golte landscape park. Different groups can enjoy lunch or dinner by the spoonful, or home-made cold meats, farm food and selected desserts, served in this mountain atmosphere."
                />
            </p>
        </div>
    )
}

export default DoziviGolteKulinarika;