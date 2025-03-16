import './tooltip.css';
import {useEffect} from "react";
import Util from "../../util/Util.js";

export default function Tootip() {
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("mouseover", (event) => {
      const target = event.target;
      if (target.hasAttribute("data-tooltip")) {
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = Util.capitalizeText(target.getAttribute("data-tooltip"));
        document.body.appendChild(tooltip);

        const rect = target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible";
        tooltip.classList.add('inter');

        target.addEventListener("mouseleave", () => {
          tooltip.remove();
        }, {once: true});
      }
    });
    // });
  }, []);
}
