import { useOutletContext } from "react-router";
import { LuShieldCheck   } from "react-icons/lu";
import { useState, } from "react";




export function CardMethod ({ card, setCard, setStatus }) {
    const { ticket, bookingFee, } = useOutletContext();
  

     const [errors, setErrors] = useState({});
     
    
            const  handlePay = () => {
                console.log("setStatus is:", typeof setStatus);
                const newErrors = {}
    
                if (!card.name.trim()) newErrors.cardName = "Name on card is required";
    
                if (card.number.length !== 19) newErrors.cardNumber = "Enter a valid 16-digit card number";
    
                
                if (card.expiry.length !== 7) {
                newErrors.cardDate = "Enter a valid expiry date";
                } 
                else {
                    const [mm, yy] = card.expiry.split(" / ");
                    const month = Number(mm);
                    const expiresAt = new Date(2000 + Number(yy), month, 1); // first day of the month AFTER expiry

                    if (month < 1 || month > 12) {
                        newErrors.cardDate = "Enter a valid month";
                    } else if (expiresAt <= new Date()) {
                        newErrors.cardDate = "This card has expired";}
                } 

                if (card.cvv.length < 3) newErrors.cardCVV = "Enter a valid CVV";
    
                setErrors(newErrors)
                
               if (Object.keys(newErrors).length === 0) {
  console.log("checks passed, calling setStatus");
  setStatus("processing");
}

           }

            const formatPrice = (amount, currency) =>
                new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency,
                    maximumFractionDigits: 0,
            }).format(amount);   


            
            // card number logic
            const formatCardNumber = (value) =>
            value
                .replace(/\D/g, "")        // remove everything that isn't a digit
                .slice(0, 16)              // keep at most 16 digits
                .replace(/(.{4})/g, "$1 ") // add a space after every 4 characters
                .trim();                   // drop the trailing space

            // Card expiry and cvv
            const formatExpiry = (value) => {
            const digits = value.replace(/\D/g, "").slice(0, 4);   // digits only, max 4
            if (digits.length < 3) return digits;                  // "0", "09": no slash yet
            return `${digits.slice(0, 2)} / ${digits.slice(2)}`;   // "09 / 28"
            };
            const formatCvv = (value) => value.replace(/\D/g, "").slice(0, 4);


    return(
        <div className="mt-6">
                                    {/* Name field */}
                                    <div>
                                        <h2 className="text-[16px] font-semibold text-brand-primary">Name on Card</h2>
                                        <input
                                        placeholder="Ada Okafor"
                                        type="text"
                                        autoComplete="cc-name"
                                        value={card.name}
                                        onChange={(e) => setCard({ ...card, name: e.target.value })}
                                        className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.cardName ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                        />
                                        {errors.cardName && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.cardName}</p>}
                                    </div>
    
                                    {/* field two */}
                                    <div className="mt-5">
                                        <h2 className="text-[16px] font-semibold text-brand-primary">Card number</h2>
                                        <input
                                        placeholder="4242 4242 4242 4242"
                                        type="text"
                                        inputMode="numeric"
                                        autoComplete="cc-number"
                                        maxLength={19}
                                        value={card.number}
                                        onChange={(e) => setCard({ ...card, number: formatCardNumber(e.target.value) })} 
                                        className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.cardNumber ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                        />
                                         {errors.cardNumber && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.cardNumber}</p>}
                                    </div>
    
                                    {/* field two */}
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div className="mt-5 w-full">
                                            <h2 className="text-[16px] font-semibold text-brand-primary">Expiry date</h2>
                                            <input
                                            type="text"
                                            inputMode="numeric"
                                            autoComplete="cc-exp"
                                            maxLength={7}
                                            placeholder="MM / YY"
                                            value={card.expiry}
                                            onChange={(e) => setCard({ ...card, expiry: formatExpiry(e.target.value) })}
                                            className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.cardDate ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                            />
                                            {errors.cardDate && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.cardDate}</p>}
                                        </div>

                                        <div className="mt-5 w-full">
                                            <h2 className="text-[16px] font-semibold text-brand-primary">CVV</h2>
                                            <input
                                            type="password"
                                            inputMode="numeric"
                                            autoComplete="cc-csc"
                                            maxLength={4}
                                            placeholder="•••"
                                            value={card.cvv}
                                            onChange={(e) => setCard({ ...card, cvv: formatCvv(e.target.value) })}
                                            className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.cardCVV ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                            />
                                            {errors.cardCVV && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.cardCVV}</p>}
                                            </div>
                                        </div>

                                        {/* segment */}
                                        <div className="bg-[#F0EBFC] rounded-2xl p-5 flex items-start gap-3 mt-5">
                                            <LuShieldCheck className="text-brand-primary" size={20}  />
                                            <div>
                                                <h1 className="text-[16px] text-brand-primary font-bold">A safe way to pay</h1>
                                                <p className="text-[13px] text-brand-primary font-medium">Card details are encrypted and never stored by Event-hub</p>
                                            </div>
                                        </div>

                                        {/* Comment */}
                                        <div className="mt-5 flex justify-start items-center">
                                            <p className="text-[13px] text-brand-light-text font-light">By paying, you agree to Event-hub Terms of Service and the event’s ticket policy.</p>
                                        </div>
                    
                                        {/* Continue button */}
                                        <button className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20"
                                        onClick={handlePay}>
                                                Pay {formatPrice(bookingFee, ticket.currency)}     
                                        </button>
                                </div>
    )
}