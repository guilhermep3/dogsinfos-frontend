import Image from "next/image"
import { BlueBg } from "../svg/blueBg"

export const AdoptSection = () => {

  return (
    <section>
      <div className="containerStyle w-full flex justify-center items-center">
        <div className="w-full md:w-4/5 md:h-96 relative flex justify-between items-center flex-col sm:flex-row">
          <BlueBg />
          <div className="w-72 sm:w-fit sm:h-[90%] pl-10">
            <Image src="/man-dog.png" alt="homem abraçando um cachorro"
              width={400} height={400} className="h-full w-fit object-cover"
            />
          </div>
          <div className="text-white text-center sm:text-end flex flex-col gap-2 w-full sm:max-w-2/5 pb-10 px-4 sm:pr-10">
            <h2 className="sourGummy text-3xl font-extrabold">Mais um amigo</h2>
            <p className="sourGummy text-xl font-bold mb-2">Milhares de memórias novas</p>
            <p className="text-sm text-zinc-200">Se você quer um amigo leal e cheio de amor, adote um cachorro! Ao adotar, você oferece uma nova chance para um animal e é retribuído com amor e companhia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}