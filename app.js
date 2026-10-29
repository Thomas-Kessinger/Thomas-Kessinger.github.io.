// Small, optional behaviour. Every page still works if this file fails to load.

// Tells the CSS that JavaScript is running, so the phone menu can start closed.
document.documentElement.classList.add("js");

// ---------- Phone menu ----------
// On narrow screens the nav is hidden behind a "Menu" button.
function setUpMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    // aria-expanded tells screen readers whether the menu is open
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "Close" : "Menu";
  });
}

// ---------- Skills strip (About page) ----------
// Each skill button has data-skill="x". Each holdings row lists the skills
// it built in data-skills="x y". Choosing a skill lights up matching rows.
function setUpSkills() {
  const buttons = document.querySelectorAll(".skill-btn");
  const table = document.querySelector(".holdings");
  const status = document.querySelector(".skills-status");
  if (!buttons.length || !table || !status) return;

  const rows = table.querySelectorAll("tbody tr");
  const defaultText = status.textContent;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const skill = button.dataset.skill;
      const wasOn = button.getAttribute("aria-pressed") === "true";

      // only one skill at a time: turn every button off first
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });

      // clicking the active skill again clears the filter
      if (wasOn) {
        table.classList.remove("filtering");
        rows.forEach(function (row) { row.classList.remove("lit"); });
        status.textContent = defaultText;
        return;
      }

      button.setAttribute("aria-pressed", "true");
      table.classList.add("filtering");

      let count = 0;
      rows.forEach(function (row) {
        const skills = (row.dataset.skills || "").split(" ");
        const match = skills.includes(skill);
        row.classList.toggle("lit", match);
        if (match) count += 1;
      });

      // empty state: say so instead of leaving a dimmed table with no explanation
      if (count === 0) {
        status.textContent = button.dataset.empty || "Nothing tagged with this skill yet.";
      } else {
        status.textContent = button.textContent.trim() + ": built in " + count +
          (count === 1 ? " holding" : " holdings") + " below. Tap it again to show all.";
      }
    });
  });
}

setUpMenu();
setUpSkills();
