// 内置 2 个自定义角色：团子 & 斜眼
window.WANJIE_CHARACTERS = [
  {
    id: "tuanzi",
    name: "团子",
    title: "大葱剑客 · 牛奶狂暴流",
    hp: 1050,
    atk: 120,
    def: 35,
    spd: 110,
    color: "#7fe0a8",
    desc: "手持大葱的灵活战士，擅长突进与蓄力爆发；喝下牛奶后体型放大进入狂暴模式，大招转为高速位移！",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='18' fill='%23102422'/><circle cx='60' cy='62' r='30' fill='%23fff6e5'/><circle cx='50' cy='58' r='3.5' fill='%23171322'/><circle cx='70' cy='58' r='3.5' fill='%23171322'/><path d='M54 68q6 5 12 0' stroke='%23e57373' stroke-width='3' fill='none' stroke-linecap='round'/><path d='M86 24l12 56-8 2-12-56z' fill='%2366bb6a'/><path d='M80 78l10-2 3 12-10 2z' fill='%23ffffff'/></svg>",
    skills: [
      {
        id: "t_s1",
        name: "大葱突进",
        type: "dash_onion",
        power: 1.05,
        cd: 1,
        desc: "用大葱向前位移造成 105% 伤害，并获得 1 发「强化大葱」环绕身边（下次攻击额外追击一次）。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23142e20'/><path d='M16 48L46 14l4 4-30 34z' fill='%2381c784'/><path d='M12 52l6-6 4 4-6 6z' fill='%23ffffff'/></svg>"
      },
      {
        id: "t_s2",
        name: "蓄力重击",
        type: "charge_buff",
        power: 1.75,
        cd: 2,
        desc: "蓄力后对前方造成 175% 大量伤害，并获得 2 回合「强化普攻」状态。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%232e2212'/><circle cx='32' cy='32' r='16' fill='%23ffb74d'/><path d='M22 32h20M32 22v20' stroke='%23fff3e0' stroke-width='4' stroke-linecap='round'/></svg>"
      },
      {
        id: "t_s3",
        name: "牛奶狂暴 / 狂暴位移",
        type: "milk_rage",
        power: 1.4,
        cd: 4,
        desc: "喝下牛奶使体型放大、攻击与防御提升并进入「狂暴模式」；狂暴期间本技能变为高速位移突袭（造成 140% 伤害）。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%231c2540'/><rect x='22' y='16' width='20' height='34' rx='4' fill='%23ffffff'/><path d='M22 26h20v6H22z' fill='%2364b5f6'/></svg>"
      }
    ]
  },
  {
    id: "xieyan",
    name: "斜眼",
    title: "诡术控制 · 领域展开流",
    hp: 980,
    atk: 115,
    def: 38,
    spd: 125,
    color: "#c388ff",
    desc: "擅长臭气控制与激光打击，展开专属领域后移速飙升，更能以消耗自身生命为代价 100% 强制控制对手！",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='18' fill='%231b132b'/><circle cx='60' cy='58' r='28' fill='%23d1c4e9'/><ellipse cx='48' cy='54' rx='7' ry='5' fill='%23ffffff'/><ellipse cx='72' cy='54' rx='7' ry='5' fill='%23ffffff'/><circle cx='51' cy='54' r='2.8' fill='%23171322'/><circle cx='75' cy='54' r='2.8' fill='%23ff5252'/><path d='M48 72q12-4 24 2' stroke='%234a148c' stroke-width='3' fill='none'/></svg>",
    skills: [
      {
        id: "x_s1",
        name: "臭气控制",
        type: "stink_cc",
        power: 0.9,
        cd: 2,
        desc: "释放毒臭气团造成 90% 伤害，有概率使对手眩晕并降低攻击力。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%231d2914'/><circle cx='28' cy='34' r='12' fill='%239ccc65'/><circle cx='40' cy='26' r='9' fill='%23aed581'/></svg>"
      },
      {
        id: "x_s2",
        name: "斜眼激光",
        type: "laser",
        power: 1.6,
        cd: 2,
        desc: "从斜眼中发射高能激光，对目标造成 160% 穿透伤害。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%232e1026'/><path d='M10 38L54 22l2 6L12 44z' fill='%23ff5252'/><circle cx='16' cy='40' r='6' fill='%23ff8a80'/></svg>"
      },
      {
        id: "x_s3",
        name: "领域展开 · 献祭控场",
        type: "domain_cc",
        power: 1.1,
        cd: 4,
        desc: "展开领域：敌人持续承受负面 Debuff（破防+减速），自身移速大增；同时消耗自身 28% 当前生命值，100% 强制控制敌人 1 回合！",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23201036'/><circle cx='32' cy='32' r='20' fill='none' stroke='%23b388ff' stroke-width='4'/><circle cx='32' cy='32' r='8' fill='%23ff5252'/></svg>"
      }
    ]
  }
];
