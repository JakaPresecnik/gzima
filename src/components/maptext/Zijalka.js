import { FormattedMessage } from "react-intl";

function Zijalka () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.zijalka"
                    defaultMessage="Potočka Zijalka"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.zijalka.text"
                    defaultMessage="The Potočka Zijalka karst cave is located high above Solčava, on the slopes of Olševa at an altitude of 1,700 m. About 30,000 years ago, the Ice Age man stayed here."
                />
            </p>
            <a href="https://www.pokmuz-ce.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.zijalka.link"
                    defaultMessage="https://www.pokmuz-ce.si/"
                />
            </a>
        </div>
    )
}

export default Zijalka; 