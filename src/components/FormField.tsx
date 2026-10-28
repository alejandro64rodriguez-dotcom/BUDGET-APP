import type { ComponentProps } from "react"

interface FormFieldProps extends ComponentProps<"input"> {
  label: string
  error?: string
}

function FormField({ label, error, id, ...inputProps }: FormFieldProps) {
  const errorId = `${id}-error`

  return (
    <div className="flex-1">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <input
        id={id}
        placeholder={label}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full min-w-0 rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-green-500"
        {...inputProps}
      />

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField