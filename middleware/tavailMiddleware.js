const moment = require('moment')
const tempsDuTravailMiddleware  = (req, res, next) => {
    const now = moment();
    const semaine = now.day();
    const heure = now.hour();
    if (semaine >= 1 && semaine <= 5 && heure >= 9 && heure < 17) {
      next(); // Passez au middleware ou gestionnaire de route suivant
    } else {
      res.send("Désolé, l'application web disponible uniquemant pendant les heures de travail (lundi à vendredi, 9h à 17h).");
    }
  };

  module.exports = tempsDuTravailMiddleware
  
    