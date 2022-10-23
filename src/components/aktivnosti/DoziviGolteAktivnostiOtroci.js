import { FormattedMessage } from 'react-intl';

function DoziviGolteAktivnostiOtroci () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.activities.children.header"
                    defaultMessage="Children's Playground"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.activities.children.text"
                    defaultMessage="Next to the hotel, there is a children's playground with a conveyor belt in the length of 50 m. At the children's playground, the children can learn the basics of skiing and for the first time go down the white slopes. The playground for the youngest ones includes various games that provide an easier and more interesting learning of the first ski turns."
                />
            </p>
        </div>
    )
}

export default DoziviGolteAktivnostiOtroci;