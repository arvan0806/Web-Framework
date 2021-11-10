import Link from 'next/link'
import Navbar from '../pages/komponen/navbar'

export default function Signup() {

  return (
   
    <div>
    <div>
        <Navbar/>
    </div>
  
    <div>
      <div className="py-5 text-white" >
      <div className="container">
      <div className="row">
          <div className="p-5 col-lg-6 col-10 mx-auto border bg-dark">
          <h2 className="mb-4" >Isi semua data dengan benar</h2>
          <form className="text-left">
            <div className="form-group"> <label for="form16">Nama</label> <input type="text" className="form-control" id="form16" placeholder="Nama panggilan saja"/> </div> <br></br>
            <div className="form-group"> <label for="form17">NIK KTP</label> <input type="text" className="form-control" id="form17" placeholder="NIK sesuai KTP"/> </div> <br></br>
            <div className="form-group"> <label for="form18">Email Aktif</label> <input type="email" className="form-control" id="form18" placeholder="Contoh@gmail.com"/></div> <br></br>
            <div className="form-group"> <label for="form19">Password</label> <input type="password" className="form-control" id="form19" placeholder="••••"/> </div> <br></br>
            <div className="form-group"> <label for="form20">Confirm Password</label> <input type="password" className="form-control" id="form20" placeholder="••••"/> </div> <br></br>
              
              <div className="form-group">
              <div className="form-check"> <input className="form-check-input" type="checkbox" id="form21" value="on"/> <label className="form-check-label" for="form21"> Saya terima semua ketentuan </label> </div></div> 
              <Link href="/komponen/data"><button type="submit" className="btn btn-primary">Daftar</button></Link>
          </form>
          </div>
      </div>
      </div>
   </div>
  </div>
</div>

  )
}
