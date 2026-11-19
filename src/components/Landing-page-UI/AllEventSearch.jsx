import { LuSearch, LuMapPin, LuSlidersHorizontal, LuX } from "react-icons/lu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EventCategories } from "./EventCategories";
import { useState } from "react";
import { months } from "../landing-data/months";

export function AllEventSearch({
  searchTerm,
  setSearchTerm,
  place,
  setPlace,
  date,
  setDate,
  category,
  setCategory,
  clearFilters,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // drafts: the sheet edits these, not the real filters
  const [draftSearchTerm, setDraftSearchTerm] = useState("");
  const [draftCategory, setDraftCategory] = useState("");
  const [draftDate, setDraftDate] = useState("");
  const [draftPlace, setDraftPlace] = useState("");

  const openSheet = () => {
    setDraftSearchTerm(searchTerm);
    setDraftCategory(category);
    setDraftDate(date);
    setDraftPlace(place);
    setIsFilterOpen(true);
  };

  const applyFilters = () => {
    setSearchTerm(draftSearchTerm);
    setCategory(draftCategory);
    setDate(draftDate);
    setPlace(draftPlace);
    setIsFilterOpen(false);
  };

  // clears the drafts only; the user still taps Apply to commit
  const clearDrafts = () => {
    setDraftSearchTerm("");
    setDraftCategory("");
    setDraftDate("");
    setDraftPlace("");
  };

    //for mobile date
    const dateLabel =
    months.find((m) => m.value === draftDate)?.label ?? "Any date";

    //desktop date
    const dateLabel2 = 
    months.find((m) => m.value === date)?.label ?? "Any date";

  return (
    <div>
      {/* Desktop */}
      {/* main content */}
      <div className="md:grid hidden md:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr_1.3fr_1fr] gap-4 items-center">
        {/* search event by title */}
        <div className=" w-full">
          <p className="text-[12px] text-brand-light-text font-medium">
            Search Event
          </p>
          <div className="relative">
            <LuSearch
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary pointer-events-none pt-1"
            />
            <input
              className="border-none w-full outline-none mt-1.5 font-light text-[16px] placeholder:text-brand-primary text-brand-primary bg-[#F2F4FF] py-3 pl-11 pr-4 rounded-3xl "
              placeholder="Search event"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter by Category */}
        <div className="w-full">
          <p className="text-[12px] text-brand-light-text font-medium mb-1.5">
            Category
          </p>
          <EventCategories setCategory={setCategory} category={category} />
        </div>

        {/* search event by date */}
        <div className="w-full">
          <div>
            <p className="text-[12px] text-brand-light-text font-medium">
              Date
            </p>

            <div className="relative border-none w-full outline-none mt-1.5 bg-[#F2F4FF] py-3 px-6 rounded-3xl">
              {/* container */}
              <div className="relative flex justify-between items-center">
                <p className="font-light text-[14px] text-brand-primary">
                  {dateLabel2}
                </p>

                {!isOpen && (
                  <ChevronDown
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-6 h-6 text-[18px] text-brand-primary font-bold pb-1 cursor-pointer"
                  />
                )}
                {isOpen && (
                  <ChevronUp
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-6 h-6 text-[18px] text-brand-primary font-bold pb-1 cursor-pointer"
                  />
                )}
              </div>

              {/* Dropdown of event months */}
              {isOpen && (
                <div className="absolute top-full left-0 w-full z-20 mt-2 bg-brand-primary/10 backdrop-blur-md max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent rounded-2xl p-3">
                  {months.map((month) => (
                    <div
                      key={month.value}
                      onClick={() => {
                        setDate(month.value);
                        setIsOpen(false);
                      }}
                      className="cursor-pointer hover:bg-white/30 px-2 py-1 text-[14px] rounded-[8px]"
                    >
                      {month.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* search event by place */}
        <div className=" w-full">
          <p className="text-[12px] text-brand-light-text font-medium">
            Location
          </p>
          <div className="relative">
            <LuMapPin
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary pointer-events-none pt-1"
            />
            <input
              className="border-none w-full outline-none mt-1.5 font-light text-[16px] placeholder:text-brand-primary text-brand-primary bg-[#F2F4FF] py-3 pl-11 pr-4 rounded-3xl "
              placeholder="Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>

        {/* Clear filter */}
        <button
          className="text-[#3D37F1] font-bold text-[16px] mt-3"
          onClick={clearFilters}
        >
          Clear filters
        </button>
      </div>
      {/* Mobile */} {/* Mobile */} {/* Mobile */}
      <div className="flex items-center justify-between md:hidden">
        <p className="text-[14px] text-brand-light-text">All events</p>

        <button
          onClick={() => {
            (setIsFilterOpen(true), openSheet);
          }}
          className="flex items-center gap-2 h-11 px-5 rounded-full bg-[#f0f1ff] text-[14px] font-medium text-brand-primary cursor-pointer"
        >
          <LuSlidersHorizontal size={16} />
          Filters
        </button>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* backdrop: click to close */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* sheet */}
          <div className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white p-6">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-300" />
            {/* title and close button */}
            <div className="flex justify-between">
              <h1 className="text-[24px] text-brand-primary font-bold ">
                Filters
              </h1>
              <button
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filters"
                className="p-2 text-brand-light-text cursor-pointer"
              >
                <LuX size={22} />
              </button>
            </div>

            {/* search event by title */}
            <div className=" w-full mt-5">
              <p className="text-[12px] text-brand-light-text font-medium">
                Search Event
              </p>
              <div className="relative">
                <LuSearch
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary pointer-events-none pt-1"
                />
                <input
                  className="border-none w-full outline-none mt-1.5 font-light text-[16px] placeholder:text-brand-primary text-brand-primary bg-[#F2F4FF] py-3 pl-11 pr-4 rounded-3xl "
                  placeholder="Search event"
                  value={draftSearchTerm}
                  onChange={(e) => setDraftSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter by Category */}
            <div className="w-full mt-4">
              <p className="text-[12px] text-brand-light-text font-medium mb-1.5">
                Category
              </p>
              <EventCategories
                category={draftCategory}
                setCategory={setDraftCategory}
              />
            </div>

            {/* search event by date */}
            <div className="w-full mt-4">
              <div>
                <p className="text-[12px] text-brand-light-text font-medium">
                  Date
                </p>

                <div className="relative border-none w-full outline-none mt-1.5 bg-[#F2F4FF] py-3 px-6 rounded-3xl">
                  {/* container */}
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative flex justify-between items-center cursor-pointer"
                  >
                    <p className="font-light text-[14px] text-brand-primary">
                      {dateLabel}
                    </p>

                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-brand-primary pb-1" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-brand-primary pb-1" />
                    )}
                  </div>

                  {/* Dropdown of event months */}
                  {isOpen && (
                    <div className="absolute top-full left-0 w-full z-20 mt-2 bg-brand-primary/10 backdrop-blur-md max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent rounded-2xl p-3">
                      {months.map((month) => (
                        <div
                          key={month.value}
                          onClick={() => {
                            setDraftDate(month.value);
                            setIsOpen(false);
                          }}
                          className="cursor-pointer hover:bg-white/30 px-2 py-1 text-[14px] rounded-[8px]"
                        >
                          {month.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* search event by place */}
            <div className=" w-full mt-4">
              <p className="text-[12px] text-brand-light-text font-medium">
                Location
              </p>
              <div className="relative">
                <LuMapPin
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-primary pointer-events-none pt-1"
                />
                <input
                  className="border-none w-full outline-none mt-1.5 font-light text-[16px] placeholder:text-brand-primary text-brand-primary bg-[#F2F4FF] py-3 pl-11 pr-4 rounded-3xl "
                  placeholder="Place"
                  value={draftPlace}
                  onChange={(e) => setDraftPlace(e.target.value)}
                />
              </div>
            </div>

            {/* Clear filter */}
            <div className="flex justify-between items-center mt-5 gap-3">
              <button
                className="text-[#3D37F1] font-semibold text-[16px] mt-3 border-2 border-[#3D37F1] py-3 px-7 rounded-3xl cursor-pointer
            "
                onClick={clearDrafts}
              >
                Clear filters
              </button>

              <button
                onClick={applyFilters}
                className="flex-1 rounded-3xl bg-[#f5157d] mt-3 text-[16px] py-3 font-semibold text-white cursor-pointer"
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
