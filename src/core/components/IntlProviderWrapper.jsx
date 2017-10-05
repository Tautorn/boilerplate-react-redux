import React, { PropTypes } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'
import ptBR from '../i18n/pt-BR'
import enUS from '../i18n/en-US'

addLocaleData([...pt, ...en])
addLocaleData({ locale: 'pt-BR', parentLocale: 'pt' })
addLocaleData({ locale: 'en-US', parentLocale: 'en' })

const messages = { 'en-US': enUS, 'pt-BR': ptBR }
const language = 'pt-BR'

const IntlProviderWrapper = ({ children }) => (
  <IntlProvider locale={language} messages={messages[ptBR]}>
    {children}
  </IntlProvider>
)

IntlProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default IntlProviderWrapper
