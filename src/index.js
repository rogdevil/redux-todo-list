// import React from "react";
// import ReactDOM from "react-dom";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import { createFirestoreInstance } from "redux-firestore";
// import { rootReducer } from "./ducks/reducer";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// // setting up firebasse configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDSaaz2S-HfkCFq6BD90VpWt3OctShADyQ",
//     authDomain: "assignment-208fe.firebaseapp.com",
//     databaseURL: "https://assignment-208fe.firebaseio.com",
//     projectId: "assignment-208fe",
//     storageBucket: "assignment-208fe.appspot.com",
//     messagingSenderId: "614718936508",
//     appId: "1:614718936508:web:c9a6c686cf3f5937aec7b9",
//     measurementId: "G-0KB46PE1KQ",
// };

// // setting up user config

// const rrconfig = {
//     userProfile: "user",
//     useFirestoreForProfile: true,
// };

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// const initialState = {};
// const store = createStore(rootReducer, initialState);

// const rrfPrpos = {
//     firebase,
//     config: rrconfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance,
// };

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <reactReduxFirebaseProvider {...rrfPrpos}>
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>
//             </reactReduxFirebaseProvider>
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducer";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyDSaaz2S-HfkCFq6BD90VpWt3OctShADyQ",
    authDomain: "assignment-208fe.firebaseapp.com",
    databaseURL: "https://assignment-208fe.firebaseio.com",
    projectId: "assignment-208fe",
    storageBucket: "assignment-208fe.appspot.com",
    messagingSenderId: "614718936508",
    appId: "1:614718936508:web:c9a6c686cf3f5937aec7b9",
    measurementId: "G-0KB46PE1KQ",
};

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
