// 内置 4 个自定义角色：团子、斜眼、章鱼、神冯
window.WANJIE_CHARACTERS = [
  {
    id: "tuanzi",
    name: "团子",
    title: "大葱剑客 · 牛奶狂暴流",
    hp: 1050,
    atk: 120,
    def: 35,
    spd: 110,
    move: 2,
    color: "#7fe0a8",
    desc: "手持大葱的灵活战士，擅长突进与蓄力爆发；喝下牛奶后体型放大进入狂暴模式，大招转为高速位移！",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='18' fill='%23102422'/><circle cx='60' cy='62' r='30' fill='%23fff6e5'/><circle cx='50' cy='58' r='3.5' fill='%23171322'/><circle cx='70' cy='58' r='3.5' fill='%23171322'/><path d='M54 68q6 5 12 0' stroke='%23e57373' stroke-width='3' fill='none' stroke-linecap='round'/><path d='M86 24l12 56-8 2-12-56z' fill='%2366bb6a'/><path d='M80 78l10-2 3 12-10 2z' fill='%23ffffff'/></svg>",
    skills: [
      {
        id: "t_s1", name: "大葱突进", type: "dash_onion", power: 1.05, cd: 1, range: 3, fx: "dash",
        desc: "向前突进最多 2 格并斩击（射程 3），造成 105% 伤害，获得 1 发「强化大葱」环绕身边（下次攻击追击）。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23142e20'/><path d='M16 48L46 14l4 4-30 34z' fill='%2381c784'/><path d='M12 52l6-6 4 4-6 6z' fill='%23ffffff'/></svg>"
      },
      {
        id: "t_s2", name: "蓄力重击", type: "charge_buff", power: 1.75, cd: 2, range: 2, fx: "slash",
        desc: "蓄力后对前方造成 175% 大量伤害（射程 2），并获得 2 回合「强化普攻」状态。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%232e2212'/><circle cx='32' cy='32' r='16' fill='%23ffb74d'/><path d='M22 32h20M32 22v20' stroke='%23fff3e0' stroke-width='4' stroke-linecap='round'/></svg>"
      },
      {
        id: "t_s3", name: "牛奶狂暴 / 狂暴位移", type: "milk_rage", power: 1.4, cd: 4, range: 4, fx: "rage",
        desc: "喝下牛奶体型放大、属性提升进入「狂暴模式」（全图可用）；狂暴后变为高速位移突袭（射程 4，140% 伤害）。",
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
    move: 2,
    color: "#c388ff",
    desc: "擅长臭气控制与斜眼激光，展开领域后移速飙升，更能消耗自身生命 100% 强制控制对手！",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='18' fill='%231b132b'/><circle cx='60' cy='58' r='28' fill='%23d1c4e9'/><ellipse cx='48' cy='54' rx='7' ry='5' fill='%23ffffff'/><ellipse cx='72' cy='54' rx='7' ry='5' fill='%23ffffff'/><circle cx='51' cy='54' r='2.8' fill='%23171322'/><circle cx='75' cy='54' r='2.8' fill='%23ff5252'/><path d='M48 72q12-4 24 2' stroke='%234a148c' stroke-width='3' fill='none'/></svg>",
    skills: [
      {
        id: "x_s1", name: "臭气控制", type: "stink_cc", power: 0.9, cd: 2, range: 3, fx: "ink",
        desc: "释放毒臭气团造成 90% 伤害（射程 3），大概率使对手眩晕控制。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%231d2914'/><circle cx='28' cy='34' r='12' fill='%239ccc65'/><circle cx='40' cy='26' r='9' fill='%23aed581'/></svg>"
      },
      {
        id: "x_s2", name: "斜眼激光", type: "laser", power: 1.6, cd: 2, range: 6, fx: "laser_red",
        desc: "从斜眼中发射高能激光（射程 6），造成 160% 穿透伤害。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%232e1026'/><path d='M10 38L54 22l2 6L12 44z' fill='%23ff5252'/><circle cx='16' cy='40' r='6' fill='%23ff8a80'/></svg>"
      },
      {
        id: "x_s3", name: "领域展开 · 献祭控场", type: "domain_cc", power: 1.1, cd: 4, range: 9, fx: "domain",
        desc: "全图展开领域：自身移动力+2、敌人持续扣血破防；消耗自身 28% 生命值 100% 强制控制敌人！",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23201036'/><circle cx='32' cy='32' r='20' fill='none' stroke='%23b388ff' stroke-width='4'/><circle cx='32' cy='32' r='8' fill='%23ff5252'/></svg>"
      }
    ]
  },
  {
    id: "zhangyu",
    name: "章鱼",
    title: "深海古神 · 克苏鲁控场流",
    hp: 1100,
    atk: 112,
    def: 42,
    spd: 105,
    move: 2,
    color: "#ff80ab",
    desc: "来自深海的克苏鲁触手怪，擅长喷墨致盲、触手缠绕减速；开启克苏鲁状态后体型暴涨，精神污染控制全场！",
    avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='18' fill='%23161029'/><circle cx='60' cy='46' r='26' fill='%23e066a2'/><circle cx='50' cy='46' r='4.5' fill='%23fff176'/><circle cx='70' cy='46' r='4.5' fill='%23fff176'/><path d='M36 68c-4 18-12 28-6 34M48 70c-2 20-4 32 2 36M60 72c0 20 2 32 4 36M72 70c4 20 8 30 14 32M84 68c8 16 14 24 8 32' stroke='%23c24b88' stroke-width='7' fill='none' stroke-linecap='round'/></svg>",
    skills: [
      {
        id: "z_s1", name: "深海喷墨", type: "ink_cc", power: 0.95, cd: 2, range: 4, fx: "ink_black",
        desc: "向目标喷射大片黑墨（射程 4），造成 95% 伤害并致盲控制敌人 1 回合。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%2314141c'/><circle cx='32' cy='32' r='16' fill='%23262638' stroke='%239fa8da' stroke-width='3'/><circle cx='22' cy='22' r='5' fill='%233d3d5c'/></svg>"
      },
      {
        id: "z_s2", name: "触手缠绕", type: "tentacle_slow", power: 1.35, cd: 2, range: 3, fx: "tentacle",
        desc: "召唤深海触手捆绑敌人（射程 3），造成 135% 伤害并附加 2 回合减速（移动力减少）。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%232b1126'/><path d='M16 50c12-10 8-26 24-34 8-4 10 4 4 10-8 8-4 16 6 22' stroke='%23f06292' stroke-width='6' fill='none' stroke-linecap='round'/></svg>"
      },
      {
        id: "z_s3", name: "克苏鲁状态", type: "cthulhu_ult", power: 1.25, cd: 4, range: 9, fx: "cthulhu",
        desc: "唤醒古神！体型大幅变大、攻击提升，释放精神污染对敌人造成 125% 伤害并 100% 精神控制！",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%231c0d2e'/><circle cx='32' cy='26' r='14' fill='%23ab47bc'/><path d='M20 38l-6 16M28 40l-2 16M36 40l2 16M44 38l6 16' stroke='%23ce93d8' stroke-width='4' stroke-linecap='round'/></svg>"
      }
    ]
  },
  {
    id: "shenfeng",
    name: "神冯",
    title: "万界站长 · 权限封禁流",
    hp: 1020,
    atk: 128,
    def: 40,
    spd: 118,
    move: 2,
    color: "#ffd54f",
    desc: "万界战力榜的神秘站长，双目可射出高能激光，更能直接调用底层代码与站长封禁权限控制对手！",
    avatar: "assets/shenfeng.png",
    fallbackAvatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='18' fill='%23121b26'/><circle cx='60' cy='46' r='20' fill='%23d7ccc8'/><path d='M32 104c4-24 52-24 56 0z' fill='%2337474f'/><rect x='42' y='40' width='14' height='8' rx='2' fill='%23ffffff'/><rect x='64' y='40' width='14' height='8' rx='2' fill='%23ffffff'/><path d='M88 22l10 60' stroke='%2380deea' stroke-width='5' stroke-linecap='round'/></svg>",
    skills: [
      {
        id: "sf_s1", name: "高能激光眼", type: "big_laser", power: 1.8, cd: 2, range: 6, fx: "laser_gold",
        desc: "双眼射出巨型高能白金激光（射程 6），对敌人造成 180% 巨额穿透伤害！",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%231a2333'/><path d='M8 32h48' stroke='%23fff59d' stroke-width='10' stroke-linecap='round'/><path d='M8 32h48' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/></svg>"
      },
      {
        id: "sf_s2", name: "代码禁锢", type: "code_cc", power: 1.15, cd: 3, range: 5, fx: "code",
        desc: "作为站长调用代码锁链将敌人控住（射程 5），造成 115% 伤害并附加代码特效控制 1 回合。",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%230c2416'/><text x='32' y='38' text-anchor='middle' fill='%2300e676' font-size='20' font-family='monospace' font-weight='bold'>&lt;/&gt;</text></svg>"
      },
      {
        id: "sf_s3", name: "权限大招 · 范围封禁", type: "ban_ult", power: 1.7, cd: 4, range: 5, fx: "ban",
        desc: "丢出大范围权限代码阵（射程 5）重创并强控敌人！附带代码矩阵与「已封禁」文字特效！",
        icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%23331015'/><circle cx='32' cy='32' r='20' fill='none' stroke='%23ff5252' stroke-width='4'/><path d='M18 18l28 28' stroke='%23ff5252' stroke-width='4'/></svg>"
      }
    ]
  }
];
