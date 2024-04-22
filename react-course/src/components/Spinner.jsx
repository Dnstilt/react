import Cliploader from 'react-spinners/ClipLoader'

const override = {
    dispaly: 'block',
    margin: '100px auto'
}

const Spinner = ({ loading }) => {
  return (
    <Cliploader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
    />
  )
}

export default Spinner