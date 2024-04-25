"use client";
import React, { useEffect, useState } from "react";
import Calendar from "@/components/Calendar";
import AttenanceInfo from "@/components/AttenanceInfo";
import AttendButton from "@/components/AttendButton";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let username = localStorage.getItem("name");
    let userid = localStorage.getItem("id");
    // if (username == null) {
    //   router.push("/");
    // }
    setName(username);
    setId(userid);
  }, []);

  function Logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    router.push("/");
  }

  function goToQnA() {
    router.push("/qa"); // "qna"는 실제로 QnA 섹션의 경로에 맞게 수정해야 합니다.
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className="flex flex-col gap-3">
    <div className="flex justify-between items-center w-full">
      <p className="text-xl font-bold">반갑습니다 {name}님</p>
      <Button onClick={goToQnA}>QnA</Button>
    </div>

    <AttenanceInfo />
    <AttendButton />
    <Calendar />
    <p>로그아웃</p>
    <Button onClick={Logout}>로그아웃</Button>
  </div>
</main>

  );
};

export default page;
