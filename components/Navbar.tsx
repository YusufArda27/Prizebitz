import Link from 'next/link';
const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
    <div className="container">
      <a className="navbar-brand" href="#">Prizebitz</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Ana Sayfa</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">Hakkında</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;
