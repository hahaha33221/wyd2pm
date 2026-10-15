import React, { useState } from "react";
import { useStore } from "../../context/StoreContext";
import HeaderPanel from "./HeaderPanel";
import Sidebar from "./Sidebar";
import FaqTabContent from "./FaqTabContent";
import MeetingInfoView from "./MeetingInfoView";
import OpinionsView from "./OpinionsView";
import IntroScreen from "./IntroScreen";
import LanguageModal from "../common/LanguageModal";

const readIntroSeen = () => {
  try {
    return sessionStorage.getItem("lfaq.intro") === "1";
  } catch {
    return false;
  }
};

const START = { view: "qa", section: "all", topic: "all", sub: "all", opTopic: "all" };

export default function ParticipantView() {
  const { faqs } = useStore();
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // 왼쪽 네비게이션에서 고른 화면과 분류
  const [nav, setNav] = useState(START);
  // 처음 들어올 때만 로고 화면을 보여줍니다 (같은 창에서 새로고침하면 바로 본문).
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

  const navigate = (next) => {
    setNav({ ...START, ...next });
    const main = document.querySelector(".app-main");
    if (main) window.scrollTo({ top: main.offsetTop - 8, behavior: "smooth" });
  };

  if (!entered) {
    return <IntroScreen onEnter={handleEnter} />;
  }

  return (
    <div className="app-shell page-enter">
      <Sidebar
        faqs={faqs}
        nav={nav}
        onNavigate={navigate}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="participant-view-root">
        <HeaderPanel
          onOpenLangModal={() => setIsLangModalOpen(true)}
          onOpenMenu={() => setMenuOpen(true)}
        />

        <main className="participant-main app-main">
          {nav.view === "info" && <MeetingInfoView />}
          {nav.view === "opinions" && <OpinionsView topic={nav.opTopic} />}
          {nav.view === "qa" && (
            <FaqTabContent
              faqs={faqs}
              section={nav.section}
              topic={nav.topic}
              sub={nav.sub}
              onOpenMenu={() => setMenuOpen(true)}
            />
          )}
        </main>
      </div>

      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </div>
  );
}
