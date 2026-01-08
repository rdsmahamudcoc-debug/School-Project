// ১. ফায়ারবেস লাইব্রেরি ইমপোর্ট (CDN থেকে)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    push, 
    set, 
    onValue, 
    remove, 
    update, 
    get, 
    child 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ২. আপনার ফায়ারবেস কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyC8jNGeXyeTElnF1v9CDebG_Vs7xTKHz9Q",
  authDomain: "school-project-b8a8b.firebaseapp.com",
  // ডাটাবেস URL টি আপনার প্রোজেক্ট আইডি অনুযায়ী ঠিক করে দেওয়া হলো
  databaseURL: "https://school-project-b8a8b-default-rtdb.firebaseio.com/",
  projectId: "school-project-b8a8b",
  storageBucket: "school-project-b8a8b.firebasestorage.app",
  messagingSenderId: "257031387670",
  appId: "1:257031387670:web:03c23c238abb5320145337",
  measurementId: "G-P8VWT2RG3M"
};

// ৩. অ্যাপ ইনিশিয়ালাইজ করা
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// ৪. ফাংশনগুলো এক্সপোর্ট করা (যাতে অন্য HTML ফাইলে ব্যবহার করা যায়)
export { 
    app, 
    db, 
    auth, 
    ref, 
    push, 
    set, 
    onValue, 
    remove, 
    update, 
    get, 
    child,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};
// firebase-config.js ফাইলের শেষে এই ফাংশনগুলো যোগ করুন

// স্কুল সেটিংস লোড করার ফাংশন
export function loadSchoolSettings(type = 'dashboard') {
    const refPath = type === 'website' ? 'website_settings' : 'dashboard_settings';
    return ref(db, refPath);
}

// সেটিংস আপডেট করার ফাংশন
export function updateSchoolSettings(type, data) {
    const refPath = type === 'website' ? 'website_settings' : 'dashboard_settings';
    return update(ref(db, refPath), data);
}