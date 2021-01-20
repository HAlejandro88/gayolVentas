import { LitElement, css, html } from 'lit-element';



class HexagonComponent extends LitElement {

    static get properties() {
        return {
            mapa: String
        }
    }

    static get styles() {
        return css`
            :host {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
          
          .container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .container .hexagon {
            position: relative;
            width: 350px;
            height: 400px;
            margin: 50px 20px 70px;
          }

          .container .hexagon::before {
            content: '';
            position: absolute;
            bottom: -70px;
            width: 100%;
            height: 60px;
            background: radial-gradient(rgba(0,0,0,0.15),transparent,transparent );
            border-radius: 50%;
            transition: 0.5s;
          }

          .container .hexagon:hover::before {
            opacity: 0.8;
            transform: scale(0.8);
          }

          .container .hexagon .shape {
            position: absolute;
            top: 0;
            left: 0;
            width: 80%;
            height: 80%;
            background: #000;
            clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
            transition: 0.5s;
          }

          .container .hexagon:hover .shape {
            transform: scaleY(-30px);
          }

          .container .hexagon .shape img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .container .hexagon .shape .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            text-align: center;
            background: linear-gradient(45deg, #03a9f4,rgba(3,169,244,0.5));
            color: #fff;
            opacity: 0;
            transition: 0.5s;
          }

          .container .hexagon:hover .shape .content {
            opacity: 1;
          }
        `;
    }

    constructor() {
        super();
        this.mapa = '';
    }

    render() {
        return html`
            <div class="container">
                <div class="hexagon">
                    <div class="shape">
                        <img src="https://s1.eestatic.com/2019/08/09/omicrono/Omicrono_420219253_131917138_1024x576.jpg" />
                        <div class="content">
                            <div>
                                <h2>Lomas </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus architecto at atque deserunt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hexagon">
                    <div class="shape">
                        <img src="https://lh3.googleusercontent.com/proxy/kl0AEijrHU-1tGXY87_p4-OqVUfFoghUDGvGwYdP3-6L1fAu-nllyHol4_N4njO3Gv6rciraILPzAxZLDc92aOrtYjOB24WnxE9gDjOu8S5aif73ARJ8k4QNC9Ws8XeR4iD_TgVRCLe2IFTB" />
                        <div class="content">
                            <div>
                                <h2>cuatitlan</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.
                                    Accusamus architecto at atque deserunt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe .src="${this.mapa}" 
                        width="600"
                        height="450" frameborder="0"
                        style="border:0;" allowfullscreen=""
                        aria-hidden="false" tabindex="0">
                </iframe>
                
            </div>
        `;
    }
}



window.customElements.define('hexagon-component',HexagonComponent)
