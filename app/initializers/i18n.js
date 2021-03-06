import Ember from 'ember';

var fr = {
    "submitComment": "Poster",
    "cancel": "Annuler",
    "validate": "Valider",
    "comments": "Commentaires",
    "addComment": "Ajouter un commentaire",
    "anyComment": "un commentaire ?",
    "authorHint": "votre nom ici...",
    "commentHint": "votre commentaire ici ...",
    "dateFormat": "D MMMM YYYY",
    "dateTimeFormat": "le DD/MM/YYYY à HH\\hmm",
    "picturesToClickAndComment": "photos à cliquer et commenter.",
    "enterDescription": "une description ?",
    "addDescription": "double clique pour ajouter une description",
    "uploadTitle": "Ajouter des photos",
    "uploadVideoTitle": "Ajouter une vidéo",
    "uploadPictures": "Charger les photos",
    "uploadVideo": "Charger les vidéos",
    "deletePicture": "Supprimer cette photo",
    "deleteComment": "Effacer ce commentaire",
    "confirmDeletePicture": "Etes-vous sûr de vouloir supprimer cette photo ?",
    "newUser": "Bienvenue sur votre blog photo !",
    "login.title": "S'identifier",
    "email": "Email",
    "password": "Mot de passe",
    "repeatPassword": "Confirmation",
    "infoNewUser": "Vous devez créer un compte pour pouvoir charger des images sur le site, modérer les commentaires et modifier vos photos.",
    "passwordsNotIdenticals": "la confirmation doit être identique au mot de passe",
    "loginFailed": "Email et/ou mot de passe incorrect(s)",
    "emailError": "l'email n'est pas valide",
    "video-webm": "WebM",
    "video-ogv": "Ogg Vorbis",
    "video-mp4": "MP4",
    "filter": "Filtrer..."
};

export default {
    name: 'i18n',

    initialize: function () {
        Ember.I18n.translations = fr;
    }
};