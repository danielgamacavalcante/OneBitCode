class Poker {
  constructor(name, type, lv, hp, agi) {
    this.name = name;
    this.type = type;
    this.lv = lv;
    this.hp = hp;
    this.agi = agi;
    this.lastSkillLearned = { name, type, damage: 0, id: 0 };
    this.arraySkills = [];
    this.randomSkill = function randomSkill() {
      const skill =
        this.arraySkills[Math.floor(Math.random() * this.arraySkills.length)];
      console.log("Usou: " + skill.name);
      return skill.damage;
    };
  }

  addskill(name, type, damage, id) {
    this.lastSkillLearned = { name: name, type: type, damage: damage, id: id };
    this.arraySkills.push(this.lastSkillLearned);
  }
}
module.exports = Poker;
