import { Twitter, MessageCircle } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-24 h-24 rounded-full bg-gray-100/50 flex items-center justify-center backdrop-blur-sm border border-gray-200/50 overflow-hidden">
              <img
                src="/mumu-the-bull-2-1024x752-1.jpg"
                alt="MUMU"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#gallery" className="text-sm font-medium hover:text-gray-600 transition-colors">GALLERY</a>
            <a href="https://x.com/i/communities/2013139439187587445" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-600 transition-colors">COMMUNITY</a>
            <a href="https://knowyourmeme.com/memes/mumu" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gray-600 transition-colors">KYM</a>
            <a href="https://pump.fun/coin/35RscFxEriiH4kJUXKkES7VTWf3aJ6rU3sap3xFQpump" target="_blank" rel="noopener noreferrer" className="bg-[#00FF00] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#00DD00] transition-all">
              BUY $MUMU
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-[180px] font-black leading-none mb-12">MUMU</h1>
            <a href="https://pump.fun/coin/35RscFxEriiH4kJUXKkES7VTWf3aJ6rU3sap3xFQpump" target="_blank" rel="noopener noreferrer" className="bg-[#00FF00] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#00DD00] transition-all border-2 border-black">
              BUY $MUMU
            </a>
          </section>

          <section id="gallery" className="py-20">
            <div className="bg-gradient-to-b from-gray-50 to-white py-16">
              <div className="flex gap-12 justify-center items-center flex-wrap">
                <div className="group">
                  <div className="bg-white p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300" style={{boxShadow: '0 10px 40px rgba(0,0,0,0.15)'}}>
                    <div className="border-8 border-[#8B7355] p-4 bg-gradient-to-br from-amber-50 to-amber-100">
                      <img
                        src="/mumu_joker_pf.jpeg"
                        alt="MUMU Gallery 1"
                        className="w-80 h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300" style={{boxShadow: '0 10px 40px rgba(0,0,0,0.15)'}}>
                    <div className="border-8 border-[#8B7355] p-4 bg-gradient-to-br from-amber-50 to-amber-100">
                      <img
                        src="/mum_uqwefq.jpeg"
                        alt="MUMU Gallery 2"
                        className="w-80 h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300" style={{boxShadow: '0 10px 40px rgba(0,0,0,0.15)'}}>
                    <div className="border-8 border-[#8B7355] p-4 bg-gradient-to-br from-amber-50 to-amber-100">
                      <img
                        src="/mumu_pfpfpf.png"
                        alt="MUMU Gallery 3"
                        className="w-80 h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="community" className="py-20 text-center">
            <h2 className="text-6xl font-black mb-16">JOIN THE COMMUNITY</h2>
            <div className="flex gap-6 justify-center items-center">
              <a href="https://x.com/i/communities/2013139439187587445" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter size={28} />
              </a>
              <a href="https://x.com/i/communities/2013139439187587445" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="fixed bottom-6 right-6 flex items-center gap-4 text-xs">
        <a href="https://x.com/i/communities/2013139439187587445" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
          <Twitter size={16} />
        </a>
        <a href="https://x.com/i/communities/2013139439187587445" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
          <MessageCircle size={16} />
        </a>
      </footer>
    </div>
  );
}

export default App;
