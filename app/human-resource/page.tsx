"use client";

import React from "react";
import Link from "next/link";
import { Info, Mail, Phone, ArrowLeft } from "lucide-react";

export default function HumanResourcePage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-500" />

        {/* Heading Icon & Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Info className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
            有料職業紹介事業に関するお知らせ
          </h1>
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mt-2">
            Notice Regarding Paid Job Placement Service
          </p>
        </div>

        {/* Japanese Notice Body */}
        <div className="space-y-6 text-gray-700 text-base leading-relaxed border-t border-b border-gray-100 py-8 mb-8">
          <p className="font-medium text-gray-900">
            TQC株式会社のホームページをご覧いただき、誠にありがとうございます。
          </p>
          <p>
            現在、弊社は有料職業紹介事業の新規ライセンス申請手続きを進めております。
            これに伴い、関係法令（職業安定法等）を遵守するため、ライセンス取得が完了するまでの期間、求人情報および求職者様の紹介に関するすべてのサービス案内を一時的に停止させていただいております。
          </p>
          <div className="bg-yellow-50/50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
            <p className="text-sm text-yellow-800 font-medium">
              ※ 新たな有料職業紹介事業許可が交付され次第、本ページにて正式なサービス案内を再開させていただきます。ご不便をおかけいたしますが、ご理解のほどよろしくお願い申し上げます。
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-sm text-gray-600 space-y-3">
          <h2 className="font-bold text-gray-900 text-base mb-2">【本件に関するお問い合わせ先】</h2>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-blue-600 shrink-0" />
            <span><strong>Tel:</strong> (03) 6907-1219</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-600 shrink-0" />
            <span><strong>Email:</strong> info@tqc-jp.com | tqcjapan2022@gmail.com</span>
          </div>
          <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
            TQC株式会社 事務局
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition duration-300 font-bold py-3 px-8 rounded-xl text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>トップページへ戻る</span>
          </Link>
        </div>

      </div>
    </div>
  );
}