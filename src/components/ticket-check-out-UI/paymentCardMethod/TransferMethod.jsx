import { useOutletContext, Link } from "react-router";
import { LuCopy, LuCheck, LuClock } from "react-icons/lu";
import { useState, useEffect } from "react";

export function TransferMethod() {
  const { ticket, bookingFee } = useOutletContext();

  // Transfer timer
  const [secondsLeft, setSecondsLeft] = useState(30 * 60);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, []);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  //clipboard copy logic
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("0123456789");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: ignore or show a fallback message
    }
  };

  const formatPrice = (amount, currency) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="mt-6">
      <h1 className="text-brand-primary text-[18px] font-bold">
        Transfer the exact amount below to complete your order.
      </h1>

      {/* Bank details */}
      <div className="flex flex-col p-5 border border-brand-light-text/30 rounded-2xl mt-4">
        {/* amount to send */}
        <span className="flex justify-between items-center ">
          <p className="text-[14px] text-brand-light-text font-bold ">
            Amount to send
          </p>
          <p className="text-[16px] text-brand-primary font-bold ">
            {formatPrice(bookingFee, ticket.currency)}
          </p>
        </span>

        {/* account name */}
        <span className="flex justify-between items-center mt-3">
          <p className="text-[14px] text-brand-light-text font-bold ">
            Bank name
          </p>
          <p className="text-[16px] text-brand-primary font-bold ">Wema Bank</p>
        </span>

        {/* account number */}
        <span className="flex justify-between items-center mt-3">
          <p className="text-[14px] text-brand-light-text font-bold ">
            Account number
          </p>
          <p className="text-[16px] text-brand-primary font-bold flex flex-col md:flex-row gap-1 md:gap-4 ">
            {" "}
            0123456789
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-[14px] font-bold text-brand-primary"
            >
              {copied ? (
                <LuCheck className="size-4" />
              ) : (
                <LuCopy className="size-4" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </p>
        </span>

        {/* account name */}
        <span className="flex justify-between items-center mt-3">
          <p className="text-[14px] text-brand-light-text font-bold ">
            Account name
          </p>
          <p className="text-[16px] text-brand-primary font-bold ">
            PayStack_flow
          </p>
        </span>
      </div>

      {/* segment */}
      <div className="bg-[#F0EBFC] rounded-2xl p-5 flex items-center gap-3 mt-5">
        <LuClock className="text-brand-primary md:bg-white md:p-1  rounded-full  size-7" />
        <div>
          <h1 className="text-[16px] text-brand-primary font-bold">
            This account expires in {minutes}:{seconds}
          </h1>
          <p className="text-[13px] text-brand-primary font-medium">
            Your ticket is confirmed once we receive your payment.
          </p>
        </div>
      </div>

      {/* Comment */}
      <div className="mt-5 flex justify-start items-center">
        <p className="text-[13px] text-brand-light-text font-light">
          By paying, you agree to Event-hub Terms of Service and the event’s
          ticket policy.
        </p>
      </div>

      {/* Continue button */}
      <Link to="../success">
        <button className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20">
          I've made the transfer
        </button>
      </Link>
      {/* Comment */}
      <div className="mt-5 flex justify-center items-center">
        <p className="text-[13px] text-brand-light-text font-light">
          Do not close this page while we confirm your payment.
        </p>
      </div>
    </div>
  );
}
