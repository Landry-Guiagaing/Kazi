"use client";

import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

type ImageUploadProps = {
  value: string | null;
  onChange: (base64: string | null) => void;
  label: string;
  userName?: string | null;
  className?: string;
};

export function ImageUpload({ value, onChange, label, userName, className = "" }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onloadend = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-navy">{label}</label>
      
      {value ? (
        <div className="relative group w-24 h-24 rounded-full overflow-hidden border-2 border-navy/10">
          <Image src={value} alt="Upload" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={20} className="text-white" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`flex items-center gap-3 cursor-pointer rounded-lg border-2 border-dashed p-3 transition-colors ${
            isDragging ? "border-navy bg-navy/5" : "border-navy/20 hover:border-navy/40 hover:bg-navy/5"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5">
            <Upload size={20} className="text-navy/40" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-navy">Ajouter une photo</span>
            {userName && <span className="text-xs text-muted">{userName}</span>}
          </div>
        </div>
      )}
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}