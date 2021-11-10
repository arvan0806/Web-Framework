
export default function Navbar(){
  return(
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar12"> <a class="navbar-brand d-none d-md-block" href="../">
            <i class="fa d-inline fa-lg"></i>
            <b> TokoKu</b>
          </a>
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"> <a class="nav-link" href="../info">Tentang TokoKu</a> </li>
            <li class="nav-item"> <a class="nav-link" href="../bantuan">Perlu Bantuan?</a> </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"> <a class="nav-link" href="../login">Masuk</a> </li>
            <li class="nav-item"> <a class="nav-link text-primary" href="../signup">Daftar</a> </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}