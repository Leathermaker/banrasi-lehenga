import { useEffect } from "react";
import { Router } from "./routes";
import useNavbarStore from "./store/NavbarStore";
import "./index.css";

function App() {
  const { isOpen } = useNavbarStore();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className={`relative hide-scrollbar ${isOpen && "overflow-hidden"} `}>
      <Router />
    </div>
  );
}

export default App;
