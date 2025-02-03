'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[var(--vscode-bg)]">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
          <div className="p-6 rounded-lg bg-[var(--vscode-bg-light)] border border-[var(--vscode-border)]">
            <h1 className="text-[var(--vscode-text)] text-2xl font-medium">Hello World</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--vscode-bg)]">
      <div 
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20"
        data-bybit-channel-name="AbESkmqKuM4pv-nzHT89A"
        data-bybit-is-default-wallet="true"
      >
        <div className="p-6 rounded-lg bg-[var(--vscode-bg-light)] border border-[var(--vscode-border)]">
          <h1 className="text-[var(--vscode-text)] text-2xl font-medium">Hello World</h1>
        </div>
      </div>
    </div>
  );
}
