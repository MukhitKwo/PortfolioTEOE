let currentSection = 0;
const sections = document.querySelectorAll(".section");

window.addEventListener("wheel", (event) => {
	if (event.deltaY > 0) {
		currentSection = Math.min(currentSection + 1, sections.length - 1);
	} else {
		currentSection = Math.max(currentSection - 1, 0);
	}
	sections[currentSection].scrollIntoView({ behavior: "smooth" });
});

// Add arrow key navigation
window.addEventListener("keydown", (event) => {
	if (event.key === "ArrowDown") {
		currentSection = Math.min(currentSection + 1, sections.length - 1);
		sections[currentSection].scrollIntoView({ behavior: "smooth" });
	} else if (event.key === "ArrowUp") {
		currentSection = Math.max(currentSection - 1, 0);
		sections[currentSection].scrollIntoView({ behavior: "smooth" });
	}
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const menuButtons = {
        aboutButton: "section2",
        skillsButton: "section3",
        projectsButton: "section4",
        expButton: "section5",
        whoButton: "section6"
    };
    
    let currentSection = 0;

    // Helper function to update active button
    const updateActiveButton = (currentSectionId) => {
        for (const [buttonId, sectionId] of Object.entries(menuButtons)) {
            const button = document.getElementById(buttonId);
            if (sectionId === currentSectionId) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        }
    };

    // Scroll event listener to update active button on scroll
    window.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                currentSection = Array.from(sections).indexOf(section);
                updateActiveButton(section.id);
            }
        });
    });

    // Add event listeners for menu button clicks
    for (const [buttonId, sectionId] of Object.entries(menuButtons)) {
        const button = document.getElementById(buttonId);
        const targetSection = document.getElementById(sectionId);

        if (button && targetSection) {
            button.addEventListener("click", () => {
                targetSection.scrollIntoView({ behavior: "smooth" });
                currentSection = Array.from(sections).indexOf(targetSection);
                updateActiveButton(sectionId); // Update button immediately
            });
        }
    }

    // Add functionality for the "Conctactar" button
    const beginButton = document.getElementById("begin-btn");
    if (beginButton) {
        beginButton.addEventListener("click", () => {
            const contactSection = document.getElementById("section7");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                currentSection = Array.from(sections).indexOf(contactSection);
            }
        });
    }

	const portfolioLogo = document.getElementById("portfolioLogo");
    if (portfolioLogo) {
        portfolioLogo.addEventListener("click", () => {
            const contactSection = document.getElementById("section1");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                currentSection = Array.from(sections).indexOf(contactSection);
            }
        });
    }

    // Wheel and arrow key navigation
    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            currentSection = Math.max(currentSection - 1, 0);
        }
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
        updateActiveButton(sections[currentSection].id);
    });

    // Arrow key navigation
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else if (event.key === "ArrowUp") {
            currentSection = Math.max(currentSection - 1, 0);
        }
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
        updateActiveButton(sections[currentSection].id);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const beginButton = document.getElementById("begin-btn");

    // Update the scroll target for the "Conctactar" button
    beginButton.addEventListener("click", function () {
        const contactSection = document.getElementById("section7");
        contactSection.scrollIntoView({ behavior: "smooth" });
        currentSection = Array.from(document.querySelectorAll(".section")).indexOf(contactSection);
    });
});



document.addEventListener("DOMContentLoaded", function () {
	const bricks = document.querySelectorAll(".brick");

	// Add event listeners for hover
	bricks.forEach((brick, index) => {
		brick.addEventListener("mouseenter", () => {
			if (index === 0) {
				// Box 1 is hovered
				bricks[1].classList.add("shrink"); // Shrink box 2
			} else if (index === 1) {
				// Box 2 is hovered
				bricks[0].classList.add("shrink"); // Shrink box 1
			} else if (index === 2) {
				// Box 3 is hovered
				bricks[3].classList.add("shrink"); // Shrink box 4
			} else if (index === 3) {
				// Box 4 is hovered
				bricks[2].classList.add("shrink"); // Shrink box 3
			}
		});

		brick.addEventListener("mouseleave", () => {
			if (index === 0) {
				// Box 1 is hovered
				bricks[1].classList.remove("shrink"); // Reset box 2
			} else if (index === 1) {
				// Box 2 is hovered
				bricks[0].classList.remove("shrink"); // Reset box 1
			} else if (index === 2) {
				// Box 3 is hovered
				bricks[3].classList.remove("shrink"); // Reset box 4
			} else if (index === 3) {
				// Box 4 is hovered
				bricks[2].classList.remove("shrink"); // Reset box 3
			}
		});
	});
});

function downloadFile() {
    document.getElementById('download-link').click();
}
