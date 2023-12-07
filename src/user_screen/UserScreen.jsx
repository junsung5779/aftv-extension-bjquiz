import {useEffect} from "react";
import reactLogo from '/src/assets/react.svg';

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
    <>
    <img src={reactLogo} alt="reactLogo"/>
      user screen
    </>
  )
}