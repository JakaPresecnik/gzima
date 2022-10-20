import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiPlezanje () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities.climbing.header"
                    defaultMessage="Ice climbing"
                />
            </h2>
            <h4>
                <FormattedMessage
                    id = "experience.activities.climbing.whatis"
                    defaultMessage="What is ice climbing?"
                />
            </h4>
            <p>
                <FormattedMessage
                    id = "experience.activities.climbing.whatis.text"
                    defaultMessage="Ice climbing is another winter activity that will fill you with adrenaline. It's about climbing frozen waterfalls and inclined ice formations in ravines. In the wintertime, at Golte you will be able to get to know this attractive sport on the icy surface prepared for it."
                />
            </p>
            <h4>
                <FormattedMessage
                    id = "experience.activities.climbing.needwhat"
                    defaultMessage="What do you need for ice climbing?"
                />
            </h4>
            <p>
                <FormattedMessage
                    id = "experience.activities.climbing.needwhat.text"
                    defaultMessage="For adrenaline climbing over an ice formation, you need a rope, a climbing harness, belay device, carabiners, bands and auxiliary cords. Accompanied with your instructor, you will be able to make your first steps over an ice formation. You can rent all necessary equipment at the Golte Hotel."
                />
            </p>
        </div>
    )
}

export default DoziviGolteAktivnostiPlezanje;