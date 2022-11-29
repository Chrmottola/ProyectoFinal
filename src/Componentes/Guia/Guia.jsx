import React from "react";
import "./Guia.css";



const Guia = () => {
  document.title = `Mundo Café Guia`
  return (
    <main className="mainGuia">

      <div className="divTituloGuia">
        <p><em>Conociendo Los Secretos del Café....</em></p>
        <p><em>Guia de Preparacion, Cuidado y Conservación del Café </em></p>
      </div>
      <p class="subtitulosGuia"><em>Compra café de grano entero</em></p>
      <p>Una buena taza comienza con los granos, la regla es que, si quieres una buena taza, debes tener un
        buen
        grano. El grano entero tiene mejor sabor, calidad y es más fresco, pero vas a necesitar molerlo
        antes de
        poder usarlo.</p>

      <p class="subtitulosGuia"><em>Usa una Balanza</em></p>
      <p>No, no es para saber si subiste de peso, es para poder tener una medida más exacta de tu café, esto
        hace
        que logres el mejor sabor y la mejor concentración de café para que no se pase o quede demasiado
        ligero.
        180 gramos es perfecto para 6 tazas, dicen los expertos.</p>

      <p class="subtitulosGuia"><em>Muele solo lo que vas a usar</em></p>
      <p>Para conservar la frescura y sabor del café, es importante que solo muelas la cantidad que vas a usar
        en
        ese momento, así puedes guardar el resto y usarlo después.</p>

      <p class="subtitulosGuia"><em>Guarda tu café en contenedores de cerámica</em></p>
      <p>Si, el lugar en el que lo guardas también es importante, el café debe almacenarse en lugares que lo
        protejan del sol, un recipiente de cerámica de color oscuro es la mejor opción ya que lo mantiene
        fresco. Además, es importante que no lo guardes en el congelador, eso hace que absorba humedad.</p>

      <p class="subtitulosGuia"><em>Usa agua filtrada</em></p>
      <p>El tipo de agua también afecta, los baristas usan agua filtrada porque le da un mejor sabor, es
        importante que la caliente al menos 90 grados.</p>

      <p class="subtitulosGuia"><em>El método importa</em></p>
      <p>No todas las formas de preparar café son iguales, el aparato que usas para hacer tu café en casa
        afecta
        el sabor y la fuerza del café, así que debes elegir uno que se ajuste a tus preferencias. Por
        ejemplo,
        la prensa francesa da un sabor más intenso.</p>

      <p class="subtitulosGuia"><em>Limpia tu cafetera regularmente</em></p>
      <p>No es solo por higiene, los granos de café tienen aceites naturales y, si no los retiras de tu
        cafetera,
        estos afectan el sabor con cada taza que prepares, incluso puede llegar a darle un sabor quemado.
        Por
        eso es importante limpiarla todos los días.</p>

      <p class="subtitulosGuia"><em>Conoce los granos</em></p>

      <p>Es importante conocer el origen de los granos porque esto afecta su acidez,
        fuerza y sabor, así que es importante que elijas un buen grano que se ajuste a lo que te gusta y a lo que
        quieres conseguir.
      </p>

      <p class="subtitulosGuia"><em>Usa especias</em></p>
      <p>Puedes darle distintos sabores a tu café sin usar jarabes y otros productos, simplemente usas
        especias
        como la canela o la nuez moscada. También puedes usar un poco de chocolate y otros ingredientes para
        hacerlo más dulce.</p>

      <p class="subtitulosGuia"><em>Pon atención en la leche</em></p>
      <p>No necesitas ir a una cafetería para tener un capuchino, puedes comprar una máquina para preparar tu
        propia leche y conseguir esa espuma desde casa, incluso puedes hacerlo en el microondas si no
        quieres
        invertir en más equipo.</p>

      <div className="divIframeGuia">
      <iframe src="https://www.youtube.com/embed/BL8z5kHLezE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/KUEIayDKzOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/cCMEm3pvokQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </main>
  );
}


export default Guia;
