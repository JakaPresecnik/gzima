import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiSnowbiking () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.activities.snowbiking.header"
                    defaultMessage="Snowbiking"
                />
            </h3>
            <h5>
                <FormattedMessage
                    id = "experience.activities.snowbiking.whatis"
                    defaultMessage="What is snowbiking?"
                />
            </h5>
            <p>
                <FormattedMessage
                    id = "experience.activities.snowbiking.whatis.text"
                    defaultMessage="Snowbiking is an attractive sport which you can now try also on Golte. Snowbiking is suitable for both old and young, experienced and inexperienced, because it does not require any prior knowledge. Even those who are not very skilled in skiing, or who had to give up skiing  because of injury, will also be enthusiastic about snowbiking. It is extremely fun and, above all, safe, and injuries have practically not been recorded."
                />
            </p>
            <h5>
                <FormattedMessage
                    id = "experience.activities.snowbiking.needwhat"
                    defaultMessage="What do you need for snowbiking?"
                />
            </h5>
            <p>
                <FormattedMessage
                    id = "experience.activities.snowbiking.needwhat.text"
                    defaultMessage="For a little different turning on the white slopes you need a snow bike, which you can rent at the hotel, ski boots, suitable ski clothes, and a ski helmet is recommended too."
                />
            </p>
        </div>
    )
}

export default DoziviGolteAktivnostiSnowbiking;