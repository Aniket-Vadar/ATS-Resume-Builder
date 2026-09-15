import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {
  const print = () => {
    window.print();
  };

  return (
    <div className="exclude-print fixed bottom-5 right-10 flex flex-col items-end gap-1.5 z-50">
      <div className="bg-slate-900 text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-95 pointer-events-none flex items-center gap-1 border border-slate-700">
        <span>Destination: <b>Save as PDF</b></span>
      </div>
      <button
        aria-label="Download Resume"
        className="font-bold rounded-full bg-indigo-600 text-white shadow-xl hover:bg-indigo-700 hover:scale-105 transition-transform p-3 flex items-center justify-center cursor-pointer"
        onClick={print}
        title="Download Resume (Select 'Save as PDF' as Destination)"
      >
        <MdPictureAsPdf className="w-8 h-8" />
      </button>
    </div>
  );
};

export default WinPrint;