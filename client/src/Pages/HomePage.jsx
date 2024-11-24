import React from "react";
import VoiceHandler from "./VoiceHandler";
import WorkingSpace from "./WorkingSpace";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Voice Interaction */}
      <div className="flex-1 flex justify-center items-center">
        <VoiceHandler />
      </div>

      {/* Interactive Workspace */}
      <div className="w-full h-1/4 bg-white p-4">
        <WorkingSpace />
      </div>
    </div>
  );
};

export default HomePage;
