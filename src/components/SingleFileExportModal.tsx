import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, Sparkles } from 'lucide-react';
import { STANDALONE_HTML_CODE } from '../data/standaloneHtmlCode';

interface SingleFileExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleFileExportModal: React.FC<SingleFileExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([STANDALONE_HTML_CODE], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "rawla-haveli-hotel.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-6 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#0B192C] text-white px-5 py-4 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#F4E8C1]">
                Single-File HTML + Tailwind CSS + Native JS Deliverable
              </p>
              <p className="text-xs text-slate-300">
                100% self-contained code. Ready to copy, paste, and run in any browser.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-600 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Includes Tailwind CSS CDN + Google Fonts + Razorpay Mock Modal + Mobile Responsive Design</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#B59325] text-[#0B192C] font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire Code'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg bg-[#0B192C] hover:bg-[#162C46] text-white font-medium flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Code Preview */}
        <div className="p-4 flex-1 overflow-y-auto bg-slate-900 font-mono text-xs text-slate-200">
          <pre className="whitespace-pre-wrap">{STANDALONE_HTML_CODE}</pre>
        </div>
      </div>
    </div>
  );
};
