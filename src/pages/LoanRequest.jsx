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
    
    return(
        <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>

            <h2>Request Credit Evaluation</h2>

            <input
                type="number"
                placeholder="Loan Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                    type="text"
                    placeholder="Loan Purpose (e.g. Business, Education)"
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                type="number"
                placeholder="Loan Tenure (in months)"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <textarea
            placeholder="Evaluate my creditworthiness"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />

            <input
                    type="text"
                    placeholder="Primary Income Source (Gig / Business / Salary)"
                    value={incomeSource}
                    onChange={(e) => setIncomeSource(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
           <textarea
                    placeholder="Describe your credit request (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button onClick={handleSubmit} style={{ width: "100%", padding: "10px" }}>
            Evaluate Credit
            </button>
            <br/>

        </div>
    );
}

