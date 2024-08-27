import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

function Home() {
    const {nome, setNome} = useContext(UserContext)

    return (
        <div className="min-h-[80vh]">
        <div className="bg-indigo-900 flex justify-center min-h">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className="text-5xl font-bold">Seja Bem Vinde! {nome}</h2>
                    <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>
                    <div className="flex justify-around gap-4">
                        <div className="rounded border-white border-solid border-2 py-2 px-4">
                            Nova Postagem
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://i.imgur.com/VpwApCU.png"
                        alt="Desenho de um jovem mexendo no computador com scrips e imagens flutuando sobre ele"
                        className="w-2/3"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home