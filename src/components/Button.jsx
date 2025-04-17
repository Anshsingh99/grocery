"use client"

function Button({ children, className, onClick, variant = "primary", ...props }) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all"

  const variantClasses = {
    primary: "bg-gradient-to-r from-green-600 to-teal-500 text-white hover:from-green-700 hover:to-teal-600 shadow-md",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    link: "text-green-600 hover:text-green-700 underline",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
