import { useEffect } from "react";

export function BjScreen() {
  useEffect(() => {
    if (typeof window.extensionSDK === "undefined") {
      window.extensionSDK = window.AFREECA.ext();

      window.extensionSDK.handleInitialization((userInfo, broadInfo, playerInfo) => {
        console.log(userInfo);
        console.log(broadInfo);
        console.log(playerInfo);
      });

      window.extensionSDK.chat.listen((action, message) => {
        console.log(action);
        console.log(message);
      });
    }
  }, []);

  return (
    <div>
      <p>bj screen 입니다.</p>
      <h2>퀴즈를 입력하세요</h2>
      <div>
        <p>문제를 입력하세요(20자 이내)</p>
        <input />
        <p>정답을 입력하세요(20자 이내)</p>
        <input />
      </div>
    </div>
  );
}
