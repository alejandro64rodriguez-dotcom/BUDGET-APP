import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { services, type Service } from "@/types/service"
import type { Budget, BudgetFormData } from "@/types/budget"
import Header from "@/components/Header"
import ServiceCard from "@/serviceCard/ServiceCard"
import BudgetForm from "@/components/budget/BudgetForm"
import BudgetSummary from "@/components/budget/BudgetSummary"
import BudgetCard from "@/components/budget/BudgetCard"
import { getBudgetTotal } from "@/utils/budget"
import BudgetSearch from "@/components/budget/BudgetSearch"
import { filterAndSortBudgets } from "@/utils/budgetSearch"
import {toggleService} from '@/serviceCard/ToggleService'

function HomePage() {
  const navigate = useNavigate()
  const [selectedServices, setSelectedServices] = useState<Service[]>([])
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [sortBy, setSortBy] = useState<"price" | "name" | null>(null)
  const [languages, setLanguages] = useState(1)
  const [pages, setPages] = useState(1)
  const totalPrice = getBudgetTotal(selectedServices, { pages, languages })
  const [budgets, setBudgets] = useState<Budget[]>(()=>{
  const savedBudgets = localStorage.getItem("budgets")
  return savedBudgets ? JSON.parse(savedBudgets) as Budget[] : []
})
useEffect(() => {
  localStorage.setItem("budgets", JSON.stringify(budgets))
}, [budgets])

  const filteredBudgets = filterAndSortBudgets(
  budgets,
  searchTerm,
  sortBy,
)
  
  const handleToggleService = (service: Service) => {
  setSelectedServices((previous) => toggleService(service, previous))
}
  function handleBudgetSubmit(formData: BudgetFormData): void {
    const newBudget: Budget = {
      id: crypto.randomUUID().slice(0, 8),
      client: formData,
      services: [...selectedServices],
      pages,
      languages,
      totalPrice,
    }
    setBudgets((previous) => [...previous, newBudget])
  }

  function handleViewDetails(budget: Budget): void {
    navigate(`/budgets/${encodeURIComponent(budget.id)}`, {
      state: { budget },
    })
  }

  return (
    <>
      <Header />

      <main className="grid grid-cols-1 items-start gap-4 px-4 py-6 sm:px-6 lg:px-60">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedServices.some((item) => item.id === service.id)}
            onToggle={() => handleToggleService(service)}
            pages={pages}
            languages={languages}
            setPages={setPages}
            setLanguages={setLanguages}
          />
        ))}

        <BudgetSummary totalPrice={totalPrice} />
        <BudgetForm onSubmit={handleBudgetSubmit} />
        <BudgetSearch 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        noResults={filteredBudgets.length === 0}
        sortBy={sortBy}
        setSortBy={setSortBy}
         />
        {filteredBudgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            onViewDetails={handleViewDetails}
          />
        ))}
      </main>
    </>
  )
}

export default HomePage