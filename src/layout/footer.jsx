function Footer() {
  return <footer className="page-footer grey lighten-5">
  <div className="footer-copyright">
    <div className="container blue-text text-darken-3">
    © {new Date().getFullYear()} Copyright Text 
    <a className="blue-text text-darken-3 right" href="#!"> Repo</a>
    </div>
  </div>
</footer>
}

export {Footer}