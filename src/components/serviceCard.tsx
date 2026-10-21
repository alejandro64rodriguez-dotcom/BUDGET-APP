import { type Service } from "@/types/service"

interface ServiceCardProps {
  service: Service
  isSelected: boolean
  onToggle: () => void
  pages: number
  setPages: (value: number)=> void
  languages: number
  setLanguages: (value: number)=> void
}

function ServiceCard(props: ServiceCardProps) {
  return (
    <div
      className={`w-full rounded-lg border p-4 text-left ${
        props.isSelected ? 'bg-gray-100' : 'bg-gray-100'
      }`}
    >
      <div className="flex justify-between">
        <p>{props.service.name}</p>

        <p>{props.service.price} €</p>

        <input
          type="checkbox"
          className="accent-green-600"
          checked={props.isSelected}
          onChange={props.onToggle}
        />
      </div>
      {props.isSelected && props.service.id === "web" && (
       <input 
       type='number'
       value={props.pages}
       onChange={(event) => props.setPages(Number(event.target.value))} />
      )}
    </div>
  ) 
}

export default ServiceCard