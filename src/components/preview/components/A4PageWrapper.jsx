import React, { useEffect, useRef, useState } from 'react';

const A4PageWrapper = ({ children }) => {
  const contentRef = useRef(null);
  const [pageInfo, setPageInfo] = useState({ height: 0, isOnePage: true });

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const h = contentRef.current.scrollHeight;
        setPageInfo({
          height: h,
          isOnePage: h <= 1060,
        });
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="w-full max-w-[800px] mx-auto a4-page-wrapper">
      {/* Live 1-Page Status Indicator (Hidden in print) */}
      <div
        className={`exclude-print sticky top-0 z-30 flex items-center justify-between px-3.5 py-2 text-xs font-semibold rounded-lg shadow-sm mb-4 border backdrop-blur-md transition-all ${
          pageInfo.isOnePage 
            ? "bg-emerald-950/80 border-emerald-800/80 text-emerald-300"
            : "bg-rose-950/80 border-rose-800/80 text-rose-300"
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-1.5">
            {pageInfo.isOnePage ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Fits Cleanly on 1 Page</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                <span>Exceeds 1 Page Threshold</span>
              </>
            )}
          </span>
          {!pageInfo.isOnePage && (
            <span className="text-[11px] font-normal opacity-85">
              (Remove an item or bullet point to pull up onto Page 1)
            </span>
          )}
        </span>
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/40 border border-white/10">
          {pageInfo.height}px / 1060px
        </span>
      </div>

      {/* Resume Content Sheet - height dynamically shrinks when items are removed */}
      <div
        ref={contentRef}
        className="relative bg-white shadow-2xl ring-1 ring-slate-900/10 p-7 rm-padding-print transition-all duration-200"
      >
        {children}

        {/* Visual Page 1 Boundary Marker on Screen */}
        <div
          className="exclude-print absolute left-0 right-0 pointer-events-none border-b-2 border-dashed border-rose-400/80 text-right pr-2 text-[10px] text-rose-500 font-mono tracking-wide"
          style={{ top: '1060px' }}
        >
          ▲ Page 1 End (A4 Cutoff Boundary)
        </div>
      </div>
    </div>
  );
};

export default A4PageWrapper;
