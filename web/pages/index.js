import Navbar from './komponen/navbar'
import Link from 'next/link'

export default function Konten(){
    return(
<div >
    <div>
    <Navbar/>
    </div>
      <div className="py-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 p-0"> <img className="img-fluid d-block" src="https://jejakpiknik.com/wp-content/uploads/2021/02/ASUS-ROG-Mothership.jpg"/></div>
            <div className="px-5 col-lg-6 d-flex flex-column align-items-start justify-content-center order-1 order-lg-2">
              <h1>Masuk &amp; Cari barang</h1>
              <p className="mb-3">Silahkan masuk menggunakan alamat email yang terdaftar, klik daftar untuk membuat akun baru</p>
              <form className="form-inline d-flex justify-content-center mb-4">
                <div className="input-group"> <input type="email" className="form-control" placeholder="Masukkan Email" id="form5"/>
                  <div className="input-group-append"><Link href="/login"><button className="btn btn-primary" type="button" >Masuk</button></Link> </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Belanja Laptop Murah Hanya di TokoKu</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-3">
              <p>So, tunggu apa lagi, bagi Anda yang ingin belanja online laptop terbaru lenovo IdeaPad / laptop acer murah, keren, canggih, fitur lengkap dan garansi resmi, sekali lagi TokoKu adalah jawabannya.</p>
            </div>
            <div className="col-md-6 p-3">
              <p>TokoKu adalah situs belanja online terbesar di Indonesia. Kami memberikan fasilitas pelayanan terbaik untuk mendukung pengalaman belanja online yang aman, nyaman dan terpercaya.</p>
            </div>
          </div>
        </div>
      </div>
  
</div>

    )
}