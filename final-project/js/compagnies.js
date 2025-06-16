document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("#compagnies ul");

    rows.forEach((row, index) => {
        const items = Array.from(row.children);
        const cloneItems = items.map((item) => item.cloneNode(true));

        row.append(...cloneItems);

        const totalWidth = row.scrollWidth / 2; // Car on a doublé les éléments
        const duration = totalWidth / 40; // vitesse du défilement

        // Appliquer l'animation différente selon la ligne
        if (index === 0) {
            row.style.animationName = "scrollLogos";
        } else {
            row.style.animationName = "scrollLogosReverse";
        }

        row.style.animationDuration = `${duration}s`;
        row.style.animationTimingFunction = "linear";
        row.style.animationIterationCount = "infinite";

        if (index === 1) {
            row.style.animationDelay = `${duration / 2}s`;
        }
    });
});
