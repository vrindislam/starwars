import {Link} from 'react-router-dom';

const style = {
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const styleHeading = {
  color: 'white',
  fontSize: '50px',
  padding: '20px',
  textTransform: 'uppercase',
}
const styleLink = {fontSize: '40px'}
const Home = () => {
  return (
    <div style={style} className='homepage'>
      <h1 style={styleHeading}>Welcome stranger!</h1>
      <Link to={'/list'} style={styleLink}> Follow the link and you'll know the truth</Link>
    </div>
  );
}

export default Home;