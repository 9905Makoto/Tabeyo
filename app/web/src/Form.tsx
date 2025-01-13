import { useState } from "react";
import "./Form.css";
import tabeyoLogo from "./assets/tabeyo.svg";

function Form() {
  const [userId, setUserId] = useState<string>("");
  const [userIdError, setUserIdError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserId(value);

    // バリデーションチェック
    if (!/^[A-Za-z0-9]+$/.test(value)) {
      setUserIdError("英数字のみ入力してください");
    } else {
      setUserIdError("");
    }
  };

  const validatePassword = (value: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (value.length < minLength) {
      return `パスワードは${minLength}文字以上にしてください。`;
    }
    if (!hasUpperCase) {
      return "少なくとも1つの大文字を含めてください。";
    }
    if (!hasLowerCase) {
      return "少なくとも1つの小文字を含めてください。";
    }
    if (!hasNumber) {
      return "少なくとも1つの数字を含めてください。";
    }
    if (!hasSpecialChar) {
      return "少なくとも1つの記号を含めてください。";
    }
    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const validationError = validatePassword(value);
    setPassword(value);
    setPasswordError(validationError);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Tabeyo logo"
            src={tabeyoLogo}
            className="logo mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            新規ユーザー登録
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="userid"
                className="block text-sm/6 font-medium text-gray-900"
              >
                ユーザーID
              </label>
              <div className="mt-2">
                <input
                  id="userid"
                  name="userid"
                  type="text"
                  maxLength={16}
                  required
                  autoComplete="username"
                  value={userId}
                  onChange={handleUserIdChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#82C05A] sm:text-sm/6"
                />
              </div>
              {userIdError && (
                <p className="text-red-600 text-sm mt-2">{userIdError}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  パスワード
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#82C05A] hover:text-[#6FA94B]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#82C05A] sm:text-sm/6"
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#82C05A] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#6FA94B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#82C05A]"
              >
                登録
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            すでに登録済みですか?{" "}
            <a
              href="#"
              className="font-semibold text-[#82C05A] hover:text-[#6FA94B]"
            >
              ログインはこちらから
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
