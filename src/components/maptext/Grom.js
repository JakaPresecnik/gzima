import { FormattedMessage } from "react-intl";

function Grom () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.grom"
                    defaultMessage="Grom Motorcycle Museum"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.grom.text"
                    defaultMessage="In the Grom Motorcycle Museum in Vransko, you can see one of the largest and most diverse collections of motorcycles in the world."
                />
            </p>
            <a href="https://www.muzej-motociklov.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.grom.link"
                    defaultMessage="https://www.muzej-motociklov.com/"
                />
            </a>
        </div>
    )
}

export default Grom; 