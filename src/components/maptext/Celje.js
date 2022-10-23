import { FormattedMessage } from "react-intl";

function Celje () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.celje"
                    defaultMessage="The old castle of Celje"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.celje.text"
                    defaultMessage="You can visit Slovenia's largest medieval castle all year round. You can see the exhibition 'Counts of Celje today and never again', and you can also climb the Frideric tower."
                />
            </p>
            <a href="http://www.grad-celje.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.celje.link"
                    defaultMessage="http://www.grad-celje.com/"
                />
            </a>
        </div>
    )
}

export default Celje; 