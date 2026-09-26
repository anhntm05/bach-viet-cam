import { useState } from "react";
import { ChevronRight, Music2 } from "lucide-react";
import { MobileHeader } from "@/shared/components/bvc";

export function ProfilePage() {
  const [notificationsOn, setNotificationsOn] = useState(true);

  return (
    <div className="flex min-h-dvh justify-center bg-bvc-surface">
      <div className="flex h-dvh w-full max-w-[428px] flex-col overflow-hidden bg-white">
        <MobileHeader title="Hồ sơ của tôi" />

        <div className="flex-1 overflow-y-auto">
          {/* Avatar section */}
          <div className="mt-4 flex flex-col items-center px-[14px]">
            <div className="flex size-[72px] items-center justify-center rounded-full bg-bvc-surface">
              <span className="text-[26px] font-bold text-bvc-ink">TM</span>
            </div>
            <h2 className="mt-2 text-[20px] font-extrabold text-bvc-ink">
              Trần Minh Anh
            </h2>
            <p className="text-[13px] text-bvc-muted">
              Sinh viên · FPT University
            </p>
          </div>

          {/* Instrument card */}
          <div className="mx-[14px] mt-4 rounded-[20px] border border-bvc-border p-[16px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-bvc-muted">
              Nhạc cụ đang học
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-bvc-accent-tint">
                <Music2 size={18} className="text-bvc-accent-text" strokeWidth={2} />
              </div>
              <span className="flex-1 text-[15px] font-bold text-bvc-ink">
                Đàn tranh
              </span>
              <span className="rounded px-2 py-1 bg-bvc-surface text-[12px] text-bvc-muted">
                Trung cấp
              </span>
            </div>
            <button
              type="button"
              className="mt-2 cursor-pointer text-[13px] font-semibold text-bvc-accent-text"
            >
              Đổi nhạc cụ
            </button>
          </div>

          {/* Stats grid */}
          <div className="mx-[14px] mt-3 grid grid-cols-3 gap-3">
            {[
              { label: "Bản thu", value: "47", color: "text-bvc-ink" },
              { label: "Streak", value: "7", color: "text-bvc-ink" },
              { label: "Accuracy", value: "82%", color: "text-bvc-ok" },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-[16px] bg-bvc-surface p-[12px]"
              >
                <span
                  className={`font-bvc-mono text-[24px] font-bold ${color}`}
                >
                  {value}
                </span>
                <span className="mt-1 text-[12px] text-bvc-muted">{label}</span>
              </div>
            ))}
          </div>

          {/* Settings list */}
          <div className="mx-[14px] mt-4">
            <p className="text-[13px] font-bold uppercase tracking-wide text-bvc-muted">
              Cài đặt
            </p>
            <div className="mt-2">
              {/* Notifications row */}
              <div className="flex h-[50px] items-center justify-between border-b border-bvc-border px-2">
                <span className="text-[15px] text-bvc-ink">Thông báo</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={notificationsOn}
                  onClick={() => setNotificationsOn((p) => !p)}
                  className={`relative inline-flex h-[26px] w-[46px] cursor-pointer items-center rounded-full transition-colors ${
                    notificationsOn ? "bg-bvc-accent" : "bg-bvc-bar"
                  }`}
                >
                  <span
                    className={`absolute size-[20px] rounded-full bg-white shadow transition-transform ${
                      notificationsOn ? "translate-x-[22px]" : "translate-x-[3px]"
                    }`}
                  />
                </button>
              </div>

              {/* Language row */}
              <div className="flex h-[50px] items-center justify-between border-b border-bvc-border px-2">
                <span className="text-[15px] text-bvc-ink">Ngôn ngữ</span>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-bvc-muted">Tiếng Việt</span>
                  <ChevronRight size={16} className="text-bvc-faint" />
                </div>
              </div>

              {/* Audio quality row */}
              <div className="flex h-[50px] items-center justify-between border-b border-bvc-border px-2">
                <span className="text-[15px] text-bvc-ink">
                  Chất lượng âm thanh
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-bvc-muted">Cao</span>
                  <ChevronRight size={16} className="text-bvc-faint" />
                </div>
              </div>
            </div>
          </div>

          {/* Sign out */}
          <button
            type="button"
            className="mx-[14px] mt-4 h-[48px] w-[calc(100%-28px)] cursor-pointer rounded-[14px] border border-bvc-error text-[15px] font-bold text-bvc-error"
          >
            Đăng xuất
          </button>

          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}
