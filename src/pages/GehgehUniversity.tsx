import { GraduationCap, BookOpen, Users, Trophy, ArrowRight } from "lucide-react";

export default function GehgehUniversity() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-mono text-sm mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Now Enrolling for 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Gehgeh <span className="text-brand-blue font-serif italic font-medium">University</span>
          </h1>
          <p className="text-xl font-medium text-slate-600 max-w-2xl mx-auto mb-10">
            Get your ID Now
          </p>
          <a 
            href="https://octavelandtechnologies.github.io/gehgehuniversity/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white bg-brand-blue hover:bg-slate-900 shadow-xl shadow-brand-blue/20 hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Visit University Portal
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Users, label: "Students", value: "2,500+" },
            { icon: BookOpen, label: "Courses", value: "45+" },
            { icon: Trophy, label: "Success Rate", value: "98%" },
            { icon: GraduationCap, label: "Graduates", value: "1,200+" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <stat.icon className="w-8 h-8 text-brand-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Start Your Journey Today</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you're looking to start a new relationship or advance your current relationship, Gehgeh University provides the resources and community you need to succeed in the wicked age.
              </p>
              <a 
                href="https://octavelandtechnologies.github.io/gehgehuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-4 px-8 rounded-xl transition-all w-fit shadow-lg shadow-brand-blue/20"
              >
                Enter University Portal
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-brand-blue/10 min-h-[300px] relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center">
                 <GraduationCap className="w-48 h-48 text-brand-blue/20 rotate-12" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
