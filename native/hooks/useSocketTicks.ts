import socket from "@/config/socket.config";
import { useState } from "react";

const useSocketTick = () => {
  const [tick, setTick] = useState<any>({});

  socket.on("tick", (data) => {
    setTick(data);
  });

  return { tick };
};

export default useSocketTick;
