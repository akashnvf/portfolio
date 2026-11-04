import React from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/30 mx-auto flex items-center justify-center text-[#FF6A00]">
          <AlertTriangle size={32} />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6A00]">
            404 Error
          </p>
          <h1 className="text-4xl font-extrabold text-[#F5F5F5]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#9E9EA6] leading-relaxed">
            The page or resource you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<ArrowLeft size={16} />}
          >
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}

