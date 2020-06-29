function init(){
    firebase.database().ref('informacion').once('value').then( snap => {
        let result = snap.val();
        console.log(result);
        document.querySelector('#aboutMe-img').src= result.foto;
        document.querySelector('#aboutMe-img-inp').value= result.foto;
    });
    firebase.database().ref('precios/paquetes').once('value').then( snap => {
        let result = snap.val();
        document.querySelector('#form-edit-packs').innerHTML=`
            <input id="inpt-time-pack" style="width: 100% !important;" class="input" type="text" placeholder="Tiempo" value="${result.events.time}">
            <input id="inpt-price-pack" style="width: 100% !important;" class="input" type="text" placeholder="Precio" value="${result.events.price}">
            <label for="descripcion">Descripcion: </label>
            <textarea id="inpt-info-pack" class="input" name="descripcion" cols="30" rows="10">${result.events.info}</textarea>
            <button id="btn-act-pack" class="input">Actualizar</button>
        `;
    });
    firebase.database().ref('portafolio').once('value').then( snap => {
        let result = snap.val();
        console.log(result);
        document.querySelector('#form-edit-works').innerHTML=`
            <input id="inpt-title-work" style="width: 100% !important;" class="input"  type="text" placeholder="Titulo" value="${result[0].title}">
            <input id="inpt-img-work0" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 1" value="${result[0].imgs[0]}">
            <input id="inpt-img-work1" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 2" value="${result[0].imgs[1]}"> 
            <input id="inpt-img-work2" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 3" value="${result[0].imgs[2]}">
            <input id="inpt-img-work3" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 4" value="${result[0].imgs[3]}">
            <input id="inpt-img-work4" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 5" value="${result[0].imgs[4]}">
            <input id="inpt-img-work5" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 6" value="${result[0].imgs[5]}">
            <button id="btn-act-work" class="input">Actualizar</button>
        `;
    });
    firebase.database().ref('mensajes').once('value').then( snap => {
        let result = snap.val();
        for (let i = 1; i <= result[0]; i++) {
            document.querySelector('#mensajes-cont').innerHTML+=`
            <div class="contenedor form">
                <a class="btn-eliminar">Eliminar Mensaje</a>
                <input disabled class="input" type="text" placeholder="Nombre" value="${result[i].nombre}">
                <input disabled class="input" type="text" placeholder="Email" value="${result[i].email}">
                <label for="descripcion">Mensaje: </label>
                <textarea disabled class="input" name="descripcion" cols="30" rows="10">${result[i].contenido}</textarea>
            </div>
            `;
        }
    });
    setTimeout(() => {
        document.querySelector('#btn-act-img').addEventListener('click',()=>{
            try{
                firebase.database().ref('informacion/foto').set(document.querySelector('#aboutMe-img-inp').value);
                document.querySelector('#aboutMe-img').src= document.querySelector('#aboutMe-img-inp').value;
                alert("Actualizado correctamente");
            }catch{
                alert("Error al actualizar");
            }
        });
        document.querySelector('#btn-act-pack').addEventListener('click',()=>{
            try{
                firebase.database().ref('precios/paquetes/events').set({
                    time: document.querySelector('#inpt-time-pack').value,
                    price: document.querySelector('#inpt-price-pack').value,
                    info: document.querySelector('#inpt-info-pack').value
                });
                alert("Actualizado correctamente");
            }catch{
                alert("Error al actualizar");
            }
        });
        document.querySelector('#btn-act-work').addEventListener('click',()=>{
            try{
                firebase.database().ref('portafolio/0').set({
                    title: document.querySelector('#inpt-title-work').value,
                    imgs: [
                        document.querySelector('#inpt-img-work0').value,
                        document.querySelector('#inpt-img-work1').value,
                        document.querySelector('#inpt-img-work2').value,
                        document.querySelector('#inpt-img-work3').value,
                        document.querySelector('#inpt-img-work4').value,
                        document.querySelector('#inpt-img-work5').value
                    ],
                    inf: ''
                });
                alert("Actualizado correctamente");
            }catch{
                alert("Error al actualizar");
            }
        });
    }, 2000);
}

document.querySelector('#btn-log').addEventListener('click',()=>{
    if ( document.querySelector('#inpt-log-usr').value != "" && document.querySelector('#inpt-log-clv').value != "" ) {
        try{
            firebase.database().ref('4dm1n/'+document.querySelector('#inpt-log-usr').value).once('value').then( snap => {
                let result = snap.val();
                if (result.passw == document.querySelector('#inpt-log-clv').value) {
                    document.querySelector('#app').innerHTML=`
                    <div class="contenedor">
                    <h2 class="titulo">Cambiar foto de perfil</h2>
                    <div class="form">
                        <img id="aboutMe-img" style="width: 100%;" src="https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.0-9/103265939_3924328217609169_7353309481717892647_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=cIvNGHz7wT4AX-m89YY&_nc_ht=scontent.fcuu2-1.fna&oh=b3743e9e1ccfebac3bd368ef93171114&oe=5F20B308" alt="">
                        <input id="aboutMe-img-inp" style="width: 100% !important;" class="input"  type="text"  placeholder="URL Foto De Perfil">
                        <button id="btn-act-img" class="input">Actualizar</button>
                    </div>
                    </div>
                    <div class="contenedor">
                        <h2 class="titulo">Cambiar Informacion De Los Paquetes</h2>
                        <div class="select-pack">
                            <p>
                                <label>
                                <input onclick="editPack('events')" class="with-gap" name="group1" type="radio" checked />
                                <span>Events</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editPack('familiar')" class="with-gap" name="group1" type="radio" />
                                <span>Familiar</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editPack('casual')" class="with-gap" name="group1" type="radio"  />
                                <span>Casual</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editPack('senior')" class="with-gap" name="group1" type="radio" />
                                <span>Senior</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editPack('special')" class="with-gap" name="group1" type="radio" />
                                <span>Special</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editPack('promotion')" class="with-gap" name="group1" type="radio" />
                                <span>Promotion</span>
                                </label>
                            </p>
                        </div>
                        <p>.<hr>.</p>
                        <div id="form-edit-packs" class="form">
                        </div>
                    </div>
                    <div class="contenedor">
                        <h2 class="titulo">Actualizar Portafolio</h2>
                        <div class="select-pack">
                            <p>
                                <label>
                                <input onclick="editWork('0')" class="with-gap" name="group2" type="radio" checked />
                                <span>Work 1</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editWork('1')" class="with-gap" name="group2" type="radio" />
                                <span>Work 2</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editWork('2')" class="with-gap" name="group2" type="radio"  />
                                <span>Work 3</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input onclick="editWork('3')" class="with-gap" name="group2" type="radio" />
                                <span>Work 4</span>
                                </label>
                            </p>
                        </div>
                        <p>.<hr>.</p>
                        <div id="form-edit-works" class="form">
                        </div>
                    </div>
                    <div class="contenedor">
                        <h2 class="titulo">Mensajes Recibidos</h2>
                        <div id="mensajes-cont" class="contenedor">
                        </div>
                    </div>
                    `;
                    setTimeout(() => {
                        init();
                    }, 1500);
                    alert('Sesion iniciada correctamente');
                } else{
                    alert('error al iniciar sesion datos invalidos');
                }
            });
        }catch{
            alert('error al iniciar sesion datos invalidos');
        }
    }else{
        alert('error al iniciar sesion datos invalidos');
    }
});

function editPack(paquete){
    firebase.database().ref('precios/paquetes/'+paquete).once('value').then( snap => {
        let result = snap.val();
        document.querySelector('#form-edit-packs').innerHTML=`
            <input id="inpt-time-pack" style="width: 100% !important;" class="input" type="text" placeholder="Tiempo" value="${result.time}">
            <input id="inpt-price-pack" style="width: 100% !important;" class="input" type="text" placeholder="Precio" value="${result.price}">
            <label for="descripcion">Descripcion: </label>
            <textarea id="inpt-info-pack" class="input" name="descripcion" cols="30" rows="10">${result.info}</textarea>
            <button id="btn-act-pack" class="input">Actualizar</button>
        `;
    });
    setTimeout(() => {
        document.querySelector('#btn-act-pack').addEventListener('click',()=>{
            try{
                firebase.database().ref('precios/paquetes/'+paquete).set({
                    time: document.querySelector('#inpt-time-pack').value,
                    price: document.querySelector('#inpt-price-pack').value,
                    info: document.querySelector('#inpt-info-pack').value
                });
                alert("Actualizado correctamente");
            }catch{
                alert("Error al actualizar");
            }
        });
    }, 2000);
}
function editWork(work){
    firebase.database().ref('portafolio/'+work).once('value').then( snap => {
        let result = snap.val();
        console.log(result);
        document.querySelector('#form-edit-works').innerHTML=`
            <input id="inpt-title-work" style="width: 100% !important;" class="input"  type="text" placeholder="Titulo" value="${result.title}">
            <input id="inpt-img-work0" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 1" value="${result.imgs[0]}">
            <input id="inpt-img-work1" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 2" value="${result.imgs[1]}"> 
            <input id="inpt-img-work2" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 3" value="${result.imgs[2]}">
            <input id="inpt-img-work3" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 4" value="${result.imgs[3]}">
            <input id="inpt-img-work4" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 5" value="${result.imgs[4]}">
            <input id="inpt-img-work5" style="width: 100% !important;" class="input"  type="text" placeholder="URL foto numero: 6" value="${result.imgs[5]}">
            <button id="btn-act-work" class="input">Actualizar</button>
        `;
    });
    setTimeout(() => {
        document.querySelector('#btn-act-work').addEventListener('click',()=>{
            try{
                firebase.database().ref('portafolio/'+work).set({
                    title: document.querySelector('#inpt-title-work').value,
                    imgs: [
                        document.querySelector('#inpt-img-work0').value,
                        document.querySelector('#inpt-img-work1').value,
                        document.querySelector('#inpt-img-work2').value,
                        document.querySelector('#inpt-img-work3').value,
                        document.querySelector('#inpt-img-work4').value,
                        document.querySelector('#inpt-img-work5').value
                    ],
                    inf: ''
                });
                alert("Actualizado correctamente");
            }catch{
                alert("Error al actualizar");
            }
        });
    }, 2000);
}