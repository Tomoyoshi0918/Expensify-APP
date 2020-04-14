import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());

// })


// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });




// database.ref('expenses').push({
//   description: 'this is description!',
//   note: 'Its note',
//   amount: 100,
//   createdAt: 12345656989
// });

// // database.ref('notes').push({
// //   title: 'Mario',
// //   body: 'Go for a Luigi run '
// // });

// // const firebaseNotes = {
// //   ntes: {
// //     apoijasdf: {
// //       title: 'First note!',
// //       body: 'This is my note'
// //     },
// //     asdfasdfasdf: {
// //       title: 'Another note!',
// //       body: 'This is my note'
// //     }
// //   }
// // };

// // const notes = [{
// //   id: '12',
// //   title: 'First note!',
// //   body: 'This is my note'
// // }, {
// //   id: '761ase',
// //   title: 'Another note!',
// //   body: 'This is my note'
// // }];

// // database.ref('notes').set(notes);
// // database.ref('notes/12');


// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })


// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Mario error', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(38);
// // }, 3500);
// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);
// // setTimeout(() => {
// //   database.ref('age').set(900);
// // }, 10000);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   }).catch((e) => {
// //     console.log('Error fetching data'), e;
// //   });


// // database.ref().set({
// //   name: 'Mario Hane',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'developer',
// //     company: 'Google'
// //   },
// //   isSingle: false,
// //   location: {
// //     city: 'Pearch castle',
// //     country: 'EU'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seatle'
// // });


// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });