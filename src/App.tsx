import { useState } from "react";
import VideoCall from "./VideoCall";
import ChannelForm from "./ChannelForm";

const App = () => {
  const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [token, setToken] = useState("");
  return (
    <div>
      <h1 className="heading">Agora Video Call Demo</h1>
      {inCall ? (
        <VideoCall
          setInCall={setInCall}
          channelName={channelName}
          token={token}
        />
      ) : (
        <ChannelForm
          setInCall={setInCall}
          setChannelName={setChannelName}
          setToken={setToken}
        />
      )}
    </div>
  );
};

export default App;
