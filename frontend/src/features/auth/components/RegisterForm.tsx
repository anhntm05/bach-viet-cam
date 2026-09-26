import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { REGISTERABLE_ROLES, ROLE_LABELS, ROLES } from "@/shared/constants/roles";

export function RegisterForm() {
  const { register: registerUser, isLoading, error } = useRegister();
  const [role, setRole] = useState<number>(ROLES.STUDENT);

  return (
<<<<<<< Updated upstream
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Vai trò</span>
        <select
          value={role}
          onChange={(event) => setRole(Number(event.target.value))}
          className="rounded border px-3 py-2"
          disabled={isLoading}
        >
          {REGISTERABLE_ROLES.map((registerableRole) => (
            <option key={registerableRole} value={registerableRole}>
              {ROLE_LABELS[registerableRole]}
            </option>
          ))}
        </select>
      </label>
      <GoogleLogin
        onSuccess={({ credential }) => {
          if (credential) void registerUser(credential, role);
        }}
        onError={() => undefined}
        useOneTap={false}
      />
      {isLoading && <p className="text-sm text-gray-600">Đang tạo tài khoản với Google...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
=======
    <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-[13px]">
      <div className="flex flex-col gap-[6px]">
        <label className="text-[13.5px] font-semibold text-bvc-muted">Họ và tên</label>
        <input
          {...register("name")}
          placeholder="Trần Minh Anh"
          className="h-[50px] w-full rounded-[15px] border border-bvc-border-strong bg-white px-[14px] text-[15px] text-bvc-ink placeholder:text-bvc-faint focus:border-bvc-accent focus:outline-none"
        />
        {errors.name && <p className="text-[12.5px] text-bvc-error">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className="text-[13.5px] font-semibold text-bvc-muted">Email trường</label>
        <input
          {...register("email")}
          type="email"
          placeholder="anhtm@fpt.edu.vn"
          className="h-[50px] w-full rounded-[15px] border border-bvc-border-strong bg-white px-[14px] text-[15px] text-bvc-ink placeholder:text-bvc-faint focus:border-bvc-accent focus:outline-none"
        />
        {errors.email && <p className="text-[12.5px] text-bvc-error">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className="text-[13.5px] font-semibold text-bvc-muted">Mật khẩu</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Ít nhất 8 ký tự"
          className="h-[50px] w-full rounded-[15px] border border-bvc-border-strong bg-white px-[14px] text-[15px] text-bvc-ink placeholder:text-bvc-faint focus:border-bvc-accent focus:outline-none"
        />
        {errors.password && <p className="text-[12.5px] text-bvc-error">{errors.password.message}</p>}
      </div>

      <div className="flex flex-col gap-[6px]">
        <label className="text-[13.5px] font-semibold text-bvc-muted">Xác nhận mật khẩu</label>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Nhập lại mật khẩu"
          className="h-[50px] w-full rounded-[15px] border border-bvc-border-strong bg-white px-[14px] text-[15px] text-bvc-ink placeholder:text-bvc-faint focus:border-bvc-accent focus:outline-none"
        />
        {errors.confirmPassword && <p className="text-[12.5px] text-bvc-error">{errors.confirmPassword.message}</p>}
      </div>

      {error && (
        <p className="rounded-[12px] bg-bvc-accent-tint px-[12px] py-[9px] text-[13.5px] text-bvc-accent-text">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-[2px] min-h-[52px] cursor-pointer rounded-[16px] bg-bvc-ink text-[16px] font-bold text-white disabled:opacity-50"
      >
        {isLoading ? "Đang đăng ký..." : "Đăng ký"}
      </button>
    </form>
>>>>>>> Stashed changes
  );
}
