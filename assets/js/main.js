(function ($) {
    "use strict";
    /*=================================
        JS Index Here
    ==================================*/
    /*
    01. On Load Function
    02. Common Js
    03. Mobile Menu Js
    04. Counter
    05. MagnificPopup img view
    06. MagnificPopup video view
    07. Scroll To Top
    08. Sticky Header Js
    09. Offcanvas Js
    10. Nice Select Js
    11. Faq-class-active
    12. Title-animation
    13. Ecommerce
    14. Pricing-switch & Tab
    15. Skill js
    16. Passowrd
    17. scrollCue
    */
    /*=================================
        JS Index End
    ==================================*/
    /*

  /*---------- 01. On Load Function ----------*/
    let windowOn = $(window);
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });

    /*----------- 02. Common Js ----------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    if ($('[data-mask-src]').length > 0) {
        $('[data-mask-src]').each(function () {
            let mask = $(this).attr('data-mask-src');
            $(this).css({
                'mask-image': 'url(' + mask + ')',
                '-webkit-mask-image': 'url(' + mask + ')'
            });
            $(this).addClass('bg-mask');
            $(this).removeAttr('data-mask-src');
        });
    };

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    $("[data-text-color]").each(function () {
        $(this).css("color", $(this).attr("data-text-color"));
    });

    /*-----------  03. Mobile Menu Js ----------*/
    let atMenuWrap = $('.ot-mobile-menu-active > ul').clone();
    let atSideMenu = $('.ot-offcanvas-menu nav');
    atSideMenu.append(atMenuWrap);
    if ($(atSideMenu).find('.ot-submenu, .ot-mega-menu').length != 0) {
        $(atSideMenu).find('.ot-submenu, .ot-mega-menu').parent().append
            ('<button class="ot-menu-close"><i class="fa-solid fa-chevron-right"></i></button>');
    }
    let sideMenuList =
        $('.ot-offcanvas-menu nav > ul > li button.ot-menu-close, .ot-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.ot-submenu, .ot-mega-menu').slideDown();
        } else {
            $(this).siblings('.ot-submenu, .ot-mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });

    /*---------- 04. Counter --------- */
    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    /*---------- 05. MagnificPopup img view  --------*/
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*---------- 06. MagnificPopup video view  ----------*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*---------- 07. Scroll To Top ----------*/
    $(document).ready(function () {
        const $scrollTopBtn = $('.scroll-top');
        const $progressPath = $('.scroll-top path');
    
        if ($scrollTopBtn.length && $progressPath.length) {
            const scrollTopBtn = $scrollTopBtn[0];
            const progressPath = $progressPath[0];
            const pathLength = progressPath.getTotalLength();
    
            // Set up the progress path stroke
            progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect(); // Force reflow
            progressPath.style.transition = 'stroke-dashoffset 10ms linear';
    
            // Update progress on scroll
            const updateProgress = () => {
                const scroll = $(window).scrollTop();
                const height = $(document).height() - $(window).height();
                const progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            };
    
            // Initial update
            updateProgress();
    
            // Bind scroll event
            $(window).on('scroll', () => {
                updateProgress();
    
                // Toggle visibility of scroll-to-top button
                if ($(window).scrollTop() > 40) {
                    $scrollTopBtn.addClass('show');
                } else {
                    $scrollTopBtn.removeClass('show');
                }
            });
    
            // Scroll to top on click
            $scrollTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, 750);
            });
        }
    });

    /*----------- 08. Sticky Header Js -----------*/
    windowOn.on('scroll', function () {
        let scroll = windowOn.scrollTop();
        if (scroll < 20) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });

    /*----------- 09. Offcanvas Js ---------------*/
    $(".ot-offcanvas-toogle").on('click', function () {
        $(".ot-offcanvas").addClass("opend");
        $(".body-overlay").addClass("opend");
    });

    $(".ot-offcanvas-close-toggle,.body-overlay").on('click', function () {
        $(".ot-offcanvas").removeClass("opend");
        $(".body-overlay").removeClass("opend");
    });

    /*------------ 10. Nice Select Js ---------------*/
    $('select').niceSelect();

    /*------------- 11. Faq-class-active -----------------*/
    $('.ot-faq .accordion-items').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*------------- 12. Title-animation ----------------*/
    if ($(".ot-text-anime-1").length) {
        let e = 0.05,
            t = 0.5;
        document.querySelectorAll(".ot-text-anime-1").forEach((a) => {
            let i = new SplitText(a, { type: "chars, words" });
            gsap.from(i.words, { duration: 1, delay: t, x: 20, autoAlpha: 0, stagger: e, scrollTrigger: { trigger: a, start: "top 85%" } });
        });
    }
    if ($(".ot-text-anime-2").length) {
        let e = 0.03,
            t = 20,
            a = 0.1,
            i = "power2.out";
        document.querySelectorAll(".ot-text-anime-2").forEach((n) => {
            let o = new SplitText(n, { type: "chars, words" });
            gsap.from(o.chars, { duration: 2, delay: a, x: t, autoAlpha: 0, stagger: e, ease: i, scrollTrigger: { trigger: n, start: "top 85%" } });
        });
    }
    if ($(".ot-text-anime-3").length) {
        document.querySelectorAll(".ot-text-anime-3").forEach((e) => {
            e.animation && (e.animation.progress(1).kill(), e.split.revert()),
                (e.split = new SplitText(e, { type: "lines,words,chars", linesClass: "split-line" })),
                gsap.set(e, { perspective: 400 }),
                gsap.set(e.split.chars, { opacity: 0, x: "50" }),
                (e.animation = gsap.to(e.split.chars, { scrollTrigger: { trigger: e, start: "top 90%" }, x: "0", y: "0", rotateX: "0", opacity: 1, duration: 1, ease: Back.easeOut, stagger: 0.02 }));
        });
    }

    /*----------------- 13. Ecommerce ---------------*/
    function ot_ecommerce() {
        $('.ot-cart-minus').on('click', function () {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });

        $('.ot-cart-plus').on('click', function () {
            let $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

        // 17. Show Login Toggle Js
        $('.ot-checkout-login-form-reveal-btn').on('click', function () {
            $('#tpReturnCustomerLoginForm').slideToggle(400);
        });

        // 18. Show Coupon Toggle Js
        $('.ot-checkout-coupon-form-reveal-btn').on('click', function () {
            $('#tpCheckoutCouponForm').slideToggle(400);
        });

        // 19. Create An Account Toggle Js
        $('#cbox').on('click', function () {
            $('#cbox_info').slideToggle(900);
        });

        // 20. Shipping Box Toggle Js
        $('#ship-box').on('click', function () {
            $('#ship-box-info').slideToggle(1000);
        });
    }
    ot_ecommerce();

    /*----------- 14. Pricing-switch & Tab ----------*/
    $(document).ready(function () {
        var e = $("#filt-monthly"),
            d = $("#filt-yearly"),
            t = $("#switcher"),
            m = $("#monthly"),
            y = $("#yearly");

        if ($('.ot-pricing-tabs').length) {
            // Using jQuery to bind click events to the elements
            e.on("click", function () {
                t.prop("checked", false);
                e.addClass("toggler--is-active");
                d.removeClass("toggler--is-active");
                m.removeClass("hide");
                y.addClass("hide");
            });

            d.on("click", function () {
                t.prop("checked", true);
                d.addClass("toggler--is-active");
                e.removeClass("toggler--is-active");
                m.addClass("hide");
                y.removeClass("hide");
            });

            t.on("click", function () {
                d.toggleClass("toggler--is-active");
                e.toggleClass("toggler--is-active");
                m.toggleClass("hide");
                y.toggleClass("hide");
            });
        }
    });

    /*----------------- 15. Skill js ---------------- */
    document.addEventListener("DOMContentLoaded", function () {
        const skillSection = document.querySelector(".ot-skill-main");
        const skillBars = document.querySelectorAll(".ot-skill-per");
        let animated = false;

        function animateSkillBars() {
            skillBars.forEach(function (skillPer) {
                let per = parseFloat(skillPer.getAttribute("data-per"));
                skillPer.style.width = per + "%";

                let animatedValue = 0;
                let startTime = null;

                function animate(timestamp) {
                    if (!startTime) startTime = timestamp;
                    let progress = timestamp - startTime;
                    let stepPercentage = progress / 1000;

                    if (stepPercentage < 1) {
                        animatedValue = per * stepPercentage;
                        skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
                        requestAnimationFrame(animate);
                    } else {
                        skillPer.setAttribute("data-per", per + "%");
                    }
                }

                requestAnimationFrame(animate);
            });
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    animateSkillBars();
                    observer.unobserve(skillSection); // Run only once
                }
            });
        }, {
            threshold: 0.3, // Adjust this to control trigger point
        });

        if (skillSection) {
            observer.observe(skillSection);
        }
    });

    /*----------------- 16. Passowrd ---------------- */
    if ($('#password-show-toggle').length > 0) {
        var btn = document.getElementById('password-show-toggle');
        btn.addEventListener('click', function (e) {
            var inputType = document.getElementById('ot-password');
            var openEye = document.getElementById('open-eye');
            var closeEye = document.getElementById('close-eye');

            if (inputType.type === "password") {
                inputType.type = "text";
                openEye.style.display = 'block';
                closeEye.style.display = 'none';
            } else {
                inputType.type = "password";
                openEye.style.display = 'none';
                closeEye.style.display = 'block';
            }
        });
    }

    if ($('#password-show-toggle2').length > 0) {
        var btn = document.getElementById('password-show-toggle2');
        btn.addEventListener('click', function (e) {
            var inputType = document.getElementById('ot-conferm-passowrd');
            var openEye = document.getElementById('open-eye2');
            var closeEye = document.getElementById('close-eye2');

            if (inputType.type === "password") {
                inputType.type = "text";
                openEye.style.display = 'block';
                closeEye.style.display = 'none';
            } else {
                inputType.type = "password";
                openEye.style.display = 'none';
                closeEye.style.display = 'block';
            }
        });
    }

    /*----------------- 17. scrollCue ---------------- */
    document.addEventListener('DOMContentLoaded', function () {
        scrollCue.init({
            percentage: .99,
            duration: 900
        });
    });

})(jQuery);