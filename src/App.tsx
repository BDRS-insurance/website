import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  Award, Clock, Zap
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activePartner, setActivePartner] = useState(null);

  const partners = [
    { 
      name: "Pacific Cross", 
      img: "Pacific-Cross.png", 
      color: "shadow-blue-500/20 border-blue-500/50",
      desc: "With over 70 years of regional expertise, Pacific Cross Philippines began as State Bond & Insurance Co. in 1949, eventually becoming part of a specialist group dedicated to medical and travel protection across Asia." 
    },
    { 
      name: "Paramount", 
      img: "Paramount.png", 
      color: "shadow-red-500/20 border-red-500/50",
      desc: "Founded in 1950, Paramount Life & General Insurance Corporation started as a non-life insurer. It has grown into a top-tier provider by focusing on quick claims and making insurance straightforward for every Filipino." 
    },
    { 
      name: "PhilBritish", 
      img: "PhilBritish.png", 
      color: "shadow-orange-500/20 border-orange-500/50",
      desc: "The Philippine British Assurance Company, Inc. was incorporated in the 1960s. For over 50 years, it has maintained a legacy of strong financial backing and specialized expertise in property and marine insurance." 
    },
    { 
      name: "Asia Insurance", 
      img: "asia-insurance.png", 
      color: "shadow-indigo-500/20 border-indigo-500/50",
      desc: "Asia Insurance (Philippines) Corporation is a strategic joint venture between the Asia Insurance Company of Hong Kong and local partners. It brings a global standard of risk management to the Philippine market." 
    },
    { 
      name: "Bethel", 
      img: "bethel.png", 
      color: "shadow-yellow-500/20 border-yellow-500/50",
      desc: "Bethel General Insurance and Surety Corporation has a long-standing history of providing diverse non-life products. It is particularly recognized for its strong focus on surety bonds and helping local businesses manage risks." 
    },
    { 
      name: "Maagap", 
      img: "maagap.png", 
      color: "shadow-cyan-500/20 border-cyan-500/50",
      desc: "Maagap Insurance, Inc. was established to provide 'proactive' protection. Over the years, it has built a reputation for innovation and reliability, becoming a go-to choice for comprehensive motor and fire insurance." 
    }
  ];

  const reasons = [
    {
      title: "Decades of Expertise",
      desc: "Deep experience in the Philippine insurance landscape.",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Fast Claims Support",
      desc: "We stand by you during the most critical times.",
      icon: <Clock className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Tailored Solutions",
      desc: "We find the specific plan that fits your budget.",
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    }
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and peace of mind.',
      longDesc: 'Life insurance is a promise to your loved ones. Our plans cover educational funds and estate planning.',
      benefits: ['Death Benefit', 'Critical Illness', 'Education Fund', 'Retirement']
    },
    {
      id: 'hmo',
      title: 'HMO / Health',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for everyone.',
      longDesc: 'We partner with top providers to give you access to the best hospitals and doctors.',
      benefits: ['In-patient Care', 'Emergency', 'Dental', 'Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and assets.',
      longDesc: 'Our non-life products provide robust coverage for your cars, homes, and business operations.',
      benefits: ['Car Insurance', 'Fire Insurance', 'Marine Cargo', 'Surety Bonds']
    }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());
    setLoading(false);
    if (res.success) { setShowSuccess(true); event.target.reset(); }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVIGATION - Improved for Mobile */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] uppercase tracking-widest text-slate-400 font-bold hidden xs:block">Dependable Risk Solutions</span>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-blue-500 transition active:scale-95">
            Contact Us
          </a>
        </div>
      </nav>

      {/* HERO SECTION - Stacked for Mobile */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center lg:text-left">
          <div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
              Insurance With <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Guidance You Can Trust.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Protecting what matters most with expert advice and products tailored for Filipino families.
            </p>
            <a href="#quote" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2 active:scale-95">
              Start Your Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Form optimized for small screens */}
          <div id="quote" className="bg-slate-900/40 border border-white/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-2xl shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-white text-left">Request a Quote</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-white" />
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-white" />
              <input name="phone" type="text" placeholder="Phone Number" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-white" />
              <select name="service" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none text-slate-400">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all active:scale-[0.98]">
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION - Single column on mobile */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="text-center mb-10">
          {/* UPDATED HEADING HERE */}
          <h3 className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase mb-3">Accredited Partners</h3>
          <p className="text-slate-500 text-[10px] italic">Tap a card to reveal company history</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((p, index) => (
            <div 
              key={p.name}
              onClick={() => setActivePartner(activePartner === index ? null : index)}
              className={`p-6 rounded-[2rem] border transition-all duration-300 active:scale-[0.98] cursor-pointer
                ${activePartner === index 
                  ? `${p.color} bg-slate-900/90 border-blue-500/50` 
                  : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.05]'}`}
            >
              <div className="h-12 flex items-center justify-start mb-4">
                <img src={`./${p.img}`} alt={p.name} className="h-full w-auto object-contain" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg text-slate-200">{p.name}</h4>
                <div className={`overflow-hidden transition-all duration-500 ${activePartner === index ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-white/10">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE BDRS - Clean Mobile Grid */}
      <section className="px-6 py-16 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4 text-blue-400">{r.icon}</div>
              <h4 className="font-bold mb-2">{r.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS - Responsive Cards */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our Protection Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-slate-900/30 border border-white/5 p-8 rounded-[2rem] text-left active:bg-slate-800 transition cursor-pointer hover:bg-slate-800/50 hover:border-blue-500/30">
              <div className="mb-4">{product.icon}</div>
              <h4 className="text-xl font-bold mb-2">{product.title}</h4>
              <p className="text-xs text-slate-400 mb-6">{product.shortDesc}</p>
              <div className="flex items-center gap-2 text-blue-400 text-[9px] font-black uppercase tracking-widest">
                View Details <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-white/5 opacity-50">
        <p className="text-[8px] uppercase tracking-[0.3em]">© {new Date().getFullYear()} BDRS Associates Insurance Agency</p>
      </footer>

      {/* MOBILE FRIENDLY MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] p-8 animate-in slide-in-from-bottom sm:zoom-in">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"><X className="w-5 h-5" /></button>
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.title}</h3>
            <p className="text-xs text-slate-400 mb-6">{selectedProduct.longDesc}</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {selectedProduct.benefits.map((b, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSelectedProduct(null); window.location.href="#quote"; }} className="w-full py-4 bg-blue-600 rounded-xl font-bold active:bg-blue-500 hover:bg-blue-500 transition">Inquire Now</button>
          </div>
        </div>
      )}
    </div>
  );
}
