import cron from "node-cron";
import { storeInstrument } from "./instrument";

export const fetchInstrumentScheduler = () => {
  cron.schedule(
    "30 8 * * *",
    async () => {
      await storeInstrument();
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
};
