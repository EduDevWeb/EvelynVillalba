const pre = () =>{
    firebase.database().ref('informacion').once('value').then( snap => {
        let result = snap.val();
        console.log(result);
        document.querySelector('#aboutMe-p').innerHTML+=/*html*/`
          <img class="left" src="${result.foto}" alt="">
        `;
      });
    firebase.database().ref('precios/paquetes').once('value').then( snap => {
      let result = snap.val();
      console.log(result);
      document.querySelector('#cards-packs').innerHTML=/*html*/`
            <article id="events-card" class="card2">
                <img class="far fa" src="img/undraw_special_event_4aj8.svg" alt="">
                <h3>Events</h3>
                <p>${result.events.time}</p>
                <p>$${result.events.price}</p>
                <a class="cta boton-ver-mas" onclick="verMas('events-card')">Learn more</a>
                <p class="contenido-activo">${result.events.info}</p>
                <a class="cta boton-ver-menos" onclick="verMenos('events-card')">Learn min</a>
            </article>
            <article id="familiar-card" class="card2">
                <img class="far fa" src="img/undraw_team_page_pgpr.svg" alt="">
                <h3>Familiar</h3>
                <p>${result.familiar.time}</p>
                <p>$${result.familiar.price}</p>
                <a class="cta boton-ver-mas" onclick="verMas('familiar-card')">Learn more</a>
                <p class="contenido-activo">${result.familiar.info}</p>
                <a class="cta boton-ver-menos" onclick="verMenos('familiar-card')">Learn min</a>
            </article>
            <article id="casual-card" class="card2">
                <img class="far fa" src="img/undraw_polaroid_gg6n.svg" alt="">
                <h3>Casual</h3>
                <p>${result.casual.time}</p>
                <p>$${result.casual.price}</p>
                <a class="cta boton-ver-mas" onclick="verMas('casual-card')">Learn more</a>
                <p class="contenido-activo">${result.casual.info}</p>
                <a class="cta boton-ver-menos" onclick="verMenos('casual-card')">Learn min</a>
            </article>
            <article id="senior-card" class="card2">
                <img class="far fa" src="img/undraw_businessman_97x4.svg" alt="">
                <h3>Senior</h3>
                <p>${result.senior.time}</p>
                <p>$${result.senior.price}</p>
                <a class="cta boton-ver-mas" onclick="verMas('senior-card')">Learn more</a>
                <p class="contenido-activo">${result.senior.info}</p>
                <a class="cta boton-ver-menos" onclick="verMenos('senior-card')">Learn min</a>
            </article>
            <article id="special-card" class="card2">
                <img class="far fa" src="img/undraw_wedding_t1yl.svg" alt="">
                <h3>Special</h3>
                <p>${result.special.time}</p>
                <p>$${result.special.price}</p>
                <a class="cta boton-ver-mas" onclick="verMas('special-card')">Learn more</a>
                <p class="contenido-activo">${result.special.info}</p>
                <a class="cta boton-ver-menos" onclick="verMenos('special-card')">Learn min</a>
            </article>
            <article id="promotion-card" class="card2">
                <img class="far fa" src="img/undraw_marketing_v0iu.svg" alt="">
                <h3>Promotion</h3>
                <p>${result.promotion.time}</p>
                <p>$${result.promotion.price}</p>
                <a class="cta boton-ver-mas" onclick="verMas('promotion-card')">Learn more</a>
                <p class="contenido-activo">${result.promotion.info}</p>
                <a class="cta boton-ver-menos" onclick="verMenos('promotion-card')">Learn min</a>
            </article>
      `;
    });
    firebase.database().ref('portafolio').once('value').then( snap => {
        let result = snap.val();
        console.log(result);
        document.querySelector('#carrousel-work-1').innerHTML=/*html*/`
            <h2>${result[0].title}</h2>
            <article class="galeria-cont">
            <img src="${result[0].imgs[0]}" alt="">
            <img src="${result[0].imgs[1]}" alt="">
            <img src="${result[0].imgs[2]}" alt="">
            <img src="${result[0].imgs[3]}" alt="">
            <img src="${result[0].imgs[4]}" alt="">
            <img src="${result[0].imgs[5]}" alt="">
            </article>
        `;
        document.querySelector('#carrousel-work-2').innerHTML=/*html*/`
            <h2>${result[1].title}</h2>
            <article class="galeria-cont">
            <img src="${result[1].imgs[0]}" alt="">
            <img src="${result[1].imgs[1]}" alt="">
            <img src="${result[1].imgs[2]}" alt="">
            <img src="${result[1].imgs[3]}" alt="">
            <img src="${result[1].imgs[4]}" alt="">
            <img src="${result[1].imgs[5]}" alt="">
            </article>
        `;
        document.querySelector('#carrousel-work-3').innerHTML=/*html*/`
            <h2>${result[2].title}</h2>
            <article class="galeria-cont">
            <img src="${result[2].imgs[0]}" alt="">
            <img src="${result[2].imgs[1]}" alt="">
            <img src="${result[2].imgs[2]}" alt="">
            <img src="${result[2].imgs[3]}" alt="">
            <img src="${result[2].imgs[4]}" alt="">
            <img src="${result[2].imgs[5]}" alt="">
            </article>
        `;
        document.querySelector('#carrousel-work-4').innerHTML=/*html*/`
            <h2>${result[3].title}</h2>
            <article class="galeria-cont">
            <img src="${result[3].imgs[0]}" alt="">
            <img src="${result[3].imgs[1]}" alt="">
            <img src="${result[3].imgs[2]}" alt="">
            <img src="${result[3].imgs[3]}" alt="">
            <img src="${result[3].imgs[4]}" alt="">
            <img src="${result[3].imgs[5]}" alt="">
            </article>
        `;
      });
}