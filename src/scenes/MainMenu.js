import { Scene } from 'phaser';
import { changeLanguage, getPhrase } from '../translations'; // Asegúrate de importar las funciones

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');
        this.add.image(512, 300, 'logo');

        // Texto del menú que se traducirá
        this.menuText = this.add.text(512, 460, getPhrase('Main Menu'), {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Botones de idioma
        const englishButton = this.add.text(400, 540, getPhrase('Spanish'), {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 4
        }).setInteractive().setOrigin(0.5);

        const spanishButton = this.add.text(624, 540, getPhrase('English'), {
            fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 4
        }).setInteractive().setOrigin(0.5);

        // Eventos para los botones de idioma
        englishButton.on('pointerdown', async () => {
            console.log('Cambiando a inglés'); // Mensaje de depuración
            await changeLanguage('en-US');
            this.updateMenuText(); // Actualiza el texto del menú
        });

        spanishButton.on('pointerdown', async () => {
            console.log('Cambiando a español'); // Mensaje de depuración
            await changeLanguage('es-AR');
            this.updateMenuText(); // Actualiza el texto del menú
        });

        // Feedback visual para los botones de idioma
        englishButton.on('pointerover', () => {
            englishButton.setStyle({ fill: '#ff0' }); // Cambia el color al pasar el mouse
        });

        englishButton.on('pointerout', () => {
            englishButton.setStyle({ fill: '#ffffff' }); // Regresa al color original
        });

        spanishButton.on('pointerover', () => {
            spanishButton.setStyle({ fill: '#ff0' });
        });

        spanishButton.on('pointerout', () => {
            spanishButton.setStyle({ fill: '#ffffff' });
        });

        // Iniciar el juego al presionar la tecla ENTER
        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.start('Game');
        });
    }

    updateMenuText() {
        // Actualiza el texto del menú según el idioma actual
        const currentLanguage = localStorage.getItem('currentLanguage'); // Obtiene el idioma actual
        if (currentLanguage === 'es-AR') {
            this.menuText.setText(getPhrase('Menu Principal')); // Español
        } else {
            this.menuText.setText(getPhrase('Main Menu')); // Inglés
        }
    }
}
