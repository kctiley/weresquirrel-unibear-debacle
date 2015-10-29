var db = require('monk')('localhost/weresquirrel-bear');

var colonies = db.get('colonies');
var unibear = db.get('unibear');
var unibear_agreements = db.get('unibear-agreements');
var weresquirrel = db.get('weresquirrel');
var weresquirrel_agreements = db.get('weresquirrel-agreements');
var duels = db.get('duels');
var weresquirrel_stats = db.get('weresquirrel-stats');

var colony1Id = colonies.id(),
    colony2Id = colonies.id(),
    colony3Id = colonies.id(),
    colony4Id = colonies.id();

var Bob = unibear.id(),
    Brad = unibear.id(),
    Burt = unibear.id(),
    Berry = unibear.id(),
    Blaze = unibear.id(),
    Bruno = unibear.id(),
    Bevis = unibear.id(),
    Brawt = unibear.id();

var Samson = weresquirrel.id(),
    Silas = weresquirrel.id(),
    Sam = weresquirrel.id(),
    Saul = weresquirrel.id(),
    Slippy = weresquirrel.id(),
    Slappy = weresquirrel.id(),
    Swanson = weresquirrel.id(),
    Sampsonite = weresquirrel.id();

Promise.all([
  colonies.remove().then(function() {
    return Promise.all([
      colonies.insert({_id: colony1Id, name: 'Cactus'}),
      colonies.insert({_id: colony2Id, name: 'Conundrum'}),
      colonies.insert({_id: colony3Id, name: 'Coconut'}),
      colonies.insert({_id: colony4Id, name: 'Callback'}),
    ])
  }),
  unibear.remove().then(function() {
    return Promise.all([
      unibear.insert({_id: Bob, name: 'Bob'}),
      unibear.insert({_id: Brad, name: 'Brad'}),
      unibear.insert({_id: Burt, name: 'Burt'}),
      unibear.insert({_id: Berry, name: 'Berry'}),
      unibear.insert({_id: Blaze, name: 'Blaze'}),
      unibear.insert({_id: Bruno, name: 'Bruno'}),
      unibear.insert({_id: Bevis, name: 'Bevis'}),
      unibear.insert({_id: Brawt, name: 'Brawt'}),
    ])
  }),
  unibear_agreements.remove().then(function() {
    return Promise.all([
      unibear_agreements.insert({colony_id: colony1Id, unibear_id: Bob, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony1Id, unibear_id: Brad, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony2Id, unibear_id: Burt, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony2Id, unibear_id: Berry, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony3Id, unibear_id: Blaze, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony3Id, unibear_id: Bruno, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony4Id, unibear_id: Bevis, length: 1, honey: 100}),
      unibear_agreements.insert({colony_id: colony4Id, unibear_id: Brawt, length: 1, honey: 100}),
    ])
  }),
  weresquirrel.remove().then(function() {
    return Promise.all([
      weresquirrel.insert({_id: Samson, name: 'Samson'}),
      weresquirrel.insert({_id: Silas, name: 'Silas'}),
      weresquirrel.insert({_id: Sam, name: 'Sam'}),
      weresquirrel.insert({_id: Saul, name: 'Saul'}),
      weresquirrel.insert({_id: Slippy, name: 'Slippy'}),
      weresquirrel.insert({_id: Slappy, name: 'Slappy'}),
      weresquirrel.insert({_id: Swanson, name: 'Swanson'}),
      weresquirrel.insert({_id: Sampsonite, name: 'Sampsonite'}),
    ])
  }),
  weresquirrel_agreements.remove().then(function() {
    return Promise.all([
      weresquirrel_agreements.insert({colony_id: colony1Id, weresquirrel_id: Samson, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony1Id, weresquirrel_id: Silas, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony2Id, weresquirrel_id: Sam, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony2Id, weresquirrel_id: Saul, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony3Id, weresquirrel_id: Slippy, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony3Id, weresquirrel_id: Slappy, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony4Id, weresquirrel_id: Swanson, length: 1, peanuts: 100}),
      weresquirrel_agreements.insert({colony_id: colony4Id, weresquirrel_id: Sampsonite, length: 1, peanuts: 100}),
    ])
  }),

]).then(function() {
  db.close()
})


// Promise.all([
  // colonies.remove().then(function () {
  //   return Promise.all([
      // colonies.insert({_id: colony1Id, name: 'Cactus', unibears: [Bob, Brad], weresquirrels: [Samson, Silas]}),
      // colonies.insert({_id: colony2Id, name: 'Conundrum', unibears: [Burt, Berry, weresquirrels: [Sam, Saul]}),
      // colonies.insert({_id: colony3Id, name: 'Coconut', unibears: [Blaze, Bruno], weresquirrels: [Slippy, Slappy]}),
      // colonies.insert({_id: colony4Id, name: 'Callback', unibears: [Bevis, Brat], weresquirrels: [Swanson, Sampsonite]}),
//     ])
//   })  ,

//   locations.remove().then(function () {
//     return Promise.all([
//       locations.insert({_id: galvanizeId, name: 'Galvanize', address: 'Platte St, Denver'}),
//       locations.insert({_id: pivotalId, name: 'Pivotal Labs', address: '17th St, Boulder'}),
//       locations.insert({_id: googleId, name: 'Google', address: 'Pearl St, Boulder'}),
//     ])
//   }),

//   meetups.remove({}).then(function () {
//     return Promise.all([
//       meetups.insert({
//         _id: nodeId,
//         name: 'NodeJS',
//         description: 'Learn all the scripts!',
//         locationId: galvanizeId,
//         memberIds: [joeId, kimId],
//       }),
//       meetups.insert({
//         _id: rubyId,
//         name: 'Ruby',
//         description: 'What a gem!',
//         locationId: galvanizeId,
//         memberIds: [timId, kimId],
//       }),
//       meetups.insert({
//         _id: phpId,
//         name: 'PHP',
//         description: 'And oldy but a goodie!',
//         locationId: googleId,
//         memberIds: [sueId, joeId, kimId],
//       }),
//       meetups.insert({
//         _id: pythonId,
//         name: 'Python',
//         description: 'Get your data on!',
//         locationId: googleId,
//         memberIds: [],
//       }),
//     ])
//   }),
// ]).then(function () {
//   db.close()
// })
