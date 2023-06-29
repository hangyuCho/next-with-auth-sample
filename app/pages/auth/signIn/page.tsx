"use client";
import Button from "@/components/Button";
import TextBox from "@/components/TextBox";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  const onSubmit = async () => {
    await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox
          lableText="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          lableText="Password"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
