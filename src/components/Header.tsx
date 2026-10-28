import logo from "@/assets/logo/logo-frontender.png"
import banner from "@/assets/image/header-background.png"

function Header() {
  return (
    <header
      className="relative flex flex-col bg-cover bg-center h-70 items-center justify-center gap-3"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <img
        src={logo}
        alt="Logo Frontender"
        className="absolute top-4 left-4 h-12 w-auto"
      />
      <h1 className="font-bold text-4xl text-center">
        Aconsegueix la millor qualitat
      </h1>
      <p>Serveis digitals adaptats al teu negoci</p>
    </header>
  )
}

export default Header