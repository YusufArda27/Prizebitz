import Fetch from 'isomorphic-unfetch';


import Prices from '../components/Prices';
import Navbar from '../components/Navbar';

const Index = (props) => (
  
    <div>
      <Navbar />
      <h1>Prizbitz'e hoşgeldiniz</h1>
      <p>İşte bitcoin oranları</p>
      <Prices bpi={props.bpi}/>
    </div>
  
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;