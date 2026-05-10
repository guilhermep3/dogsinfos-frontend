import { useMobileAsideStore } from "@/store/mobileAsideStore"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Funnel, ListFilter } from "lucide-react"

type Props = {
  setSortBy: (value: string) => void;
};

export const MainDogsTop = ({ setSortBy }: Props) => {
  const { toggleAsideOpen } = useMobileAsideStore();

  return (
    <div className="flex justify-between items-center w-full">
      <Funnel stroke="#2b7fff" className="lg:hidden w-9 h-9 cursor-pointer
        border border-blue-200 p-2 rounded-sm"
        onClick={() => toggleAsideOpen()}
      />
      <Select onValueChange={(value) => setSortBy(value)}>
        <SelectTrigger className="border-zinc-400 ml-0 md:ml-auto">
          <SelectValue placeholder={<><ListFilter />{"Odernar por..."}</>} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ordenar por...</SelectLabel>
            <SelectItem value="id">Id do cachorro</SelectItem>
            <SelectItem value="breed">Nome da raça</SelectItem>
            <SelectItem value="country">País de origem</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}