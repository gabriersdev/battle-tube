import './tooltip.css';
import {useEffect} from "react";
import Util from "../../util/Util.js";

export default function Tootip() {
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("mouseover", (event) => {
      const target = event.target;
      
      if (!target.hasAttribute("data-tooltip")) {
        const closestDataTooltip = target?.closest("[data-tooltip]")?.getAttribute("data-tooltip");
        if (closestDataTooltip && typeof closestDataTooltip == "string" && closestDataTooltip.length > 0) target.dataset.tooltip = closestDataTooltip;
        else {
          return;
        }
      }
      
      if (target.hasAttribute("data-tooltip")) {
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = Util.capitalizeText(target.getAttribute("data-tooltip"));
        
        // TODO - Aplicar estilos via CSS ou styled-components
        if (target.closest("dialog")) {
          target.closest("dialog").appendChild(tooltip);
          tooltip.style.backgroundColor = "#361788";
        }
        else document.body.appendChild(tooltip);
        
        const rect = target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        tooltip.style.opacity = "1";
        tooltip.style.zIndex = "1001";
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
