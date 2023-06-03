const drags = document.querySelectorAll(".task");
const drops = document.querySelectorAll(".swim-lane");

drops.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    let selected = e.target;
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const currentTask = selected;

    if (!bottomTask) {
      zone.appendChild(currentTask);
    } else {
      zone.insertBefore(currentTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoubdingClientRect();

    const offset = mouseY - top;
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });
  return closestTask;
};
