const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#ffffff";
}

const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        courseNumber = i + 1;
        let coursePath = `./courses/course-${courseNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath));
    }
}

calendarButton.addEventListener("click", createCalendar);

const createSnow = () => {
	const snowflake = document.createElement('i')
	snowflake.classList.add('snowflake')
	snowflake.textContent = '❄️'

	snowflake.style.left = Math.random() * window.innerWidth + 'px'
	snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'
	snowflake.style.opacity = Math.random()

	document.body.append(snowflake)

	setTimeout(() => {
		snowflake.remove()
	}, 8000)
}

setInterval(createSnow, 50)

