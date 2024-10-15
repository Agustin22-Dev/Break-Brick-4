import { Scene } from "phaser";
import { getPhrase } from '../translations'; // Asegúrate de importar la función getPhrase

// La escena HUD que muestra los puntos y el tiempo restante.
export class Hud extends Scene {
  remaining_time = 0;

  remaining_time_text;
  points_text;

  constructor() {
    super("Hud");
  }

  init(data) {
    // fadeIn([duration], [red], [green], [blue], [callback], [context])
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.remaining_time = data.remaining_time;
  }

  create() {
    // Obtiene el idioma actual
    const currentLanguage = localStorage.getItem('currentLanguage');

    // Establece el texto de puntos con traducción
    this.points_text = this.add.text(10, 10, `${getPhrase(currentLanguage === 'es-AR' ? 'Puntos' : 'Points')}: 0000`, {
      fontSize: "24px",
      color: "#ffffff",
    });

    // Establece el texto de tiempo restante con traducción
    this.remaining_time_text = this.add.text(
      this.scale.width - 200,
      10,
      `${getPhrase(currentLanguage === 'es-AR' ? 'Restante' : 'Remaining')}: ${this.remaining_time.toString().padStart(2, "0")}s`,
      {
        fontSize: "24px",
        color: "#ffffff",
      }
    );
  }

  update_points(points) {
    this.points_text.setText(`${getPhrase(localStorage.getItem('currentLanguage') === 'es-AR' ? 'Puntos' : 'Points')}: ${points.toString().padStart(4, "0")}`);
  }

  update_timeout(timeout) {
    this.remaining_time_text.setText(`${getPhrase(localStorage.getItem('currentLanguage') === 'es-AR' ? 'Restante' : 'Remaining')}: ${timeout.toString().padStart(2, "0")}s`);
  }
}

