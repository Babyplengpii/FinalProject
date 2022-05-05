import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


function MyApp({ Component, pageProps }) {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
