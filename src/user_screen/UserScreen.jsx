import { useEffect } from "react";
import reactLogo from "/src/assets/react.svg";

export function UserScreen() {
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
      <img src={reactLogo} alt="reactLogo" />
      <p>user screen 입니다.</p>
      <h3>내가 지금 먹고싶은 과일은?</h3>
      <input />
    </div>
  );
}
