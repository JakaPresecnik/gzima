import { FormattedMessage } from "react-intl";

function Savinja () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.savinja"
                    defaultMessage="Rafting and the Savinja river"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.savinja.text"
                    defaultMessage="Rafting along Savinja guarantees you an unforgettable adrenaline experience, and qualified guides with quality equipment will ensure a safe and relaxed descent, which you will keep in your fondest memories."
                />
            </p>
            <a href="https://www.campingmenina.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.savinja.link"
                    defaultMessage="https://www.campingmenina.com/"
                />
            </a>
        </div>
    )
}

export default Savinja;