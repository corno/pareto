import * as pd from 'exupery-core-data'

import {
    types,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Fiscaal": type(t.group({
            "Balans Hoofdcategorieen": t.dictionary(t.group({
                "Zijde": t.state_group({
                    "Activa": t.nothing(),
                    "Passiva": t.nothing()
                }),
                "Subcategorieen": t.dictionary(t.nothing())
            })),
            "Resultaat Hoofdcategorieen": t.dictionary(t.group({
                "Zijde": t.state_group({
                    "Kosten": t.nothing(),
                    "Opbrengsten": t.nothing()
                }),
                "Subcategorieen": t.dictionary(t.nothing())
            })),
        })),

        "Grootboek Categorieen": type(t.group({
            "Correctietypes vennootschapsbelasting": t.dictionary(t.group({
                "Te corrigeren promillage": t.number_global("Promillage"),
            })),
            "Balans": t.dictionary(t.group({
                "Zijde": t.state_group({
                    "Activa": t.nothing(),
                    "Passiva": t.nothing()
                }),
                "Subcategorieen": t.dictionary(t.group({
                    "Hoofdcategorie fiscus": t.reference("Fiscaal", [tr.g("Balans Hoofdcategorieen")]),
                    "Subcategorie fiscus": t.reference("Fiscaal", [tr.g("Balans Hoofdcategorieen"), tr.d(), tr.g("Subcategorieen")]),
                }))
            })),
            "Resultaat": t.dictionary(t.group({
                "Zijde": t.state_group({
                    "Kosten": t.nothing(),
                    "Opbrengsten": t.nothing()
                }),
                "Subcategorieen": t.dictionary(t.group({
                    "Hoofdcategorie fiscus": t.reference("Fiscaal", [tr.g("Resultaat Hoofdcategorieen")]),
                    "Subcategorie fiscus": t.reference("Fiscaal", [tr.g("Resultaat Hoofdcategorieen"), tr.d(), tr.g("Subcategorieen")]),
                }))
            })),
        })),

        "Beheer": type(t.group({
            "BTW-categorieen": t.dictionary(t.group({
                "BTW-heffing": t.state_group({
                    "Ja": t.group({
                        "BTW-promillage": t.number_global("Promillage"),
                    })
                })
            })),
            "Grootboekrekeningen": t.group({
                "Balans": t.dictionary(t.group({
                    "Hoofdcategorie": t.reference("Grootboek Categorieen", [tr.g("Balans")]),
                    "Subcategorie": t.reference("Grootboek Categorieen", [tr.g("Balans"), tr.d(), tr.g("Subcategorieen")]),
                    "Zijde": t.state_group({
                        "Activa": t.nothing(),
                        "Passiva": t.nothing()
                    }),
                })),
                "Resultaat": t.dictionary(t.group({
                    "Hoofdcategorie": t.reference("Grootboek Categorieen", [tr.g("Resultaat")]),
                    "Subcategorie": t.reference("Grootboek Categorieen", [tr.g("Resultaat"), tr.d(), tr.g("Subcategorieen")]),
                    "Zijde": t.state_group({
                        "Kosten": t.group({
                            "Correctie op vennootschapsbelasting": t.state_group({
                                "Ja": t.group({
                                    "Correctietype": t.reference("Grootboek Categorieen", [tr.g("Correctietypes vennootschapsbelasting")]),
                                }),
                                "Nee": t.nothing(),
                            })
                        }),
                        "Opbrengsten": t.nothing()
                    }),
                })),
            }),
            "Rekeningen": t.group({
                "Bank": t.dictionary(t.nothing()),
                "Informeel": t.dictionary(t.nothing()),
            }),
            "Gebruikers": t.dictionary(t.group({
                "Volledige naam": t.text_global("Benaming"),
                "Wachtwoord": t.text_global("Wachtwoord"),
            })),
            "Klanten": t.dictionary(t.group({
                "Licentieovereenkomsten": t.dictionary(t.group({
                    "Periodes": t.dictionary(t.group({
                        "Bedrag": t.number_global("Bedrag"),
                    })),
                })),
                "Projecten": t.dictionary(t.group({
                    "Offertes": t.dictionary(t.group({
                        "Opbrengsten": t.dictionary(t.group({
                            "Type": t.state_group({
                                "Project": t.group({
                                    "Bedrag": t.number_global("Bedrag"),
                                    "Betaaldatum": t.number_global("Datum"),
                                }),
                            }),
                        })),
                    })),
                })),
            })),
            "Leveranciers": t.dictionary(t.nothing()),
            "Medewerkers": t.dictionary(t.nothing()),
        })),

        "Grootboekrekeningen": type(t.group({
            "Balans": t.dictionary(t.group({
                "Type": t.state_group({
                    "Bankrekening": t.nothing(),
                    "Overig": t.nothing(),
                    "Informele rekening": t.nothing()
                })
            })),
            "Resultaat": t.dictionary(t.nothing()),
        })),

        "Jaarbeheer": type(t.group({
            "Resultaat": t.group({
                "Grootboekrekening voor BTW afrondingen": t.reference("Grootboekrekeningen", [tr.g("Resultaat")]),
                "Salarisrondes": t.dictionary(t.nothing()),

                "BTW periodes": t.dictionary(t.group({
                    "1. BTW-categorieen": t.dictionary(t.nothing()),
                    "Documenten": t.dictionary(t.group({
                        "Bestand": t.text_global("Bestandsnaam"),
                    })),
                    "Omschrijving": t.text_global("Omschrijving"),
                    "Status": t.state_group({
                        "Aangegeven": t.group({
                            "Afronding": t.number_global("Bedrag"),
                            "Bedrag": t.number_global("Bedrag"),
                            "Datum": t.number_global("Datum"),
                        }),
                        "Openstaand": t.nothing(),
                    }),
                })),
            }),
            "Balans": t.group({
                "Grootboekrekening voor nog aan te geven BTW": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                "Grootboekrekening voor resultaat dit jaar": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                "Grootboekrekening voor winstreserve": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                "Grootboekrekening voor Inkoop saldo": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                "Grootboekrekening voor Verkoop saldo": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                "Beginsaldo nog aan te geven BTW": t.number_global("Bedrag"),
                "Beginsaldo winstreserve": t.number_global("Bedrag"),
                "Informele rekeningen": t.dictionary(t.group({
                    "Beginsaldo": t.number_global("Bedrag"),
                    "Grootboekrekening": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                    "Nieuw": t.state_group({
                        "Ja": t.nothing(),
                        "Nee": t.group({
                            "Rekening": t.component_cyclic("Verwijzing naar Informele rekening"),
                        }),
                    })
                })),
                "Bankrekeningen": t.dictionary(t.group({
                    "Beginsaldo": t.number_global("Bedrag"),
                    "Grootboekrekening": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
                    "Nieuw": t.state_group({
                        "Ja": t.nothing(),
                        "Nee": t.group({
                            "Rekening": t.component_cyclic("Verwijzing naar Bankrekening"),
                        }),
                    }),
                    "Mutaties": t.dictionary(t.group({
                        "Bedrag": t.number_global("Bedrag"),
                        "Datum": t.number_global("Datum"),
                        "Omschrijving": t.text_global("Omschrijving"),
                    })),
                })),
                "Overige balans items": t.dictionary(t.component_cyclic("Overige balans item")),
                "Verrekenposten": t.dictionary(t.nothing()),
            }),
        })),

        "Overige balans item": type(t.group({
            "Beginsaldo": t.number_global("Bedrag"),
            "Grootboekrekening": t.reference("Grootboekrekeningen", [tr.g("Balans")]),
            "Nieuw": t.state_group({
                "Ja": t.nothing(),
                "Nee": t.group({
                    "Balans item": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Overige balans items")]),
                }),
            }),
        })),

        "Verwijzing naar Informele rekening": type(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")])), // FIXME maak van Informele Rekening een type en inline deze verwijzing
        "Verwijzing naar Bankrekening": type(t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Bankrekeningen")])),// FIXME maak van Bankrekening een type en inline deze verwijzing

        "Handelstransacties": type(t.group({
            "Inkopen": t.dictionary(t.group({
                "Afhandeling": t.state_group({
                    "Mutaties": t.nothing(),
                    "Rekening courant": t.group({
                        "Rekening courant": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")]),
                    }),
                }),
                "BTW-regime": t.state_group({
                    "Binnenland: heffing verlegd": t.nothing(),
                    "Geen BTW van toepassing": t.nothing(),
                    "Import van buiten de EU": t.nothing(),
                    "Intracommunautair": t.nothing(),
                    "Standaard": t.group({
                        "BTW-periode": t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("BTW periodes")]),
                    }),
                }),
                "Brondocument": t.state_group({
                    "Toegevoegd": t.group({
                        "Document": t.text_global("Bestandsnaam"),
                    }),
                    "Niet van toepassing": t.nothing(),
                    "Ontbreekt": t.nothing(),
                }),
                "Datum": t.number_global("Datum"),
                "Regels": t.dictionary(t.group({
                    "Bedrag": t.state_group({
                        "Bekend": t.group({
                            "BTW-bedrag": t.number_global("Bedrag"),
                            "Bedrag inclusief geheven BTW": t.number_global("Bedrag"),
                        })
                    }),
                    "Omschrijving": t.text_global("Omschrijving"),
                    "Type": t.state_group({
                        "Balans": t.group({
                            "Balans item": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Overige balans items")]),
                        }),
                        "Kosten": t.group({
                            "Grootboekrekening": t.reference("Grootboekrekeningen", [tr.g("Resultaat")]),
                        }),
                    }),
                })),
                "Type": t.state_group({
                    "Bonnetje": t.nothing(),
                    "Inkoop (met crediteur)": t.group({
                        "Crediteur": t.reference("Beheer", [tr.g("Leveranciers")]),
                        "Factuurnummer": t.text_global("Benaming")
                    }),
                    "Loonheffing": t.group({
                        "Ronde": t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("Salarisrondes")]),
                    }),
                    "Salaris": t.group({
                        "Ronde": t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("Salarisrondes")]),
                        "Medewerker": t.reference("Beheer", [tr.g("Medewerkers")]),
                    }),
                }),
            })),
            "Verkopen": t.dictionary(t.group({
                "Afhandeling": t.state_group({
                    "Mutaties": t.nothing(),
                    "Rekening courant": t.group({
                        "Rekening courant": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")]),
                    }),
                }),
                "Betalingstermijn": t.number_global("Dagen"),
                "BTW-periode": t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("BTW periodes")]),
                "Brondocument": t.state_group({
                    "Toegevoegd": t.group({
                        "Document": t.text_global("Bestandsnaam")
                    }),
                }),
                "Debiteur": t.reference("Beheer", [tr.g("Klanten")]),
                "Contracttype": t.state_group({
                    "Project": t.group({
                        "Project": t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Projecten")]),
                        "Offerte": t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Projecten"), tr.d(), tr.g("Offertes")]),
                    }),
                    "Licentieovereenkomst": t.group({
                        "Overeenkomst": t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Licentieovereenkomsten")]),
                    }),
                }),
                "Datum": t.number_global("Datum"),
                "Regels": t.dictionary(t.group({
                    "BTW-regime": t.state_group({
                        "Intracommunautair": t.nothing(),
                        "Standaard": t.group({
                            "BTW-categorie": t.reference("Beheer", [tr.g("BTW-categorieen")]),
                        }),
                        "Binnenland: heffing verlegd": t.nothing(),
                    }),
                    "Bedrag exclusief BTW": t.number_global("Bedrag"),
                    "Contracttype": t.state_group({
                        "Project": t.group({
                            "Opbrengst": t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Projecten"), tr.d(), tr.g("Offertes"), tr.d(), tr.g("Opbrengsten")]),
                        }),
                        "Los": t.nothing(),
                        "Licentieovereenkomst": t.group({
                            "Periode": t.reference("Beheer", [tr.g("Klanten"), tr.d(), tr.g("Licentieovereenkomsten"), tr.d(), tr.g("Periodes")]),
                        }),
                    }),
                    "Omschrijving": t.text_global("Omschrijving"),
                    "Type": t.state_group({
                        "Opbrengsten": t.group({
                            "Grootboekrekening": t.reference("Grootboekrekeningen", [tr.g("Resultaat")]),
                        }),
                        "Balans": t.group({
                            "Balans item": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Overige balans items")]),
                        }),
                    }),
                })),
            })),
        })),

        "Mutaties": type(t.group({
            "Verrekenpost mutaties": t.dictionary(t.dictionary(t.group({
                "Bedrag": t.number_global("Bedrag"),
                "Afhandeling": t.state_group({
                    "Resultaat": t.component_cyclic("Balans Resultaat Mutatie"),
                    "Balans": t.state_group({
                        "Informele rekening": t.group({
                            "Informele rekening": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")]),
                        }),
                    })
                })
            }))),
            "Bankrekening Mutatie Verwerkingen": t.dictionary(t.dictionary(t.state_group({
                "Resultaat": t.component_cyclic("Balans Resultaat Mutatie"),
                "Balans": t.state_group({
                    "Informele rekening": t.group({
                        "Informele rekening": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Informele rekeningen")]),
                    }),
                    "Verrekenpost": t.group({
                        "Verrekenpost": t.reference("Jaarbeheer", [tr.g("Balans"), tr.g("Verrekenposten")]),
                    }),
                }),
            }))),
            "Memoriaal boekingen": t.dictionary(t.dictionary(t.group({
                "Bedrag": t.number_global("Bedrag"),
                "Datum": t.number_global("Datum"),
                "Omschrijving": t.text_global("Omschrijving"),
                "Grootboekrekening": t.reference("Grootboekrekeningen", [tr.g("Resultaat")]),
            }))),
        })),

        "Balans Resultaat Mutatie": type(t.group({
            "Jaar": t.optional(t.reference("Jaren", [])),
            "type": t.state_group({
                "Inkoop": t.reference("Handelstransacties", [tr.g("Inkopen")]),
                "Verkoop": t.reference("Handelstransacties", [tr.g("Verkopen")]),
                "BTW-periode": t.reference("Jaarbeheer", [tr.g("Resultaat"), tr.g("BTW periodes")]),
            })
        })),

        "Jaren": type(t.dictionary(t.group({
            "Afgesloten": t.state_group({
                "Ja": t.nothing(),
                "Nee": t.nothing(),
            }),
            "Startdatum boekjaar": t.number_global("Datum"),
            "Grootboekrekeningen": t.component("Grootboekrekeningen"),
            "Eerste boekjaar": t.component_cyclic("Eerste boekjaar"),
            "Jaarbeheer": t.component("Jaarbeheer"),
            "Handelstransacties": t.component("Handelstransacties"),
            "Mutaties": t.component("Mutaties"),
        }), 'ordered')),

        "Eerste boekjaar": type(t.state_group({
            "Ja": t.nothing(),
            "Nee": t.group({
                "Vorig boekjaar": t.reference("Jaren", []),
            }),
        })),

        "Root": type(t.group({
            "Fiscaal": t.component("Fiscaal"),
            "Categorieen": t.component("Grootboek Categorieen"),
            "Beheer": t.component("Beheer"),
            "Jaren": t.component("Jaren"),
        })),
    }
)