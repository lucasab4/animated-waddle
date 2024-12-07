export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-4 relative overflow-hidden">
      {/* Star background */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      {/* Top code */}
      <div className="font-mono text-sm text-gray-500 z-10">
        {'<CF> JF` eGi3N{q JEK}j9'}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 z-10">
        <h1 className="text-4xl font-mono mb-2">yJTOLLx</h1>
        <p className="text-gray-500 font-mono mb-8">JLQf2cb</p>
        
        <nav className="flex gap-4 px-6 py-3 bg-white/5 rounded-lg backdrop-blur-sm">
          <a href="/about" className="text-gray-400 hover:text-white transition-colors">
            about
          </a>
          <a href="/now" className="text-gray-400 hover:text-white transition-colors">
            now
          </a>
          <a href="/projects" className="text-gray-400 hover:text-white transition-colors">
            projects
          </a>
          <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
            blog
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
            contact
          </a>
        </nav>
      </div>

      {/* Bottom code */}
      <div className="font-mono text-sm text-gray-500 whitespace-pre z-10">
        {'je0 JYRwyuO hBR\n\'t Jt1|NCR'}
      </div>
    </main>
  )
}

