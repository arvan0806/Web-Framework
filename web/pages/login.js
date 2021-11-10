
import Navbar from '../pages/komponen/navbar'
import Link from 'next/link'

export default function Login() {
  return (
    <div>
    <div>
        <Navbar/>
    </div>
  
  <div>
      <div className="py-5 text-center text-white" >
      <div className="container">
      <div className="row">
          <div className="p-5 col-lg-6 col-10 mx-auto border bg-dark">
          <h2 className="mb-4" >Masukkan email dan password</h2>
          <form>
              <div className="form-group"> <input type="email" className="form-control" placeholder="Email" id="form14"/> </div><br></br><p></p>
              <div className="form-group"> <input type="password" className="form-control" placeholder="Password" id="form15"/>
              <small>
                  <a href="../signup"> Belum Mempunyai akun?</a>
              </small><p></p><br></br>
              </div>
              <Link href="/komponen/data"><button type="submit" className="btn btn-primary">Masuk</button></Link>
          </form>
          </div>
      </div>
      </div>
   </div>
  </div>
</div>


  )
}
