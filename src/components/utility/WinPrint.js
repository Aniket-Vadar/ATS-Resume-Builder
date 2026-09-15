import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {
  const print = () => {
    window.print();
  };

  return (
    <div className="exclude-print fixed bottom-5 right-10 flex flex-col items-end gap-1.5 z-50">
      <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-95 pointer-events-none flex items-center gap-1 border border-gray-700">
        <span>Destination: <b>Save as PDF</b></span>
      </div>
      <button
        aria-label="Download Resume"
        className="font-bold rounded-full bg-white text-fuchsia-600 shadow-xl border-2 border-fuchsia-600 hover:scale-105 transition-transform p-2 flex items-center justify-center cursor-pointer"
        onClick={print}
        title="Download Resume (Select 'Save as PDF' as Destination)"
      >
        <MdPictureAsPdf className="w-10 h-10" />
      </button>
    </div>
  );
};

export default WinPrint;