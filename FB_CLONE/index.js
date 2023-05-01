// for ssee more button in vertical navbar


const seeMore = document.getElementById('see-more');
console.log(seeMore)
const hidden = document.querySelectorAll('.hidden')
console.log(hidden)
const hiddenPara = document.getElementById('hidden-para');
console.log(hiddenPara)
const hiddenIconSeeLess = document.getElementById('hidden-icon-see-less');
console.log(hiddenIconSeeLess);



seeMore.addEventListener('click', () => {

	if (hiddenIconSeeLess.getAttribute('name') == 'chevron-up-outline') {

		hiddenIconSeeLess.setAttribute('name', 'chevron-down-outline')
		hiddenPara.innerHTML = 'See more'


	} else {
		hiddenIconSeeLess.setAttribute('name', 'chevron-up-outline');
		hiddenPara.innerHTML = 'See less'
	}


	hidden.forEach((btn) => {

		btn.classList.toggle('hidden')


	})
})












// for switching between section

const midPage = document.getElementById('middle-page')
const storiesSection = document.getElementById('stories-section')
const posts = document.querySelectorAll('.post-box')
const tabs = document.querySelectorAll('.nav-mid-btn')
const mesNav = document.getElementById('messenger-nav')

tabs.forEach((tab) => {
	tab.addEventListener('click', (e) => {


		if (tab == tabs[0]) {

			posts.forEach((post) => {
				post.style.display = '';
				storiesSection.style.display = '';
				mesNav.style.display = '';
			})

			console.log(tab)
			midPage.setAttribute('class', 'mid-page')
		} else {

			posts.forEach((post) => {

				post.style.display = 'none';
				storiesSection.style.display = 'none';
				mesNav.style.display = 'none';
			})

			if (tab == tabs[1]) {

				// console.log(tab)
				midPage.setAttribute('class', 'mid-page-friends');
				midPage.removeAttribute('class', 'mid-page')


			} else if (tab == tabs[2]) {
				// console.log(tab)
				midPage.setAttribute('class', 'mid-page-video')
			} else if (tab == tabs[3]) {
				// console.log(tab)
				midPage.setAttribute('class', 'mid-page-marketplace')
			} else if (tab == tabs[4]) {
				// console.log(tab)
				midPage.setAttribute('class', 'mid-page-groups')
			}



		}





	})
})









// code for deleting a post when close button is clicked


const closeBtns = document.getElementsByName('close-outline')
// console.log(closeBtns)
closeBtns.forEach((closeBtn) => {
	closeBtn.addEventListener('click', (e) => {
		const targetCloseBtn = e.target;

		posts.forEach((post) => {
			if (post.contains(targetCloseBtn)) {
				post.style.display = 'none';
			}
		})
	})
})

// const name=document.querySelectorAll('.messenger-contact .para');
// console.log(name)






// for messenger-menu and account option


const fourMainBtns = document.getElementsByClassName('nav-messege-btn');

const fixedBoxes = document.getElementsByClassName('fixed-boxes');


Array.from(fourMainBtns).forEach((fourMainBtn) => {

	fourMainBtn.addEventListener("click", (e) => {
		Array.from(fixedBoxes).forEach((fixedBox) => {
			if ((fixedBox.getAttribute('data-id')) == (fourMainBtn.getAttribute('data-id'))) {
				// console.log(fixedBox.getAttribute('data-id'))
				fixedBox.classList.toggle('not-hidden')


			} else {
				fixedBox.classList.remove('not-hidden')
			}
		})
	})


})

// for close btn in messenger or account btns

const closeFixedBtns = document.querySelectorAll('.messenger-box-fixed-icon');
const fixedBoxs = document.querySelectorAll('.fixed-boxes');


fixedBoxs.forEach((fixed) => {
	closeFixedBtns.forEach((fixedbtn) => {
		fixedbtn.addEventListener('click', () => {

			fixed.classList.remove('not-hidden')

		})
	})
})





























const body = document.getElementById('body')
const header = document.getElementById('header')


// for dark mode

const darkbtn = document.getElementById('dark-btn')
const afterNav = document.getElementsByTagName('*')
const verticalNav = document.getElementById('vertical-nav')
const messengerNav = document.getElementById('messenger-nav')

// Get the button element


darkbtn.addEventListener('click', () => {

	if (body.style.color == 'black') {
		console.log('white mode')
		document.documentElement.style.setProperty('--white', '#fff');
		document.documentElement.style.setProperty('--grey', '#f0f2f5');
		document.documentElement.style.setProperty('--lightblack', '#3a3b3c');
		document.documentElement.style.setProperty('--darkpara', '#b0b3b8');
		document.documentElement.style.setProperty('--ccc', '#ccc');
	} else if (body.style.color != 'black') {

		console.log('dark')
		document.documentElement.style.setProperty('--white', '#3a3b3c');
		document.documentElement.style.setProperty('--grey', '#18191a');
		document.documentElement.style.setProperty('--lightblack', '#fff');
		document.documentElement.style.setProperty('--darkpara', '#000');
		document.documentElement.style.setProperty('--ccc', '#000');

	}





})



//for like btn
const likeBtn = document.querySelectorAll('.interaction')
const likeIcon = document.querySelectorAll('.icon')

likeBtn.forEach((likes) => {
	likes.addEventListener('click', (e) => {

		if (likes.style.color != 'var(--blue)') {

			likes.style.color = 'var(--blue)';

			likeIcon.forEach((icon) => {
				if (likes.contains(icon)) {

					icon.style.color = 'var(--blue)'

				}

			})




		} else {
			likes.style.color = 'var(--lightblack)';
			likeIcon.forEach((icon) => {
				if (likes.contains(icon)) {

					icon.style.color = 'var(--lightblack)'


				}

			})

		}

	})
})


// for blue color in active heeading

const storyHeading = document.querySelectorAll('.heading');
storyHeading.forEach((heading) => {
	console.log(heading)
	heading.addEventListener('click', (e) => {
		if (heading.style.color != 'var(--blue)') {
			heading.classList.add('active-heading')

		} else {
			heading.classList.remove('active-heading')

		}





	})
})