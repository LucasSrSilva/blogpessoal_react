import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="flex justify-between text-white bg-indigo-900 px-20 py-2">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl uppercase font-bold">
          <Link to="/home">
            blog pessoal
          </Link>
        </h2>
      </div>
      <div className="flex items-center">
        <ul className="flex *:px-1 *:text-base list-none">
          <li>Postagens</li>
          <li>Temas</li>
          <li>Cadastrar itens</li>
          <li>Perfil</li>
          <li>Sair</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar