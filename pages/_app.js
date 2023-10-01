// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import CommonLayout from '../components/layouts/commonlayout';

function MyApp({ Component, pageProps }) {
  return(
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
      
  ); 
}

export default MyApp
