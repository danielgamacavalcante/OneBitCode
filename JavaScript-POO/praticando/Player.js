class Player {
  constructor(username, sex) {
    this.username = username;
    this.sex = sex;
    this.group = [];
  }
  addPoker(poker) {
    this.poker = poker;
    return this.group.push(poker);
  }
  meeting(poker) {
    if (this.getRandom() == 0) {
      console.log("Sem encontro");
    } else if (this.getRandom() == 1) {
      console.log("Encontrou");
      this.battle(poker);
    }
  }
  getRandom() {
    return Math.floor(Math.random() * (2 - 0) + 0);
  }
  capture() {}
  move(poker) {
    this.poker = poker;
    const move = Math.floor(Math.random() * (4 - 0) + 0);
    if (move == 0) {
      console.log("Moveu cima");
      this.meeting(this.poker);
    } else if (move == 1) {
      console.log("Moveu baixo");
      this.meeting(this.poker);
    } else if (move == 2) {
      console.log("Moveu direito");
      this.meeting(this.poker);
    } else {
      console.log("Moveu esquerdo");
      this.meeting(this.poker);
    }
  }
  battle(poker) {
    let hpOponente;
    let yourHP;
    const pokerForBattle =
      this.group[Math.floor(Math.random() * this.group.length)];
    let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(randomNumber);
    if (randomNumber == 1) {
      console.log("Você começa atacando com " + pokerForBattle.name);
      const damage = pokerForBattle.randomSkill();
      console.log("Dano: " + damage);
      console.log("Vida oponente: " + poker.hp);
      hpOponente = poker.hp - damage;
      console.log(`Vida atual: ${hpOponente}`);
    } else {
      console.log("Oponente Ataca " + poker.name);
      const damage = poker.randomSkill();
      console.log("Dano: " + damage);
      console.log("Vida de seu Poker: " + pokerForBattle.hp);
      yourHP = pokerForBattle.hp - damage;
      console.log(`Vida atual: ${yourHP}`);
    }
  }
}

module.exports = Player;
