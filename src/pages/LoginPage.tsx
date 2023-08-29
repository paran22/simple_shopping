import React from "react";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <section className="flex flex-col gap-10 justify-start pt-20 items-center h-screen">
      <p className="font-bold text-3xl">로그인</p>
      <Button icon={<FcGoogle />} name="구글로 로그인하기" onClick={() => {}} />
    </section>
  );
}
