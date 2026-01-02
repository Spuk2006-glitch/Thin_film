import { useState } from "react";

export default function LoanRequest(){
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");
    const [loanPurpose, setLoanPurpose] = useState("");
    const [tenure, setTenure] = useState("");
    const [incomeSource, setIncomeSource] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        if (!amount || !message || !loanPurpose || !tenure || !incomeSource) {
          alert("Fill all fields");
          return;
        }
    
        setLoading(true);
    
        setTimeout(() => {
          setLoading(false);
          alert("Credit evaluation started");
          console.log({
            amount,
            message,
            loanPurpose,
            tenure,
            incomeSource,
          });
        }, 2000);
    };    
    
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-1">
              Request Credit Evaluation
            </h2>
            <p className="text-sm text-text/70 mb-6">
              Build credit using real-world financial behavior.
            </p>
            <input
              type="number"
              placeholder="Loan Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-lg border border-secondary/40
                         text-text placeholder-text/50
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Loan Purpose (Business, Education, etc.)"
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-lg border border-secondary/40
                         text-text placeholder-text/50
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Loan Tenure (months)"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-lg border border-secondary/40
                         text-text placeholder-text/50
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Primary Income Source (Gig / Business / Salary)"
              value={incomeSource}
              onChange={(e) => setIncomeSource(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-lg border border-secondary/40
                         text-text placeholder-text/50
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows={3}
              placeholder="Describe your credit request (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mb-6 px-4 py-3 rounded-lg border border-secondary/40
                         text-text placeholder-text/50
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition
                ${loading
                  ? "bg-secondary cursor-not-allowed"
                  : "bg-primary hover:bg-secondary"}
              `}
            >
              {loading ? "Evaluating..." : "Evaluate Credit"}
            </button>
            <div className="h-1 w-16 bg-accent rounded-full mx-auto mt-6" />

            <p className="text-xs text-text/60 text-center mt-4">
              Privacy-first • No bank data required • Secure by design
            </p>
          </div>
        </div>
      );
    }