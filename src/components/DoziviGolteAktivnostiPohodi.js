import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiPohodi () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities.hiking.header"
                    defaultMessage="Hiking"
                />
            </h2>
            <p>
                <FormattedMessage
                    id = "experience.activities.hiking.text"
                    defaultMessage="Even in the winter you will be fascinated by the magnificent hiking trails covered with a soft white cower of snow on Golte. Put on your comfortable waterproof boots and set off exploring the snowy surroundings. You might go lucky and meet hidden mountain creatures such as chamois, she-deer, rabbits or capercaillies."
                />
            </p>
            <h3>
                <FormattedMessage
                    id = "experience.activities.hiking.subheader"
                    defaultMessage="Evening hike with torches"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.activities.hiking.subheader.text.one"
                    defaultMessage="After an exciting skiing day, do you still have some extra energy in the evening? If you do, we recommend an extremely interesting activity that will not leave you indifferent. Put on a head lamp or light up a torch and set off to the evening hike to the Mozirka cottage. In the cottage you will enjoy warm tea and warm up beside the bakers oven."
                />
            </p>
            <p>
                <FormattedMessage
                    id = "experience.activities.hiking.subheader.text.two"
                    defaultMessage="You can also choose a longer hiking trail that will take you from the hotel through the Alpine Garden to the Starih stan settlement. Hiking equipment (torches and head lamps) can be rented at the hotel."
                />
            </p>
        </div>
    )
}

export default DoziviGolteAktivnostiPohodi;