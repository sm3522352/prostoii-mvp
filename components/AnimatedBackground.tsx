'use client'
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 -left-10 w-72 h-72 bg-accent opacity-60 rounded-full filter blur-2xl mix-blend-multiply animate-blob"></div>
      <div className="absolute -top-10 left-20 w-72 h-72 bg-primary opacity-60 rounded-full filter blur-2xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 right-20 w-72 h-72 bg-surface opacity-60 rounded-full filter blur-2xl mix-blend-multiply animate-blob animation-delay-4000"></div>
    </div>
  )
}
