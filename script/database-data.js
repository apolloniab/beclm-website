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
                        "name": "RENDEZ-VOUS A L'AGENCE",
                        "operations": [
                            {
                                "name": "Entrée en relation avec présentation et signature du DER (document d'entrée en relation)",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Vérification automatique de l'inscription ORIAS du conseiller",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Prise de connaissance du nouveau client : création automatique d'un compte CLM customer",
                                "solutions":  [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Création automatique de la fiche de risque \"gel des avoirs\"",
                                "solutions":  [
                                    "beclm-sanction-lists"
                                ]
                            },
                            {
                                "name": "Création automatique de la fiche de risque \"PPE\"",
                                "solutions":   [
                                    "beclm-ppe"
                                ]
                            },
                            {
                                "name": "Conseil - présentation des fiches produits",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Activation automatique de la classification des risques LAB",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Génération et signature client de la fiche conseil",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Génération et signature client des formulaires contractuels",
                                "solutions":   [
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
    },
    {
        "name": "NOUVELLE AFFAIRE A L’AGENCE AVEC UN PROSPECT RISQUÉ",
        "actors": [
            {
                "name": "Le conseiller avec son prospect",
                "cssClass" : "advisor-with-prospect",
                "events": [
                    {
                        "name": "RENDEZ-VOUS A L'AGENCE",
                        "operations": [
                            {
                                "name": "Entrée en relation avec présentation et signature du DER (document d'entrée en relation)",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Vérification automatique de l'inscription ORIAS du conseiller",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Prise de connaissance du nouveau client : création automatique d'un compte CLM customer",
                                "solutions":  [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Création automatique de la fiche de risque \"gel des avoirs\"",
                                "solutions":  [
                                    "beclm-sanction-lists"
                                ]
                            },
                            {
                                "name": "Création automatique de la fiche de risque \"PPE\"",
                                "solutions":   [
                                    "beclm-ppe"
                                ]
                            },
                            {
                                "name": "Conseil - présentation des fiches produits",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Activation automatique de la classification des risques LAB",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Saisies de données complémentaires par le prospect",
                                "solutions":  [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Communication de pièces complémentaires par le prospect",
                                "solutions":   [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Génération et signature client de la fiche conseil",
                                "solutions":   [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Génération et signature client des formulaires contractuels",
                                "solutions":   [
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
                            },
                            {
                                "name": "Analyse des risques par gestionnaire de niveau 2",
                                "solutions": [
                                    "beclm-compliance"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Conformité",
                "cssClass" : "conformity",
                "events": [
                    {
                        "name": "Au siège",
                        "operations": [
                            {
                                "name": "Validation du service conformité ",
                                "solutions": [
                                    "beclm-compliance"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "NOUVELLE AFFAIRE A L’AGENCE AVEC UN PROSPECT NON RISQUÉ ET UN CONSEILLER NOMADE",
        "actors": [
            {
                "name": "Le conseiller avec son prospect",
                "cssClass" : "advisor-with-prospect",
                "events": [
                    {
                        "name": "PREMIER RENDEZ-VOUS CHEZ LE CLIENT",
                        "operations": [
                            {
                                "name": " Entrée en relation avec présentation et signature du DER (document d'entrée en relation)",
                                "solutions": [
                                    "beclm-mobile"
                                ]
                            },
                            {
                                "name": "Vérification automatique de l'inscription ORIAS du conseiller",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Prise de connaissance du nouveau client : création automatique d'un compte CLM customer",
                                "solutions":  [
                                    "beclm-customer"
                                ]
                            },


                        ]
                    },
                    {
                        "name": "SECOND RENDEZ-VOUS CHEZ LE CLIENT",
                        "operations": [
                            {
                                "name": " Conseil - choix d'une solution conseillée",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Activation automatique de la classification des risques LAB",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Génération et signature client de la fiche conseil",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Génération et signature client des formulaires contractuels",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                "name": "Le prospect",
                "cssClass" : "prospect",
                "events": [
                    {
                        "name": "CHEZ LUI",
                        "operations": [
                            {
                                "name": " Analyse des fiches conseils communquées par son conseiller",
                                "solutions": [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Saisie de données complémentaires",
                                "solutions":  [
                                    "beclm-customer"
                                ]
                            },
                            {
                                "name": "Téléchargement des pièces demandées",
                                "solutions":  [
                                    "beclm-customer"
                                ]
                            },


                        ]
                    },
                ]
            },
            {
                "name": "Le prospect",
                "cssClass" : "prospect",
                "events": [
                    {
                        "name": "A SON AGENCE",
                        "operations": [
                            {
                                "name": "Analyse de la situation du client",
                                "solutions": [
                                    "?"
                                ]
                            },
                            {
                                "name": "Conseil - communication aux prospects de plusieurs fiches conseil",
                                "solutions":  [
                                    "beclm-cLoud"
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                "name": "Le conseiller",
                "cssClass" : "advisor",
                "events": [
                    {
                        "name": "A SON AGENCE",
                        "operations": [
                            {
                                "name": "Analyse de la situation du client",
                                "solutions": [
                                    "?"
                                ]
                            },
                            {
                                "name": "Conseil - communication aux prospects de plusieurs fiches conseil",
                                "solutions":  [
                                    "beclm-cLoud"
                                ]
                            },
                        ]
                    },
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
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "PRISE EN CHARGE D'UNE DEMANDE DE PRESTATION (SINISTRE)",
        "actors": [
            {
                "name": "Le gestionnaire",
                "cssClass" : "manager",
                "events": [
                    {
                        "name": "AU SIEGE",
                        "operations": [
                            {
                                "name": "Traitement de prise en charge de la demande du client",
                                "solutions": [
                                    "?"
                                ]
                            },
                            {
                                "name": "Activation automatique de la classification des risques LAB sur base de la nouvelle oépration",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Consultation des fiches de risques",
                                "solutions":  [
                                    "beclm-sanction-lists", "beclm-ppe", "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Qualification du niveau de risque de l'opération",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        "name": "PRISE EN CHARGE D'UNE DEMANDE DE PRESTATION (SINISTRE)",
        "actors": [
            {
                "name": "Le conseiller avec son prospect",
                "cssClass" : "advisor-with-prospect",
                "events": [
                    {
                        "name": "RENDEZ-VOUS A L'AGENCE",
                        "operations": [
                            {
                                "name": "Entrée en relation avec présentation et signature du DER (document d'entrée en relation)",
                                "solutions": [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Vérification automatique de l'inscription ORIAS du conseiller",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Activation automatique de la classification des risques LAB sur base de la nouvelle opération",
                                "solutions":  [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Génération et signature client de la fiche conseil",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                            {
                                "name": "Génération et signature client des formulaires contractuels",
                                "solutions":  [
                                    "beclm-cloud"
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                "name": "Gestionnaire Back office",
                "cssClass" : "bo-manager",
                "events": [
                    {
                        "name": "AU SIEGE",
                        "operations": [
                            {
                                "name": "Déclenchement du régime de vigilance ad-hoc par le gestionnaire",
                                "solutions": [
                                    "beclm-compliance"
                                ]
                            },
                            {
                                "name": "Suite en fonction des niveaux de risques détectés",
                                "solutions":  [
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