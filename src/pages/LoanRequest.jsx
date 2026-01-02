import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoanRequest(){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        occupation: "",
        accountAge: "",
        primarySource: "",
        monthlyAvg: "",
        consistency: "",
        lastDeposit: "",
        rent: "",
        utilities: "",
        missedPayments: "",
      });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = () => {
        console.log("Submitted Credit Profile:", form);
        setTimeout(() => {
            navigate("/decision");
        }, 1200);
        };
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary/25 to-slate-900
        px-4 pt-20 pb-12">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl px-6 sm:px-8 lg:px-10 py-10">

    
            {/* Header */}
            <h1 className="text-3xl font-semibold text-primary tracking-tight">
              Credit Profile Evaluation
            </h1>
            <p className="text-sm text-text/70 mb-6">
              We evaluate real-world behavior — not just credit history.
            </p>
    
            {/* SECTION A */}
            <section className="mb-8 space-y-4">
               <h3 className="text-base font-semibold text-primary/90 uppercase tracking-wide">
                Persona
              </h3>
    
              <select
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-3 rounded-lg border border-secondary/40 focus:ring-2 focus:ring-primary"
              >
                <option value="">Occupation Segment</option>
                <option value="gig">Gig Worker</option>
                <option value="student">Student</option>
                <option value="freelancer">Freelancer</option>
              </select>
    
              <input
                type="number"
                name="accountAge"
                placeholder="Bank Account Age (months)"
                value={form.accountAge}
                onChange={handleChange}
                className="
                w-full px-4 py-3 rounded-lg
                border border-secondary/30
                bg-white
                text-text
                placeholder-text/50
                focus:outline-none
                focus:ring-2 focus:ring-primary/40
                focus:border-primary
                "

              />
            </section>
    
            {/* SECTION B */}
            <section className="mb-8 space-y-4">
              <h3 className="text-base font-semibold text-primary/90 uppercase tracking-wide">
                Income Streams
              </h3>
    
              <input
                type="text"
                name="primarySource"
                placeholder="Primary Income Source (Uber, Upwork, Allowance)"
                value={form.primarySource}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-secondary/40 focus:ring-2 focus:ring-primary"
              />
    
              <input
                type="number"
                name="monthlyAvg"
                placeholder="Monthly Average Income (₹)"
                value={form.monthlyAvg}
                onChange={handleChange}
                className="
                    w-full px-4 py-3 rounded-lg
                    border border-secondary/30
                    bg-white
                    text-text
                    placeholder-text/50
                    focus:outline-none
                    focus:ring-2 focus:ring-primary/40
                    focus:border-primary
                    "

              />
    
              <select
                name="consistency"
                value={form.consistency}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-3 rounded-lg border border-secondary/40 focus:ring-2 focus:ring-primary"
              >
                <option value="">Income Consistency</option>
                <option value="high">High – Weekly</option>
                <option value="medium">Medium – Irregular</option>
                <option value="low">Low – Sporadic</option>
              </select>
    
              <input
                type="date"
                name="lastDeposit"
                value={form.lastDeposit}
                onChange={handleChange}
                className="
                w-full px-4 py-3 rounded-lg
                border border-secondary/30
                bg-white
                text-text
                placeholder-text/50
                focus:outline-none
                focus:ring-2 focus:ring-primary/40
                focus:border-primary
                "

              />
            </section>
    
            {/* SECTION C */}
            <section className="mb-8 space-y-4">
              <h3 className="text-base font-semibold text-primary/90 uppercase tracking-wide">
                Life Obligations
              </h3>
    
              <input
                type="number"
                name="rent"
                placeholder="Rent / Housing (₹ per month)"
                value={form.rent}
                onChange={handleChange}
                className="
                w-full px-4 py-3 rounded-lg
                border border-secondary/30
                bg-white
                text-text
                placeholder-text/50
                focus:outline-none
                focus:ring-2 focus:ring-primary/40
                focus:border-primary
                "

              />
    
              <input
                type="number"
                name="utilities"
                placeholder="Utilities (Phone / Internet / Electricity)"
                value={form.utilities}
                onChange={handleChange}
                className="
                w-full px-4 py-3 rounded-lg
                border border-secondary/30
                bg-white
                text-text
                placeholder-text/50
                focus:outline-none
                focus:ring-2 focus:ring-primary/40
                focus:border-primary
                "

              />
    
              <input
                type="number"
                name="missedPayments"
                placeholder="Missed Payments (last 6 months)"
                value={form.missedPayments}
                onChange={handleChange}
                className="
                w-full px-4 py-3 rounded-lg
                border border-secondary/30
                bg-white
                text-text
                placeholder-text/50
                focus:outline-none
                focus:ring-2 focus:ring-primary/40
                focus:border-primary
                "

              />
            </section>
    
            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-semibold transition"
            >
              Run Credit Evaluation
            </button>
    
            <p className="text-xs text-text/60 text-center mt-4">
              Your data is processed securely. Only decisions are shared.
            </p>
        </div>
    </div>
      );
    }