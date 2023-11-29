
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Classic agenda</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/simple-grid/simple-grid.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/theme/theme.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5 style=\"text-align: center;\">Classic agenda</h5>"
 + "    <div class=\"chivato_de_fecha\" v-if=\"fecha_seleccionada && dia_de_semana_activo\">"
 + "      {{ obtener_nombre_de_dia(fecha_seleccionada.getDay())}}, {{ fecha_seleccionada.getDate() }} de {{ obtener_nombre_de_mes(fecha_seleccionada.getMonth()) }} de {{ fecha_seleccionada.getFullYear() }}"
 + "    </div>"
 + "    <table>"
 + "      <tr>"
 + "        <td>"
 + "          <button v-on:click=\"mover_a_semana_anterior\"> « </button>"
 + "        </td>"
 + "        <td class=\"width_100\">"
 + "        </td>"
 + "        <td>"
 + "          <button v-on:click=\"mover_a_semana_siguiente\"> » </button>"
 + "        </td>"
 + "      </tr>"
 + "    </table>"
 + "    <div class=\"Solo_en_moviles Solo_en_tablets Solo_en_pcs Solo_en_proyectores\">"
 + "      <table class=\"width_100\">"
 + "        <tr>"
 + "          <td class=\"width_50\">"
 + "            <div class=\"cuadro_de_dia_1\" :class=\"{activo: dia_de_semana_activo === 'Lunes'}\">"
 + "              <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Lunes')\">Lunes</div>"
 + "              <div class=\"cuadro_de_dia_3\">"
 + "                <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_lunes\" v-on:keypress.enter=\"() => introducir_tarea('lunes')\" />"
 + "              </div>"
 + "              <div class=\"cuadro_de_dia_4\">"
 + "                <ul class=\"tareas_de_dia\">"
 + "                  <li v-for=\"tarea, tarea_index in tareas_de_dia_lunes\" v-bind:key=\"'tarea-de-lunes-' + tarea_index\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                    <span>{{ tarea.name }}</span>"
 + "                  </li>"
 + "                </ul>"
 + "              </div>"
 + "            </div>"
 + "          </td>"
 + "          <td class=\"width_50\">"
 + "            <div class=\"cuadro_de_dia_1\" :class=\"{activo: dia_de_semana_activo === 'Jueves'}\">"
 + "              <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Jueves')\">Jueves</div>"
 + "              <div class=\"cuadro_de_dia_3\">"
 + "                <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_jueves\" v-on:keypress.enter=\"() => introducir_tarea('jueves')\" />"
 + "              </div>"
 + "              <div class=\"cuadro_de_dia_4\">"
 + "                <ul class=\"tareas_de_dia\">"
 + "                  <li v-for=\"tarea, tarea_index in tareas_de_dia_jueves\" v-bind:key=\"'tarea-de-jueves-' + tarea_index\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                    <span>{{ tarea.name }}</span>"
 + "                  </li>"
 + "                </ul>"
 + "              </div>"
 + "            </div>"
 + "          </td>"
 + "        </tr>"
 + "        <tr>"
 + "          <td class=\"width_50\">"
 + "            <div class=\"cuadro_de_dia_1\" :class=\"{activo: dia_de_semana_activo === 'Martes'}\">"
 + "              <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Martes')\">Martes</div>"
 + "              <div class=\"cuadro_de_dia_3\">"
 + "                <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_martes\" v-on:keypress.enter=\"() => introducir_tarea('martes')\" />"
 + "              </div>"
 + "              <div class=\"cuadro_de_dia_4\">"
 + "                <ul class=\"tareas_de_dia\">"
 + "                  <li v-for=\"tarea, tarea_index in tareas_de_dia_martes\" v-bind:key=\"'tarea-de-martes-' + tarea_index\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                    <span>{{ tarea.name }}</span>"
 + "                  </li>"
 + "                </ul>"
 + "              </div>"
 + "            </div>"
 + "          </td>"
 + "          <td class=\"width_50\">"
 + "            <div class=\"cuadro_de_dia_1\" :class=\"{activo: dia_de_semana_activo === 'Viernes'}\">"
 + "              <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Viernes')\">Viernes</div>"
 + "              <div class=\"cuadro_de_dia_3\">"
 + "                <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_viernes\" v-on:keypress.enter=\"() => introducir_tarea('viernes')\" />"
 + "              </div>"
 + "              <div class=\"cuadro_de_dia_4\">"
 + "                <ul class=\"tareas_de_dia\">"
 + "                  <li v-for=\"tarea, tarea_index in tareas_de_dia_viernes\" v-bind:key=\"'tarea-de-viernes-' + tarea_index\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                    <span>{{ tarea.name }}</span>"
 + "                  </li>"
 + "                </ul>"
 + "              </div>"
 + "            </div>"
 + "          </td>"
 + "        </tr>"
 + "        <tr>"
 + "          <td class=\"width_50\">"
 + "            <div class=\"cuadro_de_dia_1\" :class=\"{activo: dia_de_semana_activo === 'Miércoles'}\">"
 + "              <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Miércoles')\">Miércoles</div>"
 + "              <div class=\"cuadro_de_dia_3\">"
 + "                <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_miercoles\" v-on:keypress.enter=\"() => introducir_tarea('miercoles')\" />"
 + "              </div>"
 + "              <div class=\"cuadro_de_dia_4\">"
 + "                <ul class=\"tareas_de_dia\">"
 + "                  <li v-for=\"tarea, tarea_index in tareas_de_dia_miercoles\" v-bind:key=\"'tarea-de-miercoles-' + tarea_index\">"
 + "                    <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                    <span>{{ tarea.name }}</span>"
 + "                  </li>"
 + "                </ul>"
 + "              </div>"
 + "            </div>"
 + "          </td>"
 + "          <td class=\"width_50\">"
 + "            <table class=\"width_100\">"
 + "              <tr>"
 + "                <td class=\"width_50\">"
 + "                  <div class=\"cuadro_de_dia_1 fin_de_semana\" :class=\"{activo: dia_de_semana_activo === 'Sábado'}\">"
 + "                    <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Sábado')\">Sábado</div>"
 + "                    <div class=\"cuadro_de_dia_3\">"
 + "                      <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_sabado\" v-on:keypress.enter=\"() => introducir_tarea('sabado')\" />"
 + "                    </div>"
 + "                    <div class=\"cuadro_de_dia_4\">"
 + "                      <ul class=\"tareas_de_dia\">"
 + "                        <li v-for=\"tarea, tarea_index in tareas_de_dia_sabado\" v-bind:key=\"'tarea-de-sabado-' + tarea_index\">"
 + "                          <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                          <span>{{ tarea.name }}</span>"
 + "                        </li>"
 + "                      </ul>"
 + "                    </div>"
 + "                  </div>"
 + "                </td>"
 + "                <td class=\"width_50\">"
 + "                  <div class=\"cuadro_de_dia_1 fin_de_semana\" :class=\"{activo: dia_de_semana_activo === 'Domingo'}\">"
 + "                    <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Domingo')\">Domingo</div><div class=\"cuadro_de_dia_3\">"
 + "                      <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_domingo\" v-on:keypress.enter=\"() => introducir_tarea('domingo')\" />"
 + "                    </div>"
 + "                    <div class=\"cuadro_de_dia_4\">"
 + "                      <ul class=\"tareas_de_dia\">"
 + "                        <li v-for=\"tarea, tarea_index in tareas_de_dia_domingo\" v-bind:key=\"'tarea-de-domingo-' + tarea_index\">"
 + "                          <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "                          <span>{{ tarea.name }}</span>"
 + "                        </li>"
 + "                      </ul>"
 + "                    </div>"
 + "                  </div>"
 + "                </td>"
 + "              </tr>"
 + "            </table>"
 + "          </td>"
 + "        </tr>"
 + "      </table>"
 + "    </div>"
 + "    <div class=\"Solo_en_relojes\">"
 + "      <div class=\"cuadro_de_dia_2\" :class=\"{activo: dia_de_semana_activo === 'Lunes'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Lunes')\">Lunes</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_lunes\" v-on:keypress.enter=\"() => introducir_tarea('lunes')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_lunes\" v-bind:key=\"'tarea-de-lunes-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"cuadro_de_dia_2\" :class=\"{activo: dia_de_semana_activo === 'Martes'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Martes')\">Martes</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_martes\" v-on:keypress.enter=\"() => introducir_tarea('martes')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_martes\" v-bind:key=\"'tarea-de-martes-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"cuadro_de_dia_2\" :class=\"{activo: dia_de_semana_activo === 'Miércoles'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Miércoles')\">Miércoles</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_miercoles\" v-on:keypress.enter=\"() => introducir_tarea('miercoles')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_miercoles\" v-bind:key=\"'tarea-de-miercoles-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"cuadro_de_dia_2\" :class=\"{activo: dia_de_semana_activo === 'Jueves'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Jueves')\">Jueves</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_jueves\" v-on:keypress.enter=\"() => introducir_tarea('jueves')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_jueves\" v-bind:key=\"'tarea-de-jueves-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"cuadro_de_dia_2\" :class=\"{activo: dia_de_semana_activo === 'Viernes'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Viernes')\">Viernes</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_viernes\" v-on:keypress.enter=\"() => introducir_tarea('viernes')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_viernes\" v-bind:key=\"'tarea-de-viernes-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"cuadro_de_dia_2 fin_de_semana\" :class=\"{activo: dia_de_semana_activo === 'Sábado'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Sábado')\">Sábado</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_sabado\" v-on:keypress.enter=\"() => introducir_tarea('sabado')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_sabado\" v-bind:key=\"'tarea-de-sabado-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"cuadro_de_dia_2 fin_de_semana\" :class=\"{activo: dia_de_semana_activo === 'Domingo'}\">"
 + "        <div class=\"titulo_de_dia_de_semana\" v-on:click=\"() => cambiar_dia_de_semana('Domingo')\">Domingo</div>"
 + "        <div class=\"cuadro_de_dia_3\">"
 + "          <input class=\"campo_de_texto_de_dia width_100\" type=\"text\" placeholder=\"\" v-model=\"tarea_de_dia_domingo\" v-on:keypress.enter=\"() => introducir_tarea('domingo')\" />"
 + "        </div>"
 + "        <div class=\"cuadro_de_dia_4\">"
 + "          <ul class=\"tareas_de_dia\">"
 + "            <li v-for=\"tarea, tarea_index in tareas_de_dia_domingo\" v-bind:key=\"'tarea-de-domingo-' + tarea_index\">"
 + "              <button style=\"min-width: auto;\" v-on:click=\"() => eliminar_tarea(tarea.id)\">✖</button>"
 + "              <span>{{ tarea.name }}</span>"
 + "            </li>"
 + "          </ul>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "    <table>"
 + "      <tr>"
 + "        <td>"
 + "          <button v-on:click=\"mover_a_semana_anterior\"> « </button>"
 + "        </td>"
 + "        <td class=\"width_100\">"
 + "        </td>"
 + "        <td>"
 + "          <button v-on:click=\"mover_a_semana_siguiente\"> » </button>"
 + "        </td>"
 + "      </tr>"
 + "    </table>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeInicio.data");
return { fecha_seleccionada:undefined,
dia_de_semana_activo:"",
tarea_de_dia_lunes:"",
tarea_de_dia_martes:"",
tarea_de_dia_miercoles:"",
tarea_de_dia_jueves:"",
tarea_de_dia_viernes:"",
tarea_de_dia_sabado:"",
tarea_de_dia_domingo:"",
tareas_de_dia_lunes:[  ],
tareas_de_dia_martes:[  ],
tareas_de_dia_miercoles:[  ],
tareas_de_dia_jueves:[  ],
tareas_de_dia_viernes:[  ],
tareas_de_dia_sabado:[  ],
tareas_de_dia_domingo:[  ],
otro:0
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ gestionar_error( error ) {try {
console.log('[DEBUG]', "PaginaDeInicio.gestionar_error");
console.log(error);
throw error;
} catch(error) {
console.log(error);
throw error;
}

},
async mover_a_semana_anterior() {try {
console.log('[DEBUG]', "PaginaDeInicio.mover_a_semana_anterior");
this.fecha_seleccionada.setDate( this.fecha_seleccionada.getDate(  ) - 7 );
(await this.cargar_tareas_de_semana(  ));
} catch(error) {
console.log(error);
throw error;
}

},
async mover_a_semana_siguiente() {try {
console.log('[DEBUG]', "PaginaDeInicio.mover_a_semana_siguiente");
this.fecha_seleccionada.setDate( this.fecha_seleccionada.getDate(  ) + 7 );
(await this.cargar_tareas_de_semana(  ));
} catch(error) {
console.log(error);
throw error;
}

},
obtener_nombre_de_dia( dia ) {try {
console.log('[DEBUG]', "PaginaDeInicio.obtener_nombre_de_dia");
if(dia === 0) {
return "Domingo";
}
if(dia === 1) {
return "Lunes";
}
if(dia === 2) {
return "Martes";
}
if(dia === 3) {
return "Miércoles";
}
if(dia === 4) {
return "Jueves";
}
if(dia === 5) {
return "Viernes";
}
if(dia === 6) {
return "Sábado";
}
} catch(error) {
console.log(error);
throw error;
}

},
obtener_nombre_de_mes( mes ) {try {
console.log('[DEBUG]', "PaginaDeInicio.obtener_nombre_de_mes");
if(mes === 0) {
return "Enero";
}
if(mes === 1) {
return "Febrero";
}
if(mes === 2) {
return "Marzo";
}
if(mes === 3) {
return "Abril";
}
if(mes === 4) {
return "Mayo";
}
if(mes === 5) {
return "Junio";
}
if(mes === 6) {
return "Julio";
}
if(mes === 7) {
return "Agosto";
}
if(mes === 8) {
return "Septiembre";
}
if(mes === 9) {
return "Octubre";
}
if(mes === 10) {
return "Noviembre";
}
if(mes === 11) {
return "Diciembre";
}
} catch(error) {
console.log(error);
throw error;
}

},
async eliminar_tarea( id_tarea ) {try {
console.log('[DEBUG]', "PaginaDeInicio.eliminar_tarea");
(await this.$db.delete( "Task",
id_tarea ));
(await this.cargar_tareas_de_semana(  ));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async introducir_tarea( dia ) {try {
console.log('[DEBUG]', "PaginaDeInicio.introducir_tarea");
const campo = "tarea_de_dia_" + dia;
const tarea = this[ campo ];
(await this.$db.insert( "Task",
{ name:tarea,
moment:this.fecha_seleccionada
} ));
this[ campo ] = "";
this.cargar_tareas_de_semana(  );
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error );}
},
cambiar_dia_de_semana( dia_de_semana ) {try {
console.log('[DEBUG]', "PaginaDeInicio.cambiar_dia_de_semana");
if(this.dia_de_semana_activo === dia_de_semana) {
this.dia_de_semana_activo = "";
this.$forceUpdate( true );
return;
}
this.dia_de_semana_activo = dia_de_semana;
let dias_de_diferencia = undefined;
let dia_origen = this.fecha_seleccionada.getDay(  );
if(dia_origen === 0) {
dia_origen = 7;
}
const dia_destino = ( () => {
try {
if(dia_de_semana === "Lunes") {
return 1;
}
if(dia_de_semana === "Martes") {
return 2;
}
if(dia_de_semana === "Miércoles") {
return 3;
}
if(dia_de_semana === "Jueves") {
return 4;
}
if(dia_de_semana === "Viernes") {
return 5;
}
if(dia_de_semana === "Sábado") {
return 6;
}
if(dia_de_semana === "Domingo") {
return 7;
}
} catch(error) {
console.log(error);
throw error;
}
})();
let dias_diferenciales = 0;
if(dia_destino > dia_origen) {
dias_diferenciales = dia_destino - dia_origen;
}
if(dia_destino < dia_origen) {
dias_diferenciales = dia_destino - dia_origen;
}
this.fecha_seleccionada.setDate( this.fecha_seleccionada.getDate(  ) + dias_diferenciales );
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error );}
},
limpiar_tareas_de_semana() {try {
this.tareas_de_dia_lunes = [  ];
this.tareas_de_dia_martes = [  ];
this.tareas_de_dia_miercoles = [  ];
this.tareas_de_dia_jueves = [  ];
this.tareas_de_dia_viernes = [  ];
this.tareas_de_dia_sabado = [  ];
this.tareas_de_dia_domingo = [  ];
} catch(error) {
console.log(error);
throw error;
}

},
async cargar_tareas_de_semana() {try {
console.log('[DEBUG]', "PaginaDeInicio.cargar_tareas_de_semana");
const inicio_de_semana = new Date( this.fecha_seleccionada );
const final_de_semana = new Date( this.fecha_seleccionada );
let dia_de_semana_seleccionado = this.fecha_seleccionada.getDay(  );
if(dia_de_semana_seleccionado === 0) {
dia_de_semana_seleccionado = 7;
}
const dias_a_sumar_para_inicio = 0 - dia_de_semana_seleccionado + 1;
const dias_a_sumar_para_final = 7 - dia_de_semana_seleccionado + 1;
inicio_de_semana.setDate( inicio_de_semana.getDate(  ) + dias_a_sumar_para_inicio );
inicio_de_semana.setHours( 0 );
inicio_de_semana.setMinutes( 0 );
inicio_de_semana.setSeconds( 0 );
inicio_de_semana.setMilliseconds( 0 );
final_de_semana.setDate( final_de_semana.getDate(  ) + dias_a_sumar_para_final + 0 );
final_de_semana.setHours( 0 );
final_de_semana.setMinutes( 0 );
final_de_semana.setSeconds( 0 );
final_de_semana.setMilliseconds( 0 );
const tareas_de_semana = (await this.$db.select( "Task" )).filter( ( item ) => {try {
console.log(inicio_de_semana);
console.log(item.moment);
console.log(final_de_semana);
console.log(".................");
return ( item.moment > inicio_de_semana ) && ( item.moment < final_de_semana );
} catch(error) {
console.log(error);
throw error;
}

} );
this.limpiar_tareas_de_semana(  );
for(let index = 0; index < tareas_de_semana.length; index++) {const tarea_de_semana = tareas_de_semana[ index ];
const dia_de_tarea = tarea_de_semana.moment.getDay(  );
if(dia_de_tarea === 0) {
this.tareas_de_dia_domingo.push(tarea_de_semana)
}
if(dia_de_tarea === 1) {
this.tareas_de_dia_lunes.push(tarea_de_semana)
}
if(dia_de_tarea === 2) {
this.tareas_de_dia_martes.push(tarea_de_semana)
}
if(dia_de_tarea === 3) {
this.tareas_de_dia_miercoles.push(tarea_de_semana)
}
if(dia_de_tarea === 4) {
this.tareas_de_dia_jueves.push(tarea_de_semana)
}
if(dia_de_tarea === 5) {
this.tareas_de_dia_viernes.push(tarea_de_semana)
}
if(dia_de_tarea === 6) {
this.tareas_de_dia_sabado.push(tarea_de_semana)
}}
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error );}
}
},
watch:{ fecha_seleccionada( nuevo_valor ) {try {
console.log('[DEBUG]', "PaginaDeInicio.watch.fecha_seleccionada");
const dia_de_semana = nuevo_valor.getDay(  );
if(dia_de_semana === 0) {
this.dia_de_semana_activo = "Domingo";
}
if(dia_de_semana === 1) {
this.dia_de_semana_activo = "Lunes";
}
if(dia_de_semana === 2) {
this.dia_de_semana_activo = "Martes";
}
if(dia_de_semana === 3) {
this.dia_de_semana_activo = "Miércoles";
}
if(dia_de_semana === 4) {
this.dia_de_semana_activo = "Jueves";
}
if(dia_de_semana === 5) {
this.dia_de_semana_activo = "Viernes";
}
if(dia_de_semana === 6) {
this.dia_de_semana_activo = "Sábado";
}
this.cargar_tareas_de_semana(  );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
console.log('[DEBUG]', "PaginaDeInicio.mounted");
this.fecha_seleccionada = new Date(  );
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
const main = async function() {try {
/////////////////////////
// Ignorado por Castelog:
// (await RanasDB.dropDatabaseIfExists( "Classic_agenda_db" ));

Vue.prototype.$db = (await RanasDB.connect( "Classic_agenda_db",
[ [ { Task:"++id,name,moment"
},
function() {
} ] ],
{ debug:console.log
} ));
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "      <router-view :root=\"this\"></router-view>"
 + "    </div>",
  function(component) {return { data() {try {
console.log('[DEBUG]', "App.data");
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
async beforeMount() {try {
console.log('[DEBUG]', "App.beforeMount");
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n      body {}\n      .Component {}\n      .App {}\n  ",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
} catch(error) {
console.log(error);}
};
main(  );