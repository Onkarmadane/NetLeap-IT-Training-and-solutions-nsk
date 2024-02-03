
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getFirestore , collection, getDocs , addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAJSdUBq5y6VWg9EzPBcWceMatsOaosuPc",
    authDomain: "testttt-7c843.firebaseapp.com",
    projectId: "testttt-7c843",
    storageBucket: "testttt-7c843.appspot.com",
    messagingSenderId: "1027927042669",
    appId: "1:1027927042669:web:53a984ede9f5aa1bd82d64"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  if(document.querySelector('#course-container')){const querySnapshot = await getDocs(collection(db, "courses"));
  querySnapshot.forEach((doc) => {
    // Create a div element for the card container
  const cardContainer = document.createElement('div');
  cardContainer.className = 'col-lg-4 col-md-6 col-sm-12';
  
  // Create a div element for the card itself
  const card = document.createElement('div');
  card.className = 'card mb-4';
  card.style.padding = '6%';
  
  // Create an img element for the course image
  const courseImage = document.createElement('img');
  courseImage.className = 'card-img-top';
  courseImage.src = doc.data().image
  courseImage.style.width = '50%';
  courseImage.style.margin = 'auto';
  courseImage.alt = 'Course Image';
  
  // Create a div element for the card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create an h5 element for the course title
  const courseTitle = document.createElement('h5');
  courseTitle.className = 'card-title';
  courseTitle.textContent = doc.data().title;
  
  // Create a p element for the course duration
  const courseDuration = document.createElement('p');
  courseDuration.className = 'card-text';
  courseDuration.innerHTML = `<i class="fas fa-clock"></i> Duration: ${doc.data().duration}`;
  
  // Create a p element for the instructor
  const instructor = document.createElement('p');
  instructor.className = 'card-text';
  instructor.innerHTML = `<i class="fas fa-chalkboard-teacher"></i> Instructor: ${doc.data().instructor}`;
  
  // Create a div element for the syllabus
  const syllabusDiv = document.createElement('div');
  syllabusDiv.className = 'syllabus';
  
  // Create a strong element for the syllabus title
  const syllabusTitle = document.createElement('strong');
  syllabusTitle.textContent = 'Syllabus:';
  
  // Create a ul element for the syllabus list
  const syllabusList = document.createElement('ul');
  syllabusList.className = 'syllabus-list';
  
  // Create li elements for each syllabus item
  const syllabusItem = document.createElement('p');
  syllabusItem.textContent = `Syllabus: ${doc.data().syllabus}`;
  
  cardBody.appendChild(courseTitle);
  cardBody.appendChild(courseDuration);
  cardBody.appendChild(instructor);
  cardBody.appendChild(syllabusItem);
  
  card.appendChild(courseImage);
  card.appendChild(cardBody);
  
  cardContainer.appendChild(card);
  
  // Finally, append the card container to a parent element on your web page
  const parentElement = document.querySelector('#course-container'); // Replace with the actual parent element selector
  parentElement.appendChild(cardContainer);
  
  
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  
  //   console.log(app);
  
  }
  let add_courses = document.getElementById('add-courses');
  add_courses.addEventListener('submit', async (e) => {
  e.preventDefault();

  const image_link = document.getElementById('Course-img');
  const course_title = document.getElementById('course_title');
  const duration = document.getElementById('duration');
  const instructor = document.getElementById('instructor');
  const syllabus = document.getElementById('syllabus');

  const docRef = await addDoc(collection(db, "courses"), {
    image:image_link.value,
    title: course_title.value,
    duration: duration.value,
    instructor: instructor.value,
    syllabus: syllabus.value,
  }).then(()=>{
    location.href="/admin.html";
  })
  })

  
  let submit_login = document.getElementById('submit_login');
  submit_login.addEventListener('click' , ()=> {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const add_courses = document.getElementById('add-courses').style="display:block;"
      const login_form = document.getElementById('login_form').style="display:none;"
      // console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });} )

    
  