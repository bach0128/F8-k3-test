var posts = [
    {
        title: "Tieu de bai viet 1",
        thumbnail: 
        "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        expert: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
        distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
        cupiditate.`,
    },
    {
        title: "Tieu de bai viet 1",
        thumbnail: 
        "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        expert: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
        distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
        cupiditate.`,
    },
    {
        title: "Tieu de bai viet 1",
        thumbnail: 
        "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        expert: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
        distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
        cupiditate.`,
    }
];





var html = `
<div class="posts">
      <div class="post-item image-right">
        <img
          src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt=""
        />
        <h2>Tieu de bai viet</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
          cupiditate.
        </p>
      </div>

      <div class="post-item">
        <img
          src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt=""
        />
        <h2>Tieu de bai viet</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
          cupiditate.
        </p>
      </div>

      <div class="post-item">
        <img
          src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt=""
        />
        <h2>Tieu de bai viet</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
          cupiditate.
        </p>
      </div>
    </div>
`
var html = `<div class="posts">
    ${posts.map(function(post, index) {
        return `
        <div class="post-item">
        <img
          src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt=""
        />
        <h2>Tieu de bai viet</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          distinctio odit ut quisquam accusantium! Ipsum alias facilis ipsa ab
          cupiditate.
        </p>
      </div>
        `
    }).join('')}   
    </div>`

document.write(html)
