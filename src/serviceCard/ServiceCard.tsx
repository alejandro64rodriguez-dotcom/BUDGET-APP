
import { type Service } from "@/types/service"

interface ServiceCardProps {
  service: Service
  isSelected: boolean
  onToggle: () => void
  pages: number
  setPages: (value: number) => void
  languages: number
  setLanguages: (value: number) => void
}

function ServiceCard(props: ServiceCardProps) {
  const isWeb = props.service.id === "web"
  return (
    <div
      className={`h-fit w-full rounded-lg border p-6 ${
        props.isSelected
          ? "border-green-500 bg-white"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-semibold">{props.service.name}</p>
          <p>{props.service.description}</p>
        </div>

        <p className="text-xl font-bold">
          {props.service.price} €
        </p>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-green-600"
            checked={props.isSelected}
            onChange={props.onToggle}
          />
          <span className="text-sm">
            {props.isSelected ? "Afegit" : "Afegir"}
          </span>
        </label>
      </div>
      {props.isSelected && isWeb && (
        <div className="mt-6 flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <span className="text-sm">
              Número pàgines:
            </span>

            <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
              <button
                type="button"
                className="border-r border-gray-200 px-3 py-1 hover:bg-gray-100"
                onClick={() => {
                  if (props.pages > 1) {
                    props.setPages(props.pages - 1)
                  }
                }}
              >
                -
              </button>

              <span className="w-8 py-1 text-center">
                {props.pages}
              </span>

              <button
                type="button"
                className="border-l border-gray-200 px-3 py-1 hover:bg-gray-100"
                onClick={() => props.setPages(props.pages + 1)}
              >
                +
              </button>

            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm">
              Número llenguatges:
            </span>

            <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
              <button
                type="button"
                className="border-r border-gray-200 px-3 py-1 hover:bg-gray-100"
                onClick={() => {
                  if (props.languages > 1) {
                    props.setLanguages(props.languages - 1)
                  }
                }}
              >
                -
              </button>

              <span className="w-8 py-1 text-center">
                {props.languages}
              </span>

              <button
                type="button"
                className="border-l border-gray-200 px-3 py-1 hover:bg-gray-100"
                onClick={() => props.setLanguages(props.languages + 1)}
              >
                +
              </button>

            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default ServiceCard