import { createClient } from "agora-rtc-react";
import { ClientConfig } from "agora-rtc-sdk-ng";

const config: ClientConfig = {
  mode: "live",
  codec: "vp8",
};
const useClient = createClient(config);
export default useClient;
