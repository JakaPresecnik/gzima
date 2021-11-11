import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';

import Si from '../lang/si.json';
import En from '../lang/en.json';
import Hr from '../lang/hr.json';
import Hu from '../lang/hu.json';
import Nl from '../lang/nl.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;

switch(local) {
  case 'en':
    lang = En;
    break;
  case 'sl':
  case 'sl-SI':
    lang = Si;
    break;
  case 'hr':
    lang = Hr;
    break;
  case 'hu':
    lang = Hu;
    break;
  case 'nl':
    lang = Nl;
    break;
  default:
    lang = En;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);
    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        switch(newLocale) {
            case 'sl':
                setMessages(Si);
                break;
            case 'hr':
                setMessages(Hr);
                 break;
            case 'hu':
                setMessages(Hu);
                break;
            case 'nl':
                setMessages(Nl);
                break;
            default:
                setMessages(En);
          }
    }
    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
 }
 export default Wrapper;