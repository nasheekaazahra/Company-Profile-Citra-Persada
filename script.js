// ==============================
// HEADER SCROLL STATE
// ==============================

const header = document.getElementById("site-header");

if (header) {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 40);
    });
}


// ==============================
// REVEAL ON SCROLL
// ==============================

const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length > 0) {

    const io = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                io.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealEls.forEach((el) => io.observe(el));
}


// ==============================
// HERO ROUTE ANIMATION
// ==============================

const routePath = document.getElementById("heroRoute");

if (routePath) {

    const len = routePath.getTotalLength();

    routePath.style.strokeDasharray = len;
    routePath.style.strokeDashoffset = len;

    requestAnimationFrame(() => {

        routePath.style.transition =
            "stroke-dashoffset 2.4s cubic-bezier(.2,.7,.2,1) .3s";

        routePath.style.strokeDashoffset = 0;

    });
}


// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector("nav ul");

if (menuBtn && navList) {

    menuBtn.addEventListener("click", () => {

        const open = navList.style.display === "flex";

        navList.style.display = open ? "none" : "flex";

        navList.style.cssText += `
            flex-direction: column;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(250,247,241,0.98);
            padding: 24px 26px;
            gap: 20px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        `;

        document
            .querySelectorAll("nav ul a")
            .forEach((a) => {
                a.style.color = "#101f38";
            });

    });

}

const vmSection = document.querySelector(".vision-mission");

if (vmSection) {

  const vmObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          vmSection.classList.add("is-visible");
          vmObserver.unobserve(vmSection);
        }

      });

    },
    {
      threshold: 0.25
    }
  );

  vmObserver.observe(vmSection);
}


// ==============================
// WECHAT QR MODAL
// ==============================

const weChatLink = document.getElementById("weChatLink");
const weChatModal = document.getElementById("weChatModal");
const weChatClose = document.getElementById("weChatClose");
const weChatOverlay = document.getElementById("weChatOverlay");

if (
    weChatLink &&
    weChatModal &&
    weChatClose &&
    weChatOverlay
) {

    function openWeChatModal() {

        weChatModal.classList.add("is-open");

        weChatModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    function closeWeChatModal() {

        weChatModal.classList.remove("is-open");

        weChatModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    // OPEN
    weChatLink.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        openWeChatModal();

    });


    // CLOSE BUTTON
    weChatClose.addEventListener(
        "click",
        closeWeChatModal
    );


    // CLICK OUTSIDE
    weChatOverlay.addEventListener(
        "click",
        closeWeChatModal
    );


    // ESC
    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape" &&
                weChatModal.classList.contains("is-open")
            ) {

                closeWeChatModal();

            }

        }
    );

}