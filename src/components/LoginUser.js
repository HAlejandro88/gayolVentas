import { html } from 'lit-element';
import { GayolController } from '../helpers/GayolController';
import '@vaadin/vaadin-login';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';

class LoginUser extends GayolController {
    static get properties() {
        return {
            username: String,
            password: String
        }
    }


    constructor() {
        super();
    }

    async update(changeProperties) {
        super.update(changeProperties);
        if (changeProperties.has('username') && changeProperties.has('password')) {
            await this.requestUpdate(); 
        }
    }

    render() {
        return html`
            <vaadin-login-overlay opened
                    title="GayolApp" description="" 
                    @login="${this.logIn}">
            </vaadin-login-overlay>
            <vaadin-dialog id="dialog"></vaadin-dialog>
        `;
    }

    async logIn({ detail }) {
        this.username = detail.username;
        this.password = detail.password;
        let body = {
            email: this.username,
            password: this.password
        };
        await this.validateUser(body);
    }

    async validateUser(body) {
        try {
            const LoginUser = await this.__request('auth/login', 'POST', {}, body);
            if (!LoginUser.success) {
                const dialog = this.shadowRoot.querySelector('#dialog');
                dialog.renderer = (root, _dialog) => {
                    if (!root.firstElementChild)  {
                        const message = document.createElement('p');
                        message.textContent = `${LoginUser.error}`;
                        const close = document.createElement('vaadin-button');
                        close.textContent = 'Close';
                        close.addEventListener('click', (e) => {
                            e.preventDefault();
                            dialog.opened = false;
                        });

                        root.appendChild(message);
                        root.appendChild(close);
                    }
                }
                dialog.opened = true;
                const loginForm = this.shadowRoot.querySelector('vaadin-login-overlay');
                loginForm.error = true;
                loginForm.disabled = false;
            } else {
                localStorage.setItem('token', LoginUser.token);
                this.dispatchEvent(new CustomEvent('login-success'));
                window.location = '/dashboard';
            }
            await this.requestUpdate();
        } catch (error) {
            console.log(error);
        }
        
    }

    _forgotPassword() {}
}


window.customElements.define('login-user', LoginUser);
