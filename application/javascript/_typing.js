new TypeIt('#name', {
  strings: ["Euan", "Gillespie", "Taylor"],
  waitUntilVisible: true,
  cursor: false,
  speed: 70,
}).go();

new TypeIt('#desc', {
  waitUntilVisible: true,
  startDelay: 4000,
  cursor: false,
  speed: 90
})
  .type("Fullstack Developer", { delay: 1500 })
  .delete(19)
  .pause(1)
  .type("Writer", { delay: 1500 })
  .delete(6)
  .pause(2)
  .type("Human", { delay: 1000 })
  .pause(3)
  .type(" - most of the time", { delay: 1000 })
  .pause(2.5)
  .delete(24)
  .pause(1)
  .type("Fullstack Developer", { delay: 1500 })
  .go();