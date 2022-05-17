import {ReactComponent as TrollFace} from '../../assets/images/trollFace.svg'


export default function Header() {
  return (
    <header className="header">
      <div className="container header--container">
        <TrollFace/>
        {/* <object data="../../assets/images/trollFace.svg" type="image/svg+xml" height='27' width='32'></object> */}
        <h1 className='title'>Meme Generator</h1>
      </div>
    </header>
  )
}
