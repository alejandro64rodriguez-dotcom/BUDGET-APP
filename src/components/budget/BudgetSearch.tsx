import { Search } from "lucide-react"

interface BudgetSearchProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
  noResults: boolean
  sortBy: "price" | "name" | null
  setSortBy: (value: "price" | "name" | null) => void
}

function BudgetSearch({
  searchTerm,
  setSearchTerm,
  noResults,
  sortBy,
  setSortBy,
}: BudgetSearchProps) {
  return (
    <section>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Search size={20} className="shrink-0" />

          <input
            type="text"
            placeholder="Cerca..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-56 rounded-lg border border-black bg-white px-3 py-2 outline-none"
          />
        </div>

        <button
          type="button"
          onClick={() => setSortBy(sortBy === "price" ? null : "price")}
          className={`flex shrink-0 items-center gap-1 ${
            sortBy === "price" ? "font-bold" : "font-normal"
          }`}
        >
          Import 
        </button>

        <button
          type="button"
          onClick={() => setSortBy(sortBy === "name" ? null : "name")}
          className={`shrink-0 ${
            sortBy === "name" ? "font-bold" : "font-normal"
          }`}
        >
          Nom
        </button>
      </div>

      {noResults && searchTerm.trim() !== "" && (
        <p className="mt-2 text-sm text-red-600">
          Pressupost no trobat
        </p>
      )}
    </section>
  )
}

export default BudgetSearch