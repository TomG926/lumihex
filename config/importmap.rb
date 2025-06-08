# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "framer-motion", to: "https://esm.sh/framer-motion@12.16.0"
pin "gsap", to: "https://ga.jspm.io/npm:gsap@3.12.5/dist/gsap.js"
pin "gsap/ScrollTrigger", to: "https://ga.jspm.io/npm:gsap@3.12.5/dist/ScrollTrigger.js"
