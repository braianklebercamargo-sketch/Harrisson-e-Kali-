import { motion } from "motion/react";
import { CalendarHeart, Heart } from "lucide-react";
import { cn } from "../lib/utils";

interface CounterProps {
  startDate: Date;
}

export function Counter({ startDate }: CounterProps) {
  return (
    <section id="counter" className="py-16 md:py-24 relative overflow-hidden px-4 md:px-8">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-8 md:p-16 flex flex-col justify-center backdrop-blur-sm relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="bg-pink-500/10 p-4 rounded-full mb-6">
             <CalendarHeart className="w-8 h-8 text-pink-400" />
          </div>
          
          <span className="text-pink-300/80 uppercase text-xs md:text-sm tracking-[0.2em] block font-sans mb-6">
            O dia em que nossa história começou
          </span>
          
          <p className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
            Um lindo <span className="text-pink-400 italic">domingo</span>,<br />
            7 de Junho de 2026
          </p>

          <div className="flex items-center gap-3 text-pink-300/60 font-sans text-sm tracking-wider uppercase">
            <Heart className="w-4 h-4 fill-current" />
            <span>Nosso primeiro sim</span>
            <Heart className="w-4 h-4 fill-current" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
