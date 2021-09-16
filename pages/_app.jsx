import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'tailwindcss/tailwind.css'
import PropTypes from 'prop-types'

config.autoAddCss = false

function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
