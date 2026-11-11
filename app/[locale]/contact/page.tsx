"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, Building2, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const tProfile = useTranslations("CompanyProfile");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrorMessage(t("fail"));
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(t("fail"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* --- HERO HEADER (LIGHT, SOFT ON THE EYES) --- */}
      <section className="bg-gradient-to-b from-slate-100/80 via-slate-50 to-white text-slate-800 py-12 sm:py-16 px-4 sm:px-6 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold tracking-widest uppercase">
            {t("badge")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {t("formSubtitle")}
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT (PROFILE & FORM) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: 会社概要 (Company Profile) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-sm"></span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {tProfile("heading")}
                </h2>
                <span className="text-xs text-slate-400 font-mono uppercase">
                  {tProfile("subheading")}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                日本国 法務省・国税庁・東京都知事登録 正規法人
              </p>
            </div>

            {/* Office Pictures */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-44 relative border border-slate-200 shadow-xs">
                <Image
                  src="/company-building.jpg"
                  alt="TQC Head Office Building Ikebukuro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-semibold">本社：佐藤ビルディング</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-44 relative border border-slate-200 shadow-xs">
                <Image
                  src="/company-team.jpg"
                  alt="TQC Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-semibold">プロフェッショナルチーム</span>
                </div>
              </div>
            </div>

            {/* Official Corporate Data Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs text-left border-collapse">
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold w-32 sm:w-36 shrink-0">
                      {tProfile("companyName")}
                    </th>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {tProfile("companyNameVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("rep")}
                    </th>
                    <td className="py-3 px-4 text-slate-900 font-medium">
                      {tProfile("repVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("corpNo")}
                    </th>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">
                      {tProfile("corpNoVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("license")}
                    </th>
                    <td className="py-3 px-4 text-blue-700 font-bold flex items-center gap-1.5">
                      <ShieldCheck size={14} className="shrink-0" />
                      <span>{tProfile("licenseVal")}</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("capital")} / {tProfile("est")}
                    </th>
                    <td className="py-3 px-4 text-slate-800 font-medium">
                      {tProfile("capitalVal")} / {tProfile("estVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("hq")}
                    </th>
                    <td className="py-3 px-4 text-slate-800">
                      {tProfile("hqVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("vnOffice")}
                    </th>
                    <td className="py-3 px-4 text-slate-800">
                      {tProfile("vnOfficeVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("tel")}
                    </th>
                    <td className="py-3 px-4 text-slate-900 font-mono font-medium">
                      {tProfile("telVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("pic")}
                    </th>
                    <td className="py-3 px-4 text-slate-900 font-semibold">
                      {tProfile("picVal")}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100/70 text-slate-600 font-semibold">
                      {tProfile("hours")}
                    </th>
                    <td className="py-3 px-4 text-slate-700">
                      {tProfile("hoursVal")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {t("formTitle")}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  ※ 通常1営業日以内に担当者よりご連絡を差し上げます。
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-white rounded-lg border border-emerald-200 shadow-xs space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {t("successTitle")}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {t("successDesc")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block px-6 py-2.5 rounded-md border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                  >
                    別の問い合わせを送信
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder={t("namePlaceholder")}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t("email")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="Email"
                        required
                        placeholder={t("emailPlaceholder")}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t("phone")}
                      </label>
                      <input
                        type="tel"
                        name="Phone"
                        placeholder={t("phonePlaceholder")}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("subject")} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="Subject"
                      required
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900"
                    >
                      <option value="T-Homes 不動産">{t("opt1")}</option>
                      <option value="競売・公売物件 (Keibai-Koubai)">{t("opt2")}</option>
                      <option value="B2B調達 (Aka-pla)">{t("opt3")}</option>
                      <option value="企業データベース (Kigyoulist)">{t("opt4")}</option>
                      <option value="その他">{t("opt5")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("message")} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="Message"
                      rows={5}
                      required
                      placeholder={t("messagePlaceholder")}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-xs disabled:bg-slate-400 cursor-pointer"
                  >
                    {loading ? t("sending") : t("send")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
