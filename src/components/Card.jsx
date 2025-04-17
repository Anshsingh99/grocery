function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className, ...props }) {
  return (
    <div className={`p-4 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Card, CardContent, CardFooter }
