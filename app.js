(function(){'use strict';

/* ── i18n ── */
var TRANS={
  en:{
    nav_home:'Home',nav_services:'Services',nav_about:'About',nav_global:'Global',nav_process:'Process',
    nav_work:'Portfolio',nav_contact:'Contact',nav_cta:'Get Started →',nav_menu:'Menu',
    nav_re:'Real Estate',re_nav_cta:'Book a Shoot →',
    re_kick:'For Realtors & Brokers · Canada & Morocco',
    re_h1_html:'Sell Listings<br/><span class="b">Faster.</span>',
    re_sub:'Cinematic drone video, magazine-grade photography and an immersive 3D virtual visit — everything a listing needs to stand out and sell. One flat rate: <strong>$300 per listing</strong>, delivered in 48 hours.',
    re_cta1:'Book a Listing Shoot →',re_cta2:'See Our Work',
    re_pkg_k:'The Listing Package',re_pkg_name:'Drone · Photos · 3D Tour',re_pkg_per:'Per listing · one flat rate',
    re_i1_h:'Cinematic Drone Video',re_i1_p:'Aerial reveal of the property, lot and neighbourhood — the shot that stops the scroll and sells the location.',
    re_i2_h:'Professional Photography',re_i2_p:'HDR, magazine-grade interior & exterior stills — colour-corrected and MLS / Centris-ready.',
    re_i3_h:'Immersive 3D Virtual Visit',re_i3_p:'Buyers walk the whole property 24/7 from any device — embeddable on MLS, your site and Google.',
    re_pkg_note:'One flat rate per listing · No subscriptions · 48-hour turnaround · You own every file',
    re_why_lbl:'Why It Works',re_why_h1:'List Like',re_why_h2:'Luxury.',
    re_w1_h:'Stop the Scroll',re_w1_p:'Aerial footage and video make a listing impossible to ignore in a feed full of flat phone photos.',
    re_w2_h:'Fewer Wasted Showings',re_w2_p:'A 3D tour lets buyers walk the whole home before they book — so the visits you get are serious ones.',
    re_w3_h:'Ready in 48 Hours',re_w3_p:'We shoot on-site and deliver drone video, edited photos and your 3D tour link within two days.',
    re_form_tag:'Book a Listing Shoot',re_form_h:'$300<br/>Per Listing.',re_form_sub:'Tell us about the property and we\'ll confirm your shoot within 24 hours. No deposit to book — pay once the work is delivered.',
    re_form_badge:'Everything Included',re_form_tname:'The Listing Package',
    re_form_f1:'Cinematic drone video',re_form_f2:'Professional HDR photography',re_form_f3:'Immersive 3D virtual visit',re_form_f4:'<strong>48-hour turnaround — you own every file</strong>',
    re_form_meta:'Volume pricing available for teams & brokerages · Ask us',
    re_form_ct:'Book Your Shoot',re_form_cs:'Takes 30 seconds. We\'ll email you to confirm the date and the address.',
    re_ff_name:'Your Name',re_ff_biz:'Brokerage / Agency',re_ff_type:'Property Type',re_ff_btn:'Book My Listing Shoot →',
    re_pt1:'Condo / Apartment',re_pt2:'House',re_pt3:'Townhouse / Plex',re_pt4:'Luxury / Estate',re_pt5:'Commercial',re_pt6:'Land / Development',
    re_ok_h:'Shoot Requested',re_ok_p:'We\'ve got the details. You\'ll hear from us within 24 hours to lock in the date and confirm the address.',
    re_faq_lbl:'FAQ',re_faq_h1:'Good',re_faq_h2:'To Know.',
    re_q1:'What areas do you cover?',re_a1:'We shoot across Greater Montréal and most of Québec, and we serve select markets in Morocco. Travel outside the core area may add a small fee — just ask.',
    re_q2:'How fast do I get the files?',re_a2:'Standard turnaround is 48 hours from the shoot: edited photos, drone video and your 3D tour link, all delivered digitally and ready for MLS / Centris.',
    re_q3:'Is $300 really per listing?',re_a3:'Yes — one flat rate per property covers the drone video, professional photos and the immersive 3D virtual visit. No subscriptions, no hidden fees. Teams and brokerages doing volume get custom pricing.',
    re_q4:'Do I need to be there for the shoot?',re_a4:'Not necessarily — as long as we have access to the property. We coordinate timing with you or the seller and handle the rest on-site.',
    re_q5:'Who owns the photos and video?',re_a5:'You do. Every file is handed over to you with full rights to use across MLS, your website, and social media — no watermarks, no lock-in.',
    re_cta_sup:'Listing This Week?',re_cta_h1:'Let\'s Make It',re_cta_h2:'Look Incredible.',re_cta_sub:'Drone, photos and a 3D tour for $300 — delivered in 48 hours. Book your shoot and we\'ll confirm within a day.',re_cta_btn1:'Book a Listing Shoot →',
    re_band_k:'New · For Real Estate Agents',re_band_h:'Sell Listings Faster.',re_band_p:'Drone video, professional photos and an immersive 3D virtual visit — everything your listing needs to stand out. Delivered in 48 hours.',re_band_per:'Per listing',re_band_btn:'See Real Estate →',
    ol_kick:'Launch Offer · First 10 Businesses',
    ol_h1_html:'Put Your Business<br/><span class="b">On The Map.</span>',
    ol_sub:'A full immersive 3D virtual tour of your space, published to Google — for a one-time <strong>$500</strong>. No monthly fees, no lock-in. We\'re onboarding our first 10 businesses at launch pricing.',
    ol_cta1:'Claim Your Spot →',ol_cta2:'See Full Pricing',
    ol_v1:'One-time price — zero monthly fees',ol_v2:'Published to your Google Business Profile',ol_v3:'Filmed on-site, delivered fast',ol_v4:'You own everything — no lock-in',
    ol_how_lbl:'How It Works',ol_how_h1:'Three Steps',ol_how_h2:'To Live.',
    ol_s1_h:'Register',ol_s1_p:'Fill the 30-second form and we confirm your spot within 24 hours — no deposit to reserve.',
    ol_s2_h:'We Capture',ol_s2_p:'We come on-site and film a full immersive 3D scan of your space, professionally.',
    ol_s3_h:'You Go Live',ol_s3_p:'Your virtual tour is published to Google and ready to embed on your site and social media.',
    ol_cta_sup:'Only 10 Spots',ol_cta_h1:'Lock In',ol_cta_h2:'Launch Pricing.',ol_cta_sub:'Register now and we\'ll hold your spot at $500. No deposit, no obligation.',
    hero_kicker:'AI-Powered Digital Growth Agency — Montréal, QC',
    hero_t2:'Ventures',hero_t3:'Digital',hero_t4:'Growth.',
    hero_desc:'We help businesses attract more customers, increase sales, and build a stronger online presence through AI automation, digital marketing & immersive virtual experiences.',
    hero_cta1:'Get Your Tour — $500 →',hero_cta2:'Our Services',
    lbl_mission:'Our Mission',about_h:'Help Businesses Grow Faster With Technology.',
    about_p1:'At B12 Ventures, we combine AI automation, digital marketing, and immersive virtual experiences to help businesses attract more customers and increase sales.',
    about_p2:'Our mission: deliver measurable growth while saving you time through smart technology.',
    about_cta:'Book a Free Strategy Call →',
    lbl_services:'What We Do',svc_h1:'Six',svc_h2:'Services.',svc_h3:'One',svc_h4:'Partner.',
    svc_sub:'Everything your business needs to attract customers, automate, and scale.',
    s1_name:'Virtual Tours & 3D Visits',s2_name:'Photography & Videography',
    s3_name:'AI Automation & AI Agents',s4_name:'Digital Marketing & Ads',
    s5_name:'Website & Landing Page Dev',s6_name:'CRM & Business Automation',
    splite_lbl:'AI-Powered Intelligence',splite_h1:'AI-Powered.',splite_h2:'Human-Driven.',
    splite_p:'Our AI agents handle lead capture, follow-up, and appointment booking — while your team focuses on closing deals.',
    splite_cta:'Deploy Your AI Agent →',
    card_title:'AI Agent — Live',card_status:'Active',
    card_m1:'Leads Today',card_m2:'Response',card_m3:'Conversion',card_graph:'Leads / Last 7 Days',
    feed1:'Lead captured → Email sent in 0.3s',feed2:'Calendar appointment booked',
    feed3:'Follow-up SMS sent',feed4:'Qualifying new lead...',
    mission_body:'Our Mission — Help Businesses Grow Faster While Saving Time Through Technology & Smart Marketing.',
    lbl_why:'Why B12 Ventures',why_h1:'Your',why_h2:'Growth',why_h3:'Is Our',why_h4:'Mission.',
    why_sub:'We build long-term growth engines using the best technology available.',
    wf1h:'Increase Online Visibility',wf1p:'Appear at the top of Google when customers search for you.',
    wf2h:'Generate More Leads',wf2p:'Targeted funnels that bring in buyers, not just browsers.',
    wf3h:'Automate Repetitive Tasks',wf3p:'AI handles follow-ups, booking, and support.',
    wf4h:'Scale Faster With AI',wf4p:'Multiply output without multiplying costs.',
    wf5h:'Showcase With Virtual Tours',wf5p:'Immersive 3D experiences with global reach.',
    stat1:'Clients Served',stat2:'Satisfaction',stat3:'Avg ROI',
    lbl_map:'Global Presence',map_h1:'Serving',map_h2:'Clients',map_h3:'Worldwide.',
    loc1:'Dubai, UAE',loc2:'Morocco',loc3:'Canada',
    lbl_process:'How It Works',proc_h1:'From',proc_h2:'Strategy',proc_h3:'To Results.',
    ps1h:'Discovery Call',ps1p:'A free 30-min strategy session — no pressure, just clarity.',
    ps2h:'Custom Strategy',ps2p:'A tailored plan combining AI, marketing, and technology.',
    ps3h:'Launch & Execute',ps3p:'Campaigns and automations deployed within 48 hours.',
    ps4h:'Optimize & Scale',ps4p:'Weekly optimization and compounding growth over time.',
    cta_sup:'Ready to Grow?',cta_h1:"Let's Build",cta_h2:'Something Real.',
    cta_sub:'Book a free 30-minute strategy session. No commitment.',
    cta_btn1:'Book Free Strategy Call →',
    lbl_contact:'Get In Touch',ct_h1:'Start Your',ct_h2:'Growth Journey.',
    ci_phone:'Phone',ci_email:'Email',ci_web:'Website',ci_resp:'Response Time',ci_resp_val:'Within 24 hours',
    cf_h:'Send A Message',cf_sub:"Tell us about your project — we'll reply within 24 hours.",
    cf_fn:'First Name',cf_ln:'Last Name',cf_em:'Email',cf_ph:'Phone',
    cf_sv:'Service of Interest',cf_sv_ph:'Select a service...',cf_msg:'Message',cf_send:'Send Message →',
    cf_sms_nm:'I consent to receive non-marketing text messages from B12 Ventures about my inquiry, appointments, and customer care at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.',
    cf_sms_mk:'I consent to receive marketing text messages from B12 Ventures about special offers, discounts, and service updates at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.',
    cf_legal:'By submitting this form, you agree to our',cf_legal_t:'Terms &amp; Conditions',cf_legal_and:'and',cf_legal_p:'Privacy Policy',
    ft_terms:'Terms &amp; Conditions',ft_privacy:'Privacy Policy',
    sv1:'Virtual Tours & Immersive 3D',sv2:'Photography & Videography',sv3:'AI Automation & AI Agents',
    sv4:'Digital Marketing & Ads',sv5:'Website Development',sv6:'CRM & Business Automation',
    ft_desc:'Digital Growth & AI Solutions. Helping businesses attract more customers and increase sales.',
    ft_services:'Services',ft_company:'Company',ft_contact:'Contact',
    hero_scroll:'Scroll to explore',
    nav_pricing:'Pricing',lbl_pricing:'Pricing',pr_h1:'Simple,',pr_h2:'Honest Pricing.',
    pr_sub:'One-time pricing — no subscriptions, no surprises. You pay once, you own everything.',
    pr1_name:'Immersive 3D Virtual Visit',pr1_per:'Per space · one-time',
    pr1_deal:'Get it for $500',pr1_deal_s:'Launch offer · first 10 businesses →',
    of_tag:'Launch Offer · First 10 Businesses',
    of_h2:'Two Ways<br/>To Get Started.',
    of_sub:"We're onboarding our first 10 businesses at launch pricing. Register below and we'll lock in your rate — no deposit to reserve.",
    of_t1_name:'Immersive 3D Virtual Visit',
    of_t1_f1:'Full immersive 3D scan of your business',of_t1_f2:'Published to your Google Business Profile',
    of_t1_f3:'Embed link for your website &amp; social media',of_t1_f4:'Professionally edited stills included',
    of_t2_badge:'Best Value',of_t2_name:'Media Package',
    of_t2_f1:'Everything in the Immersive 3D Visit',of_t2_f2:'Promotional photos for social media',
    of_t2_f3:'Promotional videos for social media',
    of_t2_f4:'Aerial drone shots',
    of_pkg:'Which Package?',of_pkg1:'Immersive 3D Virtual Visit — $500',of_pkg2:'Media Package — $1,000',
    of_meta:'No deposit to register · We confirm your spot within 24 hours',
    of_ct:'Claim Your Spot',of_cs:"Takes 30 seconds. We'll email you to confirm availability and book the capture.",
    of_biz:'Business Name',of_name:'Your Name',of_city:'City',of_em:'Email',of_type:'Type of Business',
    of_t1:'Restaurant / Café',of_t2:'Retail / Boutique',of_t3:'Salon / Barber / Spa',
    of_t4:'Clinic / Office',of_t5:'Event Venue',of_t6:'Other',
    of_btn:'Claim My Launch Spot →',of_fine:'By registering you agree to our',
    of_ok_h:'Spot Requested',of_ok_p:"We've got your details. You'll hear from us within 24 hours to confirm your spot and schedule the capture.",
    nav_offer:'$500 Offer',
    pr1_f1:'Full immersive 3D scan of your space',pr1_f2:'Immersive walkthrough on any device',
    pr1_f3:'Shareable link — embed on your website &amp; Google',pr1_f4:'Filmed on-site, delivered fast',
    pr2_badge:'Most Popular',pr2_name:'Media Package',pr2_per:'One-time · content bundle',
    pr2_f1:'Immersive 3D virtual visit of your space',pr2_f2:'Promotional photos for social media',
    pr2_f3:'Promotional videos for social media',pr2_f4:'Aerial drone shots',
    pr3_badge:'Best Value',pr3_name:'Complete Package',pr3_per:'Everything + a website',
    pr3_f1:'Everything in the Media Package',pr3_f2:'Custom high-end website built for you',
    pr3_f3:'<strong>No monthly fees — ever</strong>',pr3_f4:'<strong>Full admin access</strong> — you own &amp; edit it all',
    pr4_badge:'Social Media',pr4_name:'Custom',pr4_price:"Let's Talk",pr4_per:'Tailored to your goals',
    pr4_f1:'Social media management',pr4_f2:'Content creation &amp; posting',
    pr4_f3:'Ad campaigns &amp; growth strategy',pr4_f4:'Mix &amp; match any services above',
    prc_btn:'Get Started →',prc_btn2:'Get Started →',prc_btn3:'Get Started →',prc_btn4:'Get a Quote →',
    pr_note:'<strong>You own your website — completely.</strong> One-time payment, zero monthly fees. We hand over full admin access so you can update text, photos — anything — whenever you want. No hostage fees, no lock-in.'
  },
  fr:{
    nav_home:'Accueil',nav_services:'Services',nav_about:'À Propos',nav_global:'Mondial',nav_process:'Processus',
    nav_work:'Portfolio',nav_contact:'Contact',nav_cta:'Commencer →',nav_menu:'Menu',
    nav_re:'Immobilier',re_nav_cta:'Réserver →',
    re_kick:'Pour Courtiers & Agents · Canada & Maroc',
    re_h1_html:'Vendez Plus<br/><span class="b">Vite.</span>',
    re_sub:'Vidéo par drone cinématographique, photographie de qualité magazine et une visite virtuelle 3D immersive — tout ce qu\'une inscription doit avoir pour se démarquer et se vendre. Un tarif unique : <strong>300 $ par inscription</strong>, livré en 48 heures.',
    re_cta1:'Réserver une Séance →',re_cta2:'Voir Nos Réalisations',
    re_pkg_k:'Le Forfait Inscription',re_pkg_name:'Drone · Photos · Visite 3D',re_pkg_per:'Par inscription · tarif unique',
    re_i1_h:'Vidéo par Drone',re_i1_p:'Vue aérienne de la propriété, du terrain et du quartier — l\'image qui capte l\'attention et vend l\'emplacement.',
    re_i2_h:'Photographie Professionnelle',re_i2_p:'Photos HDR de qualité magazine, intérieur et extérieur — corrigées et prêtes pour Centris / MLS.',
    re_i3_h:'Visite Virtuelle 3D Immersive',re_i3_p:'Les acheteurs parcourent toute la propriété 24/7 depuis n\'importe quel appareil — intégrable sur Centris, votre site et Google.',
    re_pkg_note:'Tarif unique par inscription · Sans abonnement · Livraison en 48 h · Tous les fichiers vous appartiennent',
    re_why_lbl:'Pourquoi Ça Marche',re_why_h1:'Une Vitrine',re_why_h2:'de Luxe.',
    re_w1_h:'Arrêtez le Défilement',re_w1_p:'Les images aériennes et la vidéo rendent une inscription impossible à ignorer dans un fil rempli de photos prises au téléphone.',
    re_w2_h:'Moins de Visites Inutiles',re_w2_p:'Une visite 3D permet aux acheteurs de parcourir toute la maison avant de réserver — les visites obtenues sont donc sérieuses.',
    re_w3_h:'Prêt en 48 Heures',re_w3_p:'Nous filmons sur place et livrons la vidéo par drone, les photos éditées et votre lien de visite 3D en deux jours.',
    re_form_tag:'Réserver une Séance',re_form_h:'300 $<br/>Par Inscription.',re_form_sub:'Parlez-nous de la propriété et nous confirmerons votre séance sous 24 heures. Aucun dépôt pour réserver — vous payez une fois le travail livré.',
    re_form_badge:'Tout Inclus',re_form_tname:'Le Forfait Inscription',
    re_form_f1:'Vidéo par drone cinématographique',re_form_f2:'Photographie HDR professionnelle',re_form_f3:'Visite virtuelle 3D immersive',re_form_f4:'<strong>Livraison en 48 h — tous les fichiers vous appartiennent</strong>',
    re_form_meta:'Tarifs de volume pour équipes & agences · Demandez-nous',
    re_form_ct:'Réservez Votre Séance',re_form_cs:'30 secondes. Nous vous écrirons pour confirmer la date et l\'adresse.',
    re_ff_name:'Votre Nom',re_ff_biz:'Agence / Courtier',re_ff_type:'Type de Propriété',re_ff_btn:'Réserver Ma Séance →',
    re_pt1:'Condo / Appartement',re_pt2:'Maison',re_pt3:'Maison de ville / Plex',re_pt4:'Luxe / Domaine',re_pt5:'Commercial',re_pt6:'Terrain / Développement',
    re_ok_h:'Séance Demandée',re_ok_p:'Nous avons les détails. Vous aurez de nos nouvelles sous 24 heures pour fixer la date et confirmer l\'adresse.',
    re_faq_lbl:'FAQ',re_faq_h1:'Bon',re_faq_h2:'à Savoir.',
    re_q1:'Quels secteurs couvrez-vous ?',re_a1:'Nous filmons dans le Grand Montréal et la majeure partie du Québec, ainsi que dans certains marchés au Maroc. Un déplacement hors de la zone principale peut entraîner de petits frais — demandez-nous.',
    re_q2:'En combien de temps ai-je les fichiers ?',re_a2:'Le délai standard est de 48 heures après la séance : photos éditées, vidéo par drone et votre lien de visite 3D, livrés numériquement et prêts pour Centris / MLS.',
    re_q3:'Est-ce vraiment 300 $ par inscription ?',re_a3:'Oui — un tarif unique par propriété couvre la vidéo par drone, les photos professionnelles et la visite virtuelle 3D immersive. Sans abonnement, sans frais cachés. Les équipes et agences en volume obtiennent des tarifs personnalisés.',
    re_q4:'Dois-je être présent pour la séance ?',re_a4:'Pas nécessairement — tant que nous avons accès à la propriété. Nous coordonnons l\'horaire avec vous ou le vendeur et gérons le reste sur place.',
    re_q5:'À qui appartiennent les photos et la vidéo ?',re_a5:'À vous. Chaque fichier vous est remis avec tous les droits d\'utilisation sur Centris, votre site web et les réseaux sociaux — sans filigrane, sans verrouillage.',
    re_cta_sup:'Une Inscription Cette Semaine ?',re_cta_h1:'Rendons-la',re_cta_h2:'Incroyable.',re_cta_sub:'Drone, photos et visite 3D pour 300 $ — livré en 48 heures. Réservez votre séance et nous confirmons sous un jour.',re_cta_btn1:'Réserver une Séance →',
    re_band_k:'Nouveau · Pour Agents Immobiliers',re_band_h:'Vendez Plus Vite.',re_band_p:'Vidéo par drone, photos professionnelles et une visite virtuelle 3D immersive — tout ce que votre inscription doit avoir. Livré en 48 heures.',re_band_per:'Par inscription',re_band_btn:'Voir Immobilier →',
    ol_kick:'Offre de Lancement · 10 Premières Entreprises',
    ol_h1_html:'Mettez Votre Entreprise<br/><span class="b">Sur La Carte.</span>',
    ol_sub:'Une visite virtuelle 3D immersive complète de votre espace, publiée sur Google — pour un montant unique de <strong>500 $</strong>. Aucuns frais mensuels, aucun engagement. Nous intégrons nos 10 premières entreprises au tarif de lancement.',
    ol_cta1:'Réservez Votre Place →',ol_cta2:'Voir Tous Les Tarifs',
    ol_v1:'Prix unique — aucuns frais mensuels',ol_v2:'Publié sur votre fiche Google Business',ol_v3:'Filmé sur place, livré rapidement',ol_v4:'Vous possédez tout — sans engagement',
    ol_how_lbl:'Comment Ça Marche',ol_how_h1:'Trois Étapes',ol_how_h2:'Pour Être En Ligne.',
    ol_s1_h:'Inscrivez-vous',ol_s1_p:'Remplissez le formulaire de 30 secondes et nous confirmons votre place sous 24 heures — aucun dépôt requis.',
    ol_s2_h:'On Capture',ol_s2_p:'Nous venons sur place filmer un scan 3D immersif complet de votre espace, professionnellement.',
    ol_s3_h:'Vous Êtes En Ligne',ol_s3_p:'Votre visite virtuelle est publiée sur Google et prête à intégrer sur votre site et vos réseaux sociaux.',
    ol_cta_sup:'Seulement 10 Places',ol_cta_h1:'Verrouillez',ol_cta_h2:'Le Tarif de Lancement.',ol_cta_sub:'Inscrivez-vous maintenant et nous gardons votre place à 500 $. Sans dépôt, sans obligation.',
    hero_kicker:'Agence de Croissance Digitale & IA — Montréal, QC',
    hero_t2:'Ventures',hero_t3:'Croissance',hero_t4:'Digitale.',
    hero_desc:"Nous aidons les entreprises à attirer plus de clients, augmenter les ventes et construire une présence en ligne plus forte grâce à l'IA et au marketing digital.",
    hero_cta1:'Votre Visite 3D — 500 $ →',hero_cta2:'Nos Services',
    lbl_mission:'Notre Mission',about_h:'Aider les Entreprises à Croître Plus Vite.',
    about_p1:"Chez B12 Ventures, nous combinons l'automatisation IA, le marketing digital et les expériences virtuelles immersives pour aider les entreprises à attirer plus de clients.",
    about_p2:'Notre mission : livrer une croissance mesurable tout en vous faisant gagner du temps.',
    about_cta:'Réserver un Appel Stratégique Gratuit →',
    lbl_services:'Ce Que Nous Faisons',svc_h1:'Six',svc_h2:'Services.',svc_h3:'Un',svc_h4:'Partenaire.',
    svc_sub:'Tout ce dont votre entreprise a besoin pour attirer des clients et croître.',
    s1_name:'Visites Virtuelles & 3D',s2_name:'Photographie & Vidéo',
    s3_name:'Automatisation IA & Agents IA',s4_name:'Marketing Digital & Publicités',
    s5_name:'Développement Web & Pages',s6_name:'CRM & Automatisation',
    splite_lbl:'Intelligence IA',splite_h1:'Propulsé par IA.',splite_h2:'Piloté par Humains.',
    splite_p:"Nos agents IA gèrent la capture de leads, les suivis et les prises de rendez-vous — pendant que votre équipe se concentre sur la conclusion des ventes.",
    splite_cta:'Déployer Votre Agent IA →',
    card_title:'Agent IA — En Direct',card_status:'Actif',
    card_m1:"Leads Aujourd'hui",card_m2:'Réponse',card_m3:'Conversion',card_graph:'Leads / 7 Derniers Jours',
    feed1:'Lead capturé → Email envoyé en 0.3s',feed2:'Rendez-vous calendrier réservé',
    feed3:'SMS de suivi envoyé',feed4:'Qualification du nouveau lead...',
    mission_body:"Notre Mission — Aider les Entreprises à Croître Plus Vite Grâce à la Technologie & au Marketing Intelligent.",
    lbl_why:'Pourquoi B12 Ventures',why_h1:'Votre',why_h2:'Croissance',why_h3:'Est Notre',why_h4:'Mission.',
    why_sub:'Nous construisons des moteurs de croissance à long terme avec la meilleure technologie disponible.',
    wf1h:'Augmenter la Visibilité',wf1p:'Apparaître en haut de Google quand vos clients vous cherchent.',
    wf2h:'Générer Plus de Leads',wf2p:'Des entonnoirs ciblés qui attirent des acheteurs.',
    wf3h:'Automatiser les Tâches',wf3p:"L'IA gère les suivis, la réservation et le support.",
    wf4h:'Croître Avec IA',wf4p:'Multipliez la production sans multiplier les coûts.',
    wf5h:'Visites Virtuelles',wf5p:'Expériences 3D immersives avec portée mondiale.',
    stat1:'Clients Servis',stat2:'Satisfaction',stat3:'ROI Moyen',
    lbl_map:'Présence Mondiale',map_h1:'Servir des',map_h2:'Clients',map_h3:'Partout.',
    loc1:'Dubaï, EAU',loc2:'Maroc',loc3:'Canada',
    lbl_process:'Comment Ça Marche',proc_h1:'De la',proc_h2:'Stratégie',proc_h3:'Aux Résultats.',
    ps1h:'Appel de Découverte',ps1p:'Une session stratégique gratuite de 30 min — sans pression.',
    ps2h:'Stratégie Personnalisée',ps2p:'Un plan sur mesure combinant IA, marketing et technologie.',
    ps3h:'Lancement & Exécution',ps3p:'Campagnes et automatisations déployées en 48 heures.',
    ps4h:'Optimisation & Scale',ps4p:'Optimisation hebdomadaire et croissance composée.',
    cta_sup:'Prêt à Croître ?',cta_h1:'Construisons',cta_h2:'Quelque Chose de Réel.',
    cta_sub:'Réservez une session stratégique gratuite. Sans engagement.',
    cta_btn1:'Réserver un Appel Gratuit →',
    lbl_contact:'Contactez-Nous',ct_h1:'Commencez Votre',ct_h2:'Voyage de Croissance.',
    ci_phone:'Téléphone',ci_email:'E-mail',ci_web:'Site Web',ci_resp:'Temps de Réponse',ci_resp_val:'Sous 24 heures',
    cf_h:'Envoyer un Message',cf_sub:"Parlez-nous de votre projet — nous répondons sous 24 heures.",
    cf_fn:'Prénom',cf_ln:'Nom',cf_em:'E-mail',cf_ph:'Téléphone',
    cf_sv:'Service Souhaité',cf_sv_ph:'Sélectionner un service...',cf_msg:'Message',cf_send:'Envoyer →',
    cf_sms_nm:'Je consens à recevoir des messages textes non marketing de B12 Ventures concernant ma demande, mes rendez-vous et le service à la clientèle au numéro fourni. La fréquence des messages peut varier. Des frais de messagerie et de données peuvent s\'appliquer. Textez HELP pour de l\'aide, répondez STOP pour vous désabonner.',
    cf_sms_mk:'Je consens à recevoir des messages textes marketing de B12 Ventures concernant des offres spéciales, rabais et nouveautés au numéro fourni. La fréquence des messages peut varier. Des frais de messagerie et de données peuvent s\'appliquer. Textez HELP pour de l\'aide, répondez STOP pour vous désabonner.',
    cf_legal:'En soumettant ce formulaire, vous acceptez nos',cf_legal_t:'Conditions Générales',cf_legal_and:'et notre',cf_legal_p:'Politique de Confidentialité',
    ft_terms:'Conditions Générales',ft_privacy:'Politique de Confidentialité',
    sv1:'Visites Virtuelles & Immersive 3D',sv2:'Photographie & Vidéo',sv3:'Automatisation IA',
    sv4:'Marketing Digital & Publicités',sv5:'Développement Web',sv6:'CRM & Automatisation',
    ft_desc:'Croissance Digitale & Solutions IA. Aider les entreprises à attirer plus de clients.',
    ft_services:'Services',ft_company:'Entreprise',ft_contact:'Contact',
    hero_scroll:'Défiler pour explorer',
    nav_pricing:'Tarifs',lbl_pricing:'Tarifs',pr_h1:'Des Prix',pr_h2:'Simples et Honnêtes.',
    pr_sub:'Tarification unique — pas d\'abonnement, pas de surprise. Vous payez une fois, tout vous appartient.',
    pr1_name:'Visite Virtuelle 3D',pr1_per:'Par espace · paiement unique',
    pr1_deal:'Obtenez-la à 500 $',pr1_deal_s:'Offre de lancement · 10 premiers commerces →',
    of_tag:'Offre de Lancement · 10 Premiers Commerces',
    of_h2:'Deux Façons<br/>de Commencer.',
    of_sub:"Nous intégrons nos 10 premiers commerces à tarif de lancement. Inscrivez-vous pour bloquer votre tarif — aucun dépôt requis.",
    of_t1_name:'Visite Virtuelle 3D Immersive',
    of_t1_f1:'Numérisation immersive 3D complète de votre commerce',of_t1_f2:'Publiée sur votre fiche Google Business',
    of_t1_f3:'Lien intégrable pour votre site et vos réseaux sociaux',of_t1_f4:'Photos professionnelles retouchées incluses',
    of_t2_badge:'Meilleure Valeur',of_t2_name:'Forfait Média',
    of_t2_f1:'Tout ce qui est inclus dans la Visite 3D Immersive',of_t2_f2:'Photos promotionnelles pour réseaux sociaux',
    of_t2_f3:'Vidéos promotionnelles pour réseaux sociaux',
    of_t2_f4:'Prises de vue aériennes par drone',
    of_pkg:'Quel Forfait?',of_pkg1:'Visite Virtuelle 3D Immersive — 500 $',of_pkg2:'Forfait Média — 1 000 $',
    of_meta:'Aucun dépôt requis · Nous confirmons votre place sous 24 h',
    of_ct:'Réservez Votre Place',of_cs:'30 secondes. Nous vous écrivons pour confirmer la disponibilité et planifier la captation.',
    of_biz:"Nom du Commerce",of_name:'Votre Nom',of_city:'Ville',of_em:'Courriel',of_type:"Type de Commerce",
    of_t1:'Restaurant / Café',of_t2:'Commerce / Boutique',of_t3:'Salon / Barbier / Spa',
    of_t4:'Clinique / Bureau',of_t5:'Salle de Réception',of_t6:'Autre',
    of_btn:'Réserver Ma Place →',of_fine:'En vous inscrivant, vous acceptez nos',
    of_ok_h:'Place Demandée',of_ok_p:"Nous avons vos coordonnées. Vous aurez de nos nouvelles sous 24 h pour confirmer votre place et planifier la captation.",
    nav_offer:'Offre 500 $',
    pr1_f1:'Numérisation immersive 3D complète de votre espace',pr1_f2:'Visite immersive sur tous les appareils',
    pr1_f3:'Lien partageable — intégrable à votre site &amp; Google',pr1_f4:'Filmé sur place, livré rapidement',
    pr2_badge:'Le Plus Populaire',pr2_name:'Forfait Média',pr2_per:'Paiement unique · contenu complet',
    pr2_f1:'Visite virtuelle 3D immersive de votre espace',pr2_f2:'Photos promotionnelles pour réseaux sociaux',
    pr2_f3:'Vidéos promotionnelles pour réseaux sociaux',pr2_f4:'Prises de vue aériennes par drone',
    pr3_badge:'Meilleure Valeur',pr3_name:'Forfait Complet',pr3_per:'Tout + un site web',
    pr3_f1:'Tout ce qui est inclus dans le Forfait Média',pr3_f2:'Site web haut de gamme sur mesure',
    pr3_f3:'<strong>Aucun frais mensuel — jamais</strong>',pr3_f4:'<strong>Accès admin complet</strong> — il vous appartient, modifiez tout',
    pr4_badge:'Réseaux Sociaux',pr4_name:'Sur Mesure',pr4_price:'Parlons-en',pr4_per:'Adapté à vos objectifs',
    pr4_f1:'Gestion des réseaux sociaux',pr4_f2:'Création de contenu &amp; publication',
    pr4_f3:'Campagnes publicitaires &amp; stratégie de croissance',pr4_f4:'Combinez tous les services ci-dessus',
    prc_btn:'Commencer →',prc_btn2:'Commencer →',prc_btn3:'Commencer →',prc_btn4:'Obtenir un Devis →',
    pr_note:'<strong>Votre site web vous appartient — entièrement.</strong> Paiement unique, zéro frais mensuels. Nous vous remettons l\'accès admin complet : modifiez textes, photos — tout — quand vous voulez. Aucun frais caché, aucun verrouillage.'
  }
};

var currentLang='en';
function setLang(lang){
  currentLang=lang;
  var t=TRANS[lang];
  var html=document.getElementById('html-root');
  html.setAttribute('dir','ltr');html.setAttribute('lang',lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(t[k]!==undefined) el.innerHTML=t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active',b.getAttribute('data-lang')===lang);
  });
}
document.querySelectorAll('.lang-btn').forEach(function(b){
  b.addEventListener('click',function(){setLang(b.getAttribute('data-lang'))});
});

/* ── Touch ── */
if('ontouchstart' in window) document.body.classList.add('touch');

/* ── Loader ── */
window.addEventListener('load',function(){
  setTimeout(function(){
    document.getElementById('loader').classList.add('done');
    startHero();
  },1300);
});
function startHero(){
  var k=document.getElementById('hero-kicker');
  if(k) k.classList.add('in');
  ['hw1','hw2','hw3','hw4'].forEach(function(id,i){
    setTimeout(function(){var e=document.getElementById(id);if(e)e.classList.add('in');},180+i*110);
  });
  setTimeout(function(){var b=document.getElementById('hero-bottom');if(b)b.classList.add('in');},780);
}

/* ── Cursor ── */
(function(){
  var dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
  if(!dot||!ring)return;
  var mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  (function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
  document.querySelectorAll('a,button,[role=button],input,textarea,select').forEach(function(el){
    el.addEventListener('mouseenter',function(){dot.classList.add('hv');ring.classList.add('hv');});
    el.addEventListener('mouseleave',function(){dot.classList.remove('hv');ring.classList.remove('hv');});
  });
})();

/* ── Nav scroll ── */
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',scrollY>60);},{passive:true});

/* ── Menu ── */
var menuOpen=false;
function closeMenu(){
  menuOpen=false;
  document.getElementById('fullmenu').classList.remove('open');
  document.getElementById('fullmenu').setAttribute('aria-hidden','true');
  document.getElementById('menu-bars').classList.remove('open');
  document.getElementById('menu-txt').setAttribute('data-i18n','nav_menu');
  document.getElementById('menu-txt').textContent=TRANS[currentLang].nav_menu||'Menu';
  document.getElementById('menu-btn').setAttribute('aria-expanded','false');
}
window.closeMenu=closeMenu;   /* expose for inline onclick on menu links */
document.getElementById('menu-btn').addEventListener('click',function(){
  if(menuOpen){closeMenu();}
  else{
    menuOpen=true;
    document.getElementById('fullmenu').classList.add('open');
    document.getElementById('fullmenu').setAttribute('aria-hidden','false');
    document.getElementById('menu-bars').classList.add('open');
    document.getElementById('menu-txt').textContent='✕';
    document.getElementById('menu-btn').setAttribute('aria-expanded','true');
  }
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menuOpen)closeMenu();});

/* ── Smooth anchor ── */
/* Manual smooth scroll — native smooth scroll is broken here by
   body{overflow-x:hidden}; instant window.scrollTo works, so animate it. */
window.smoothTo=function(y){
  y=Math.max(0,y);
  var start=window.pageYOffset,dist=y-start,dur=600,t0=null,done=false;
  function step(ts){
    if(done)return;
    if(!t0)t0=ts;
    var p=Math.min((ts-t0)/dur,1);
    var e=p<0.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
    window.scrollTo(0,start+dist*e);
    if(p<1)requestAnimationFrame(step);else done=true;
  }
  requestAnimationFrame(step);
  /* guaranteed arrival if rAF is throttled (mobile / background tabs) */
  setTimeout(function(){if(!done){done=true;window.scrollTo(0,y);}},dur+90);
};
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var href=this.getAttribute('href');
    if(!href||href==='#'||href.length<2) return;
    var t=document.querySelector(href);
    if(t){e.preventDefault();window.smoothTo(t.getBoundingClientRect().top+window.pageYOffset-70);}
  });
});

/* ── IntersectionObserver ── */
var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}
  });
},{threshold:.08});
document.querySelectorAll('.rv,.st,.ab-img,.why-photo').forEach(function(el){obs.observe(el);});

/* ── Counter ── */
function animCnt(el){
  var to=parseInt(el.getAttribute('data-to'),10),dur=1800,start=performance.now();
  (function step(now){
    var p=Math.min((now-start)/dur,1),ep=p===1?1:1-Math.pow(2,-10*p);
    el.textContent=Math.floor(ep*to);
    if(p<1)requestAnimationFrame(step);else el.textContent=to;
  })(start);
}
var cntObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting){animCnt(e.target);cntObs.unobserve(e.target);}});
},{threshold:.5});
document.querySelectorAll('.cnt[data-to]').forEach(function(el){cntObs.observe(el);});

/* ── Hero parallax ── */
var heroBg=document.getElementById('hero-bg');
window.addEventListener('scroll',function(){if(heroBg)heroBg.style.transform='translateY('+(scrollY*.35)+'px)';},{passive:true});

/* ── Magnetic buttons ── */
document.querySelectorAll('.btn').forEach(function(b){
  b.addEventListener('mousemove',function(e){
    var r=b.getBoundingClientRect();
    b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.16+'px,'+(e.clientY-r.top-r.height/2)*.16+'px)';
  });
  b.addEventListener('mouseleave',function(){b.style.transform='';});
});

/* ── Splite Spotlight ── */
var sl=document.getElementById('splite-sl'),sl2=document.getElementById('splite-left');
if(sl&&sl2){
  sl2.addEventListener('mousemove',function(e){
    var r=sl2.getBoundingClientRect();
    sl.style.background='radial-gradient(600px at '+(e.clientX-r.left)+'px '+(e.clientY-r.top)+'px,rgba(0,85,255,.12),transparent 70%)';
  });
  sl2.addEventListener('mouseleave',function(){
    sl.style.background='radial-gradient(600px at 50% 50%,rgba(0,85,255,.06),transparent 70%)';
  });
}

/* ── Splite Card 3D tilt ── */
var card=document.getElementById('ai-card'),cardWrap=document.querySelector('.splite-right');
if(card&&cardWrap){
  cardWrap.addEventListener('mousemove',function(e){
    var r=cardWrap.getBoundingClientRect();
    var x=(e.clientX-r.left-r.width/2)/(r.width/2);
    var y=(e.clientY-r.top-r.height/2)/(r.height/2);
    card.style.transform='rotateY('+(x*8)+'deg) rotateX('+(-y*6)+'deg) translateZ(20px)';
  });
  cardWrap.addEventListener('mouseleave',function(){card.style.transform='';});
}

/* ── AI Card graph bars ── */
(function(){
  var bars=document.getElementById('ai-bars');
  if(!bars)return;
  var h=[30,55,40,70,45,85,60];
  h.forEach(function(v){
    var d=document.createElement('div');
    d.className='ai-bar';d.style.height=(v/100*50)+'px';
    d.style.animationDelay=(Math.random()*.3)+'s';
    bars.appendChild(d);
  });
})();

/* ── AI Feed live animation ── */
(function(){
  var el=document.getElementById('feed-live');if(!el)return;
  var msgs=['Qualifying new lead...','Processing form submission...','Sending automated reply...','Booking appointment slot...','Updating CRM record...'];
  var i=0;
  setInterval(function(){i=(i+1)%msgs.length;el.style.opacity='0';setTimeout(function(){el.textContent=msgs[i];el.style.opacity='1';},300);},3000);
})();

/* ── Hero Particle Canvas ── */
(function(){
  var c=document.getElementById('hero-canvas');if(!c)return;
  var ctx=c.getContext('2d');
  var W,H,pts=[];
  var mouse={x:-999,y:-999};
  function resize(){W=c.width=c.offsetWidth||innerWidth;H=c.height=c.offsetHeight||innerHeight;}
  window.addEventListener('resize',resize,{passive:true});resize();
  var N=Math.min(70,Math.floor(W*H/14000));
  for(var i=0;i<N;i++) pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.2+.4,c:Math.random()>.5?'blue':'cyan'});
  document.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});
  function tick(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      var dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<100){var f=(100-d)/100*.3;p.vx+=dx/d*f;p.vy+=dy/d*f;}
      var sp=Math.sqrt(p.vx*p.vx+p.vy*p.vy);if(sp>1){p.vx/=sp;p.vy/=sp;}
    });
    for(var a=0;a<pts.length;a++)for(var b=a+1;b<pts.length;b++){
      var dx=pts[a].x-pts[b].x,dy=pts[a].y-pts[b].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<130){ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.strokeStyle='rgba(0,85,255,'+(1-d/130)*.1+')';ctx.lineWidth=.7;ctx.stroke();}
    }
    pts.forEach(function(p){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c==='blue'?'rgba(0,85,255,.6)':'rgba(0,200,180,.5)';ctx.fill();});
    requestAnimationFrame(tick);
  }
  tick();
})();

/* ── Quantum Field — shared hero background (interior pages) ── */
(function(){
  var canvases=document.querySelectorAll('canvas.qfield');
  if(!canvases.length) return;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  canvases.forEach(function(c){ field(c); });

  function field(c){
    var ctx=c.getContext('2d');
    var host=c.parentElement;
    var DPR=Math.min(window.devicePixelRatio||1,2);
    var W=0,H=0,pts=[],t=0,raf=null;
    var mouse={x:-9999,y:-9999,on:false};

    function size(){
      var r=host.getBoundingClientRect();
      W=Math.max(1,r.width); H=Math.max(1,r.height);
      c.width=Math.round(W*DPR); c.height=Math.round(H*DPR);
      ctx.setTransform(DPR,0,0,DPR,0,0);
    }
    function build(){
      var mobile=W<640;
      var N=Math.max(14,Math.min(mobile?34:72,Math.floor(W*H/13000)));
      pts=[];
      for(var i=0;i<N;i++){
        pts.push({
          x:Math.random()*W, y:Math.random()*H,
          vx:(Math.random()-.5)*.20, vy:(Math.random()-.5)*.20,
          r:Math.random()*1.4+.5,
          cyan:Math.random()>.55,
          ph:Math.random()*Math.PI*2
        });
      }
    }
    size(); build();

    if(window.ResizeObserver){
      var ro=new ResizeObserver(function(){ var pw=W; size(); if(Math.abs(pw-W)>60) build(); });
      ro.observe(host);
    } else {
      window.addEventListener('resize',function(){ size(); build(); },{passive:true});
    }
    host.addEventListener('mousemove',function(e){
      var r=host.getBoundingClientRect();
      mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; mouse.on=true;
    },{passive:true});
    host.addEventListener('mouseleave',function(){ mouse.on=false; mouse.x=mouse.y=-9999; });

    var LINK=132;
    function frame(){
      t+=0.016;
      ctx.clearRect(0,0,W,H);
      if(mouse.on){
        var g=ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,150);
        g.addColorStop(0,'rgba(0,85,255,0.10)'); g.addColorStop(1,'rgba(0,85,255,0)');
        ctx.fillStyle=g; ctx.fillRect(mouse.x-150,mouse.y-150,300,300);
      }
      var i,a,b,p;
      for(i=0;i<pts.length;i++){
        p=pts[i]; p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W)p.vx*=-1;
        if(p.y<0||p.y>H)p.vy*=-1;
        if(mouse.on){
          var dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<120&&d>0){ var f=(120-d)/120*0.06; p.vx+=dx/d*f; p.vy+=dy/d*f; }
        }
        var sp=Math.sqrt(p.vx*p.vx+p.vy*p.vy); if(sp>0.9){ p.vx=p.vx/sp*0.9; p.vy=p.vy/sp*0.9; }
      }
      for(a=0;a<pts.length;a++){
        for(b=a+1;b<pts.length;b++){
          var lx=pts[a].x-pts[b].x,ly=pts[a].y-pts[b].y,ld=Math.sqrt(lx*lx+ly*ly);
          if(ld<LINK){
            ctx.beginPath(); ctx.moveTo(pts[a].x,pts[a].y); ctx.lineTo(pts[b].x,pts[b].y);
            ctx.strokeStyle='rgba(0,85,255,'+(1-ld/LINK)*0.13+')'; ctx.lineWidth=0.6; ctx.stroke();
          }
        }
      }
      for(i=0;i<pts.length;i++){
        p=pts[i]; var pulse=0.6+Math.sin(t*1.4+p.ph)*0.4; var rad=p.r*(0.8+pulse*0.5);
        ctx.beginPath(); ctx.arc(p.x,p.y,rad,0,Math.PI*2);
        ctx.fillStyle=p.cyan?'rgba(0,200,180,'+(0.26+pulse*0.30)+')':'rgba(0,85,255,'+(0.34+pulse*0.34)+')';
        ctx.fill();
      }
      raf=requestAnimationFrame(frame);
    }

    if(reduce){ frame(); if(raf){cancelAnimationFrame(raf);raf=null;} return; }
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){ if(raf){cancelAnimationFrame(raf);raf=null;} }
      else if(!raf){ raf=requestAnimationFrame(frame); }
    });
    raf=requestAnimationFrame(frame);
  }
})();

/* ── WORLD MAP CANVAS ── */
(function(){
  var c=document.getElementById('world-canvas');if(!c)return;
  var ctx=c.getContext('2d');

  /* Simplified continent polygons [lng,lat] */
  var LAND=[
    /* North America */
    [[-168,60],[-130,54],[-125,50],[-95,50],[-75,45],[-60,46],[-53,47],[-53,58],[-60,68],[-78,74],[-95,80],[-130,80],[-168,72],[-168,60]],
    /* USA + Mexico */
    [[-125,49],[-67,47],[-67,25],[-87,16],[-92,18],[-87,16],[-83,10],[-78,8],[-80,8],[-85,10],[-90,16],[-100,20],[-117,32],[-125,49]],
    /* South America */
    [[-80,12],[-65,12],[-52,5],[-35,-10],[-34,-34],[-52,-55],[-68,-55],[-75,-50],[-80,-35],[-80,8],[-80,12]],
    /* Europe */
    [[-10,36],[10,36],[15,37],[28,36],[37,37],[42,42],[40,52],[35,60],[28,72],[18,72],[5,62],[-2,60],[-5,58],[-10,56],[-10,44],[-10,36]],
    /* Africa */
    [[-18,16],[52,18],[52,10],[44,12],[52,5],[52,-15],[35,-35],[15,-35],[10,-20],[0,5],[-5,5],[-15,10],[-18,16]],
    /* Russia/N Asia */
    [[25,55],[50,58],[80,60],[130,60],[165,55],[180,55],[180,75],[130,75],[100,78],[50,72],[25,72],[25,55]],
    /* Middle East + S Asia */
    [[25,38],[75,38],[80,36],[92,22],[80,8],[78,6],[70,22],[60,22],[45,15],[38,10],[44,12],[44,28],[38,36],[25,38]],
    /* SE Asia / China */
    [[100,52],[140,52],[145,38],[130,30],[125,22],[115,18],[102,2],[102,-5],[118,-8],[110,1],[103,2],[100,5],[100,22],[108,22],[130,30],[140,36],[145,44],[145,55],[130,60],[100,52]],
    /* Australia */
    [[114,-18],[154,-18],[154,-39],[140,-40],[130,-38],[116,-32],[114,-24],[114,-18]],
    /* Greenland */
    [[-75,83],[-15,83],[-15,72],[-45,72],[-75,78],[-75,83]],
    /* Japan */
    [[130,31],[145,31],[145,45],[132,45],[130,31]],
    /* UK + Ireland (rough) */
    [[-8,50],[2,50],[2,52],[-2,54],[-6,58],[-8,58],[-8,52],[-8,50]]
  ];

  function pip(lng,lat,poly){
    var inside=false;
    for(var i=0,j=poly.length-1;i<poly.length;j=i++){
      var xi=poly[i][0],yi=poly[i][1],xj=poly[j][0],yj=poly[j][1];
      if(((yi>lat)!==(yj>lat))&&(lng<(xj-xi)*(lat-yi)/(yj-yi)+xi)) inside=!inside;
    }
    return inside;
  }
  function isLand(lng,lat){return LAND.some(function(p){return pip(lng,lat,p);});}

  function project(lng,lat,W,H){
    return {x:(lng+180)/360*W, y:(90-lat)/180*H};
  }

  /* Locations */
  var LOCS=[
    {name:'Dubai',     lng:55.3,  lat:25.2,  flag:'🇦🇪'},
    {name:'Morocco',   lng:-5.0,  lat:32.0,  flag:'🇲🇦'},
    {name:'Canada',    lng:-96.0, lat:56.0,  flag:'🇨🇦'}
  ];

  /* Arc connections */
  var ARCS=[[0,1],[1,2],[2,0]];

  var W,H;
  function draw(){
    W=c.width=c.parentElement.offsetWidth;
    H=c.height=400;
    ctx.clearRect(0,0,W,H);

    /* Dots */
    var cols=90,rows=45;
    for(var r=0;r<rows;r++){
      for(var col2=0;col2<cols;col2++){
        var lng=(col2/cols)*360-180;
        var lat=90-(r/rows)*180;
        if(isLand(lng,lat)){
          var p=project(lng,lat,W,H);
          ctx.beginPath();ctx.arc(p.x,p.y,1.6,0,Math.PI*2);
          ctx.fillStyle='rgba(245,237,218,0.15)';ctx.fill();
        }
      }
    }

    /* Arc lines */
    var t=Date.now()/1000;
    ARCS.forEach(function(pair,idx){
      var a=LOCS[pair[0]],b=LOCS[pair[1]];
      var pa=project(a.lng,a.lat,W,H),pb=project(b.lng,b.lat,W,H);
      var cpx=(pa.x+pb.x)/2,cpy=Math.min(pa.y,pb.y)-H*0.12;
      var prog=(Math.sin(t*0.7+idx*1.1)+1)/2;
      var steps=60;
      ctx.beginPath();
      var first=true;
      for(var s=0;s<=Math.floor(steps*prog);s++){
        var tt=s/steps;
        var x=(1-tt)*(1-tt)*pa.x+2*(1-tt)*tt*cpx+tt*tt*pb.x;
        var y=(1-tt)*(1-tt)*pa.y+2*(1-tt)*tt*cpy+tt*tt*pb.y;
        if(first){ctx.moveTo(x,y);first=false;}else ctx.lineTo(x,y);
      }
      ctx.strokeStyle='rgba(0,85,255,0.55)';ctx.lineWidth=1.5;
      ctx.setLineDash([4,3]);ctx.stroke();ctx.setLineDash([]);
    });

    /* Pulsing markers */
    var pulse=(Math.sin(t*2)+1)/2;
    LOCS.forEach(function(loc){
      var p=project(loc.lng,loc.lat,W,H);
      /* Outer pulse */
      ctx.beginPath();ctx.arc(p.x,p.y,6+pulse*6,0,Math.PI*2);
      ctx.strokeStyle='rgba(0,85,255,'+(0.5-pulse*0.4)+')';ctx.lineWidth=1.5;ctx.stroke();
      /* Inner dot */
      ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);
      ctx.fillStyle='#0055ff';ctx.fill();
      ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fillStyle='#fff';ctx.fill();
      /* Label */
      ctx.font='bold 10px "Space Mono",monospace';
      ctx.fillStyle='rgba(245,237,218,0.8)';
      ctx.textAlign='center';
      ctx.fillText(loc.name,p.x,p.y-12);
    });
  }

  draw();
  window.addEventListener('resize',draw,{passive:true});
  (function anim(){draw();requestAnimationFrame(anim);})();
})();

/* ── Futuristic hero FX (vanilla WebGL port of hero-futuristic) ── */
(function(){
  var cv=document.getElementById('fx-canvas');
  if(!cv) return;
  var gl=cv.getContext('webgl2',{alpha:true,antialias:true});
  if(!gl){cv.style.display='none';return;}

  var VS='#version 300 es\nin vec2 p;out vec2 vUv;void main(){vUv=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
  var FS='#version 300 es\nprecision highp float;\n'+
  'uniform sampler2D uTex,uDepth;uniform vec2 uPointer;uniform float uProgress,uOpacity;\n'+
  'in vec2 vUv;out vec4 outC;\n'+
  'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}\n'+
  'void main(){\n'+
  ' vec2 fuv=vec2(vUv.x,1.0-vUv.y);\n'+
  ' float depth=texture(uDepth,fuv).r;\n'+
  ' vec2 puv=fuv+depth*uPointer*0.01;\n'+
  ' vec4 img=texture(uTex,puv);\n'+
  ' vec2 tiling=vec2(120.0);\n'+
  ' vec2 tiled=mod(vUv*tiling,2.0)-1.0;\n'+
  ' float bright=hash(floor(vUv*tiling/2.0));\n'+
  ' float dt=smoothstep(0.5,0.49,length(tiled))*bright;\n'+
  ' float flow=1.0-smoothstep(0.0,0.02,abs(depth-uProgress));\n'+
  ' vec3 mask=dt*flow*vec3(0.0,3.4,10.0);\n'+
  ' vec3 col=1.0-(1.0-img.rgb)*(1.0-clamp(mask,0.0,1.0));\n'+
  ' float scan=1.0-smoothstep(0.0,0.05,abs(vUv.y-(1.0-uProgress)));\n'+
  ' col+=vec3(0.0,0.13,0.4)*scan;\n'+
  ' outC=vec4(col*img.a,img.a*uOpacity);\n'+
  '}';
  function sh(t,src){var s=gl.createShader(t);gl.shaderSource(s,src);gl.compileShader(s);return s;}
  var pr=gl.createProgram();
  gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));
  gl.linkProgram(pr);
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){cv.style.display='none';return;}
  gl.useProgram(pr);
  var buf=gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  var loc=gl.getAttribLocation(pr,'p');
  gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  var uPointer=gl.getUniformLocation(pr,'uPointer'),uProgress=gl.getUniformLocation(pr,'uProgress'),
      uOpacity=gl.getUniformLocation(pr,'uOpacity'),uTexL=gl.getUniformLocation(pr,'uTex'),
      uDepthL=gl.getUniformLocation(pr,'uDepth');
  gl.uniform1i(uTexL,0);gl.uniform1i(uDepthL,1);
  gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);

  function mkTex(unit,img){
    gl.activeTexture(gl.TEXTURE0+unit);
    var t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
    return t;
  }
  var loaded=0,imgs=[new Image(),new Image()];
  imgs[0].src='hero-fx.webp';imgs[1].src='hero-fx-depth.webp';
  imgs.forEach(function(im,i){im.onload=function(){mkTex(i,im);if(++loaded===2){cv.classList.add('on');op=0;raf();}};im.onerror=function(){cv.style.display='none';};});

  var px=0,py=0,tx=0,ty=0,op=0,run=false;
  window.addEventListener('mousemove',function(e){
    tx=(e.clientX/window.innerWidth)*2-1;
    ty=-((e.clientY/window.innerHeight)*2-1);
  });
  function resize(){var d=Math.min(window.devicePixelRatio||1,2),r=cv.getBoundingClientRect();cv.width=r.width*d;cv.height=r.height*d;gl.viewport(0,0,cv.width,cv.height);}
  window.addEventListener('resize',resize);resize();
  function raf(){
    if(run) return; run=true;
    (function loop(){
      var t=performance.now()/1000;
      px+=(tx-px)*0.06;py+=(ty-py)*0.06;
      op+=(1-op)*0.05;
      gl.uniform2f(uPointer,px,py);
      gl.uniform1f(uProgress,Math.sin(t*0.5)*0.5+0.5);
      gl.uniform1f(uOpacity,op);
      gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES,0,3);
      requestAnimationFrame(loop);
    })();
  }
})();

/* ── Launch offer registration ── */
(function(){
  var f=document.getElementById('offer-form');
  if(!f) return;
  var btn=document.getElementById('of-btn');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){ f.reportValidity(); return; }
    var original=btn.textContent;
    btn.textContent='Sending…'; btn.disabled=true;

    var fd=new FormData(f);
    var g=function(k){return (fd.get(k)||'').toString().trim();};
    toGHL({
      first_name:g('contact_name'),
      email:g('email'),
      company_name:g('business'),
      city:g('city'),
      business_type:g('business_type'),
      offer:g('package'),
      source:'Website Launch Offer',
      form_type:'launch_offer',
      page:location.href,
      language:currentLang
    });

    fetch('https://api.web3forms.com/submit',{
      method:'POST',headers:{'Accept':'application/json'},body:fd
    }).then(function(r){return r.json();}).then(function(d){
      if(!d.success) throw new Error('failed');
      document.getElementById('of-form-wrap').style.display='none';
      document.getElementById('of-ok').classList.add('on');
      if(window.gtag) gtag('event','offer_register');
      if(window.dataLayer) window.dataLayer.push({event:'offer_register'});
      if(window.fbq) fbq('track','Lead',{content_name:'$500 Launch Offer',content_category:'virtual_tour'});
    }).catch(function(){
      btn.textContent='Something went wrong — try again';
      setTimeout(function(){ btn.textContent=original; btn.disabled=false; },2600);
    });
  });
})();

/* ── Real Estate listing-shoot registration ── */
(function(){
  var f=document.getElementById('re-form');
  if(!f) return;
  var btn=document.getElementById('re-btn');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){ f.reportValidity(); return; }
    var original=btn.textContent;
    btn.textContent='Sending…'; btn.disabled=true;

    var fd=new FormData(f);
    var g=function(k){return (fd.get(k)||'').toString().trim();};
    toGHL({
      first_name:g('contact_name'),
      email:g('email'),
      company_name:g('business'),
      city:g('city'),
      business_type:g('business_type'),
      offer:g('package'),
      source:'Real Estate Landing',
      form_type:'real_estate',
      page:location.href,
      language:currentLang
    });

    fetch('https://api.web3forms.com/submit',{
      method:'POST',headers:{'Accept':'application/json'},body:fd
    }).then(function(r){return r.json();}).then(function(d){
      if(!d.success) throw new Error('failed');
      document.getElementById('of-form-wrap').style.display='none';
      document.getElementById('re-ok').classList.add('on');
      if(window.gtag) gtag('event','realestate_book');
      if(window.dataLayer) window.dataLayer.push({event:'realestate_book'});
      if(window.fbq) fbq('track','Lead',{content_name:'Real Estate $300/Listing',content_category:'real_estate'});
    }).catch(function(){
      btn.textContent='Something went wrong — try again';
      setTimeout(function(){ btn.textContent=original; btn.disabled=false; },2600);
    });
  });
})();

/* ── Pricing card spotlight ── */
document.querySelectorAll('.prc').forEach(function(card){
  card.addEventListener('mousemove',function(e){
    var r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  });
});

/* ── GoHighLevel inbound webhook ──
   Every lead is sent to GHL *and* to Web3Forms/Gmail. GHL is fired
   independently so a failure there can never block the confirmation or
   lose the lead — Gmail stays as the backstop. */
var GHL_HOOK='https://services.leadconnectorhq.com/hooks/0Ku7xjVh2VyzsJCejRwy/webhook-trigger/062fa5c5-b18c-4ec0-a778-da148832b2e0';
function toGHL(payload){
  try{
    return fetch(GHL_HOOK,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    }).catch(function(){});
  }catch(e){ return Promise.resolve(); }
}

/* ── Contact Form (Web3Forms) ── */
(function(){
  var form=document.getElementById('contact-form');
  if(!form)return;
  var btn=document.getElementById('cf-btn-txt');
  var errEl=document.getElementById('cf-error');
  var defaultTxt=function(){return TRANS[currentLang].cf_send||'Send Message →';};

  form.addEventListener('submit',function(e){
    e.preventDefault();
    errEl.style.display='none';
    btn.textContent='Sending...';

    var formData=new FormData(form);
    var g=function(k){return (formData.get(k)||'').toString().trim();};
    toGHL({
      first_name:g('first_name'),
      last_name:g('last_name'),
      email:g('email'),
      service_interest:g('service'),
      message:g('message'),
      source:'Website Contact Form',
      form_type:'contact',
      page:location.href,
      language:currentLang
    });

    fetch('https://api.web3forms.com/submit',{
      method:'POST',
      headers:{'Accept':'application/json'},
      body:formData
    })
    .then(function(res){return res.json();})
    .then(function(data){
      if(data.success){
        btn.textContent='✓ Sent! We\'ll reply within 24h';
        if(window.fbq) fbq('track','Lead',{content_name:'Contact Form',content_category:'inquiry'});
        form.reset();
      } else {
        throw new Error(data.message||'Submission failed');
      }
    })
    .catch(function(){
      btn.textContent=defaultTxt();
      errEl.style.display='block';
    })
    .finally(function(){
      setTimeout(function(){
        btn.setAttribute('data-i18n','cf_send');
        btn.textContent=defaultTxt();
      },5000);
    });
  });
})();

})();
