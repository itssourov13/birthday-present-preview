/* RECOVERED SOURCE — de-minified with prettier from production Turbopack chunk */
/* Not original developer source; factory logic is verbatim. */
(e) => {
  "use strict";
  let t = [
      {
        id: "birthday",
        label: "Birthday",
        emoji: "🎂",
        desc: "Design birthday websites with balloon pops, interactive cake cuts, and music player cards.",
        live: !0,
        href: "/create",
      },
      {
        id: "anniversary",
        label: "Anniversary",
        emoji: "💞",
        desc: "Build romantic journeys with a champagne toast, custom photo galleries, and letters.",
        live: !0,
        href: "/create-anniversary",
      },
      {
        id: "proposal",
        label: "Proposal",
        emoji: "💍",
        desc: "Open a velvet ring box, unfold a jar of reasons, then pop the question they cannot say no to.",
        live: !0,
        href: "/create-proposal",
      },
      {
        id: "promise",
        label: "Promise",
        emoji: "🤝",
        desc: "Personalized promises and elegant digital cards with stamps.",
      },
      {
        id: "apology",
        label: "Apology",
        emoji: "🙏",
        desc: "Send sincere apologies and cute healing gestures with interactive unboxings.",
        live: !0,
        href: "/create-apology",
      },
      {
        id: "congratulations",
        label: "Congratulations",
        emoji: "🎉",
        desc: "Celebrate achievements, promotions, and milestones with virtual confetti.",
      },
      {
        id: "valentine",
        label: "Valentine's Day",
        emoji: "💘",
        desc: "Surprise your valentine with customized love letters and date countdowns.",
      },
      {
        id: "festival",
        label: "Festival Wishes",
        emoji: "🪔",
        desc: "Interactive greetings for the festivals that matter — Raksha Bandhan is live now, with Diwali, Eid and more on the way.",
        live: !0,
        children: [
          {
            id: "rakhi",
            label: "Raksha Bandhan",
            emoji: "🎀",
            desc: "Light the puja thali, tie a rakhi on their wrist, share a plate of mithai — built for siblings who are cities apart.",
            live: !0,
            href: "/create-rakhi",
          },
          {
            id: "diwali",
            label: "Diwali",
            emoji: "🪔",
            desc: "Light a row of diyas, burst crackers, and send sweets with your wishes.",
          },
          {
            id: "eid",
            label: "Eid",
            emoji: "🌙",
            desc: "Share Eid Mubarak with a crescent moon reveal and a heartfelt note.",
          },
          {
            id: "christmas",
            label: "Christmas",
            emoji: "🎄",
            desc: "Decorate a tree, unwrap presents, and leave a message under it.",
          },
          {
            id: "holi",
            label: "Holi",
            emoji: "🎨",
            desc: "Throw colour across the screen and reveal your wish underneath.",
          },
          {
            id: "navratri",
            label: "Navratri",
            emoji: "🪅",
            desc: "Nine nights of garba, dandiya and blessings for the people you love.",
          },
        ],
      },
      {
        id: "family",
        label: "Family Wishes",
        emoji: "👨‍👩‍👧",
        desc: "Heartfelt interactive wishes for the people who raised you.",
      },
      {
        id: "friendship",
        label: "Friendship",
        emoji: "💐",
        desc: "Celebrate your best friends with playful, personal keepsakes.",
      },
      {
        id: "love",
        label: "Love",
        emoji: "❤️",
        desc: "Say how you feel with an interactive, heartfelt love journey.",
      },
      {
        id: "custom",
        label: "Custom Wishes",
        emoji: "🌸",
        desc: "Build a fully custom interactive surprise for any occasion.",
        live: !0,
        href: "/create-custom",
      },
    ],
    r = t.filter((e) => e.live),
    n = {
      birthday: {
        noun: "birthday",
        emoji: "🎁",
        shareTitle: "A birthday surprise 🎁",
        emailSubject: "A birthday surprise for you 🎁",
        shareMessage: (e, t) =>
          `🎁 I made a little birthday surprise just for you! Open it here: ${e}${t ? ` (PIN: ${t})` : ""}`,
        filePrefix: "birthday-gift",
        notFoundLine: "This birthday link doesn't exist or was removed.",
      },
      anniversary: {
        noun: "anniversary",
        emoji: "💞",
        shareTitle: "An anniversary surprise 💞",
        emailSubject: "An anniversary surprise for you 💞",
        shareMessage: (e, t) =>
          `💞 I made a little anniversary surprise just for you! Open it here: ${e}${t ? ` (PIN: ${t})` : ""}`,
        filePrefix: "anniversary-gift",
        notFoundLine: "This anniversary link doesn't exist or was removed.",
      },
      proposal: {
        noun: "proposal",
        emoji: "💍",
        shareTitle: "Something I want to ask you 💍",
        emailSubject: "There is something I want to ask you 💍",
        shareMessage: (e, t) =>
          `💍 There is something I have been wanting to ask you. Open this when you have a quiet minute: ${e}${t ? ` (PIN: ${t})` : ""}`,
        filePrefix: "proposal-gift",
        notFoundLine: "This proposal link doesn't exist or was removed.",
      },
      apology: {
        noun: "apology",
        emoji: "🙏",
        shareTitle: "I need to say something 🙏",
        emailSubject: "I owe you an apology 🙏",
        shareMessage: (e, t) =>
          `🙏 I made something for you — please take a minute to open it: ${e}${t ? ` (PIN: ${t})` : ""}`,
        filePrefix: "apology-gift",
        notFoundLine: "This apology link doesn't exist or was removed.",
      },
      rakhi: {
        noun: "rakhi",
        emoji: "🎀",
        shareTitle: "Your rakhi is here 🎀",
        emailSubject: "Your rakhi is here 🎀",
        shareMessage: (e, t) =>
          `🎀 I could not reach your wrist this year, so I sent your rakhi here instead. Open it: ${e}${t ? ` (PIN: ${t})` : ""}`,
        filePrefix: "rakhi-gift",
        notFoundLine: "This rakhi link doesn't exist or was removed.",
      },
      custom: {
        noun: "surprise",
        emoji: "🌸",
        shareTitle: "A surprise just for you 🌸",
        emailSubject: "Something special, just for you 🌸",
        shareMessage: (e, t) =>
          `🌸 I made something special just for you! Open it here: ${e}${t ? ` (PIN: ${t})` : ""}`,
        filePrefix: "custom-gift",
        notFoundLine: "This link doesn't exist or was removed.",
      },
    },
    i = {
      birthday: "/create",
      anniversary: "/create-anniversary",
      proposal: "/create-proposal",
      apology: "/create-apology",
      custom: "/create-custom",
      rakhi: "/create-rakhi",
    };
  e.s([
    "LIVE_OCCASIONS",
    0,
    r,
    "OCCASIONS",
    0,
    t,
    "OPEN_OCCASION_MODAL_EVENT",
    0,
    "open-occasion-modal",
    "builderHrefFor",
    0,
    function (e) {
      return e && e in i ? i[e] : i.birthday;
    },
    "findOccasionGroup",
    0,
    function (e) {
      return e ? (t.find((t) => t.id === e && t.live && t.children?.length) ?? null) : null;
    },
    "resolveOccasionCopy",
    0,
    function (e) {
      return e && e in n ? n[e] : n.birthday;
    },
  ]);
};
