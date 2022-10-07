import { useEffect, useRef, useState } from "react";
import { useNotifications } from "../../hooks/useNotifications";
import { Scene } from "../Scene";
import { SCENE_LIST, SCENE_CHANGE_TIME } from "./constants";

export const SceneManager = () => {
  const [currentScene, setCurrentScene] = useState(SCENE_LIST[1]);
  const [isPageActive, setIsPageActive] = useState(true);
  const { isPermissionGranted, askPermissions, sendNotification } =
    useNotifications();
  const sceneChangeInterval = useRef(null);

  useEffect(() => {
    sceneChangeInterval.current = setInterval(() => {
      const sceneIndex = Math.floor(Math.random() * SCENE_LIST.length);
      const randomScene = SCENE_LIST[sceneIndex];

      setCurrentScene(randomScene);
    }, SCENE_CHANGE_TIME);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        setIsPageActive(true);
      } else {
        setIsPageActive(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!isPageActive) {
      sendNotification(currentScene.notificationData);
    }
  }, [currentScene]);

  return (
    <div className="w-screen h-screen">
      {!isPermissionGranted && (
        <button onClick={askPermissions} className="p-5 bg-gray-400 w-full">
          Ask notify permissions
        </button>
      )}
      <Scene
        key={currentScene.id}
        frameText={currentScene.frameText}
        frameTextPosition={currentScene.frameTextPosition}
        frameImageSrc={currentScene.frameImg}
      />
    </div>
  );
};
