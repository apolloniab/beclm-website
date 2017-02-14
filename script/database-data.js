// DATA
var cases = [
    {
        "name": "NOUVELLE AFFAIRE A L’AGENCE AVEC UN PROSPECT NON RISQUÉ",
        "actors": [
            {
                "name": "Le conseiller avec son prospect",
                "cssClass" : "advisor-with-prospect",
                "events": [
                    {
                        "name": "Rendez vous à l'agence",
                        "operations": [
                            {
                                "name": "Entrée en relation avec présentation et signature du DER (document d'entrée en relation)",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Vérification automatique de l'inscription ORIAS du conseiller",
                                "solutions": [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Prise de connaissance du nouveau client : création automatique d'un compte CLM customer",
                                "solutions": [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Création automatique de la fiche de risque \"gel des avoirs\"",
                                "solutions": [
                                    "beclm-sanction-lists"
                                ]
                            },
                            {
                                "name": "Création automatique de la fiche de risque \"PPE\"",
                                "solutions": [
                                    "beclm-ppe"
                                ]
                            },
                            {
                                "name": "Conseil - présentation des fiches produits",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Activation automatique de la classification des risques LAB",
                                "solutions": [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Génération et signature client de la fiche conseil",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Génération et signature client des formulaires contractuels",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Gestionnaire Back office",
                "cssClass" : "bo-manager",
                "events": [
                    {
                        "name": "Au siège",
                        "operations": [
                            {
                                "name": "Déclenchement du régime de vigilance allégé par le gestionnaire de niveau 1",
                                "solutions": [
                                    "beclm-compliance"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];