const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes(){
	const triggerBottom = window.innerHeight / 5 * 4
	console.log('triggerBottom: ' + triggerBottom)

	boxes.forEach(box=>{
		const boxTop = box.getBoundingClientRect().top
		console.log('boxTop: ' + boxTop)

		if (boxTop < triggerBottom) {
			box.classList.add('show')
		}
		else {
			box.classList.remove('show')
		}

	})

}