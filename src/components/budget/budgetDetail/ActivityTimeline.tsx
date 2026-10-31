
const ACTIVITY = [
  { label: "Pressupost creat", date: new Date().toLocaleDateString("ca-ES"), done: true },
  { label: "Pressupost enviat", date: "Pendent", done: false },
  { label: "Pressupost visualitzat", date: "Pendent", done: false },
]

function ActivityTimeline() {
  return (
    <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-base font-bold text-gray-900">
        Historial d'activitat
      </h2>

      <ol className="flex flex-col gap-4">
        {ACTIVITY.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <span
              className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                item.done ? "bg-emerald-500" : "bg-gray-300"
              }`}
              aria-hidden="true"
            />

            <div>
              <p className="text-xs font-bold text-gray-900">{item.label}</p>
              <p className="mt-0.5 text-xs text-gray-500">{item.date}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ActivityTimeline