import { FormattedMessage } from "react-intl";

function Sneznajama () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.sneznajama"
                    defaultMessage="Snežna Cave"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.sneznajama.text"
                    defaultMessage="It is the highest tourist cave in Slovenia with an entrance altitude of 1530 m."
                />
            </p>
            <a href="http://www.snezna-jama.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.sneznajama.link"
                    defaultMessage="http://www.snezna-jama.com/"
                />
            </a>
        </div>
    )
}

export default Sneznajama; 