"use client";

import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

type PortfolioImageUploadProps = {
  value: string | null;
  onChange: (base64: string | null) => void;
};

export function PortfolioImageUpload({ value, onChange }: PortfolioImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onloadend = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {value ? (
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-navy/10 group">
          <Image src={value} alt="Portfolio" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={16} className="text-red-500" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
          }}
          className={`flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
            isDragging ? "border-navy bg-navy/5" : "border-navy/20 hover:border-navy/40 hover:bg-navy/5"
          }`}
        >
          <Upload size={24} className="text-navy/40 mb-2" />
          <span className="text-sm text-navy/60">Cliquez ou glissez une image</span>
        </div>
      )}
      <input type="file" ref={fileInputRef} onChange={(e) => e.target.files && handleFile(e.target.files[0])} accept="image/*" className="hidden" />
    </div>
  );
}