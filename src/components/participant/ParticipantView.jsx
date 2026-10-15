import React, { useState } from "react";
import { useStore } from "../../context/StoreContext";
import HeaderPanel from "./HeaderPanel";
import FaqTabContent from "./FaqTabContent";
import IntroScreen from "./IntroScreen";
import LanguageModal from "../common/LanguageModal";

const readIntroSeen = () => {
  try {
    return sessionStorage.getItem("lfaq.intro") === "1";
  } catch {
    return false;
  }
};

export default function ParticipantView() {
  const { faqs } = useStore();
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  // 처음 들어올 때만 로고 화면을 보여줍니다 (같은 창에서 새로고침하면 바로 FAQ).
  const [entered, setEntered] = useState(readIntroSeen);

  const handleEnter = () => {
    try {
      sessionStorage.setItem("lfaq.intro", "1");
    } catch {
      /* 저장이 막혀 있어도 그냥 들어갑니다 */
    }
    setEntered(true);
    window.scrollTo(0, 0);
  };

  if (!entered) {
    return <IntroScreen onEnter={handleEnter} />;
  }

  return (
    <div className="participant-view-root page-enter">
      {/* Top Header with Centered WYD Seoul Logo */}
      <HeaderPanel onOpenLangModal={() => setIsLangModalOpen(true)} />

      {/* Main Container */}
      <main className="participant-main">
        {/* FAQ Content Display */}
        <div className="tab-content-area">
          <FaqTabContent faqs={faqs} />
        </div>
      </main>

      {/* Language Selector Modal */}
      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </div>
  );
}
