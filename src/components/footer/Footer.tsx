import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center bg-indigo-900 text-white w-full">
        <h2 className="font-bold text-xl">Blog pessoal Generation | {data}</h2>
        <p className="text-lg">Acesse as redes sociais</p>
        <div className="flex *:px-1 *:size-10">
            <GithubLogo className="stroke-black hover:fill-black hover:cursor-pointer"/>
            <LinkedinLogo className="stroke-black hover:fill-black hover:cursor-pointer" />
        </div>
    </div>
  )
}

export default Footer