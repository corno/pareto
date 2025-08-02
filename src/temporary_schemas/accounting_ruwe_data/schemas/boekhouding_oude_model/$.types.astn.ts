import * as pd from 'exupery-core-data'

import {
    n,
    types,

    text,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/unresolved"

export const $: g_.Types<pd.Source_Location> = types(
    {
        "Root": type(t.group({
            "Bankrekeningen": t.dictionary(t.group({})),
            "Beheer": t.group({
                "Balans": t.group({
                    "Grootboekrekeningen": t.dictionary(t.group({
                        "Hoofdcategorie": t.text_global("Pseudo Reference"),
                        "Subcategorie": t.text_global("Pseudo Reference"),
                        "Zijde": t.state_group({
                            "Activa": t.group({}),
                            "Passiva": t.group({})
                        }),
                    })),
                    "Hoofdcategorieen": t.dictionary(t.group({
                        "Zijde": t.state_group({
                            "Activa": t.group({}),
                            "Passiva": t.group({})
                        }),
                        "Subcategorieen": t.dictionary(t.group({
                            "Hoofdcategorie fiscus": t.text_global("Pseudo Reference"),
                            "Subcategorie fiscus": t.text_global("Pseudo Reference"),
                        }))
                    })),
                    "Hoofdcategorieen fiscus": t.dictionary(t.group({
                        "Zijde": t.state_group({
                            "Activa": t.group({}),
                            "Passiva": t.group({})
                        }),
                        "Subcategorieen": t.dictionary(t.group({}))
                    })),
                }),
                "BTW-categorieen": t.dictionary(t.group({
                    "BTW-heffing": t.state_group({
                        "Ja": t.group({
                            "BTW-promillage": t.number_global("Promillage"),
                        })
                    })
                })),
                "Gebruikers": t.dictionary(t.group({
                    "Volledige naam": t.text_global("Benaming"),
                    "Wachtwoord": t.text_global("Wachtwoord"),
                })),
                "Huidige datum": t.number_global("Datum"),
                "Resultaat": t.group({
                    "Correctietypes vennootschapsbelasting": t.dictionary(t.group({
                        "Te corrigeren promillage": t.number_global("Promillage"),
                    })),
                    "Grootboekrekeningen": t.dictionary(t.group({
                        "Hoofdcategorie": t.text_global("Pseudo Reference"),
                        "Subcategorie": t.text_global("Pseudo Reference"),
                        "Zijde": t.state_group({
                            "Kosten": t.group({
                                "Correctie op vennootschapsbelasting": t.state_group({
                                    "Ja": t.group({
                                        "Correctietype": t.text_global("Pseudo Reference"),
                                    }),
                                    "Nee": t.group({}),
                                })
                            }),
                            "Opbrengsten": t.group({})
                        }),
                    })),
                    "Hoofdcategorieen": t.dictionary(t.group({
                        "Zijde": t.state_group({
                            "Kosten": t.group({}),
                            "Opbrengsten": t.group({})
                        }),
                        "Subcategorieen": t.dictionary(t.group({
                            "Hoofdcategorie fiscus": t.text_global("Pseudo Reference"),
                            "Subcategorie fiscus": t.text_global("Pseudo Reference"),
                        }))
                    })),
                    "Hoofdcategorieen fiscus": t.dictionary(t.group({
                        "Zijde": t.state_group({
                            "Kosten": t.group({}),
                            "Opbrengsten": t.group({})
                        }),
                        "Subcategorieen": t.dictionary(t.group({}))
                    })),
                })
            }),
            "Informele rekeningen": t.dictionary(t.group({})),
            "Jaren": t.dictionary(t.group({
                "Afgesloten": t.state_group({
                    "Ja": t.group({}),
                    "Nee": t.group({}),
                }),
                "Balans grootboekrekeningen": t.dictionary(t.group({
                    "Type": t.state_group({
                        "Bankrekening": t.group({}),
                        "Overig": t.group({}),
                        "Informele rekening": t.group({})
                    })
                })),
                "Bankrekeningen": t.dictionary(t.group({
                    "Beginsaldo": t.number_global("Bedrag"),
                    "Grootboekrekening": t.text_global("Pseudo Reference"),
                    "Mutaties": t.dictionary(t.group({
                        "Bedrag": t.number_global("Bedrag"),
                        "Datum": t.number_global("Datum"),
                        "Omschrijving": t.text_global("Omschrijving"),
                        "Status": t.state_group({
                            "Nog te verwerken": t.group({}),
                            "Verwerkt": t.group({
                                "Afhandeling": t.state_group({
                                    "Inkoop": t.group({
                                        "Jaar": t.text_global("Pseudo Reference"),
                                        "Inkoop": t.text_global("Pseudo Reference"),
                                    }),
                                    "Verrekenpost": t.group({
                                        "Verrekenpost": t.text_global("Pseudo Reference"),
                                    }),
                                    "BTW-periode": t.group({
                                        "Jaar": t.text_global("Pseudo Reference"),
                                        "BTW-periode": t.text_global("Pseudo Reference"),
                                    }),
                                    "Verkoop": t.group({
                                        "Jaar": t.text_global("Pseudo Reference"),
                                        "Verkoop": t.text_global("Pseudo Reference"),
                                    }),
                                    "Informele rekening": t.group({
                                        "Informele rekening": t.text_global("Pseudo Reference"),
                                    }),
                                })
                            }),
                        }),
                    })),
                    "Nieuw": t.state_group({
                        "Ja": t.group({}),
                        "Nee": t.group({
                            "Jaar": t.text_global("Pseudo Reference"),
                            "Rekening": t.text_global("Pseudo Reference"),
                        }),
                    }),
                })),
                "Beginsaldo nog aan te geven BTW": t.number_global("Bedrag"),
                "Beginsaldo winstreserve": t.number_global("Bedrag"),
                "BTW periode saldo": t.group({
                    "Grootboekrekening": t.text_global("Pseudo Reference"),
                }),
                "BTW periodes": t.dictionary(t.group({
                    "1. BTW-categorieen": t.dictionary(t.group({})),
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
                        "Openstaand": t.group({}),
                    }),
                })),
                "Eerste boekjaar": t.state_group({
                    "Ja": t.group({}),
                    "Nee": t.group({
                        "Vorig boekjaar": t.text_global("Pseudo Reference"),
                    }),
                }),
                "Grootboekrekening voor BTW afrondingen": t.text_global("Pseudo Reference"),
                "Grootboekrekening voor nog aan te geven BTW": t.text_global("Pseudo Reference"),
                "Grootboekrekening voor resultaat dit jaar": t.text_global("Pseudo Reference"),
                "Grootboekrekening voor winstreserve": t.text_global("Pseudo Reference"),
                "Informele rekeningen": t.dictionary(t.group({
                    "Beginsaldo": t.number_global("Bedrag"),
                    "Grootboekrekening": t.text_global("Pseudo Reference"),
                    "Nieuw": t.state_group({
                        "Ja": t.group({}),
                        "Nee": t.group({
                            "Jaar": t.text_global("Pseudo Reference"),
                            "Rekening": t.text_global("Pseudo Reference"),
                        }),
                    })
                })),
                "Inkopen": t.dictionary(t.group({
                    "Afhandeling": t.state_group({
                        "Mutaties": t.group({}),
                        "Rekening courant": t.group({
                            "Rekening courant": t.text_global("Pseudo Reference"),
                        }),
                    }),
                    "BTW-regime": t.state_group({
                        "Binnenland: heffing verlegd": t.group({}),
                        "Geen BTW van toepassing": t.group({
                            "BTW-periode": t.text_global("Pseudo Reference"),
                        }),
                        "Import van buiten de EU": t.group({}),
                        "Intracommunautair": t.group({}),
                        "Standaard": t.group({
                            "BTW-periode": t.text_global("Pseudo Reference"),
                        }),
                    }),
                    "Brondocument": t.state_group({
                        "Toegevoegd": t.group({
                            "Document": t.text_global("Bestandsnaam"),
                        }),
                        "Niet van toepassing": t.group({}),
                        "Ontbreekt": t.group({}),
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
                                "Balans item": t.text_global("Pseudo Reference"),
                            }),
                            "Kosten": t.group({
                                "Grootboekrekening": t.text_global("Pseudo Reference"),
                            }),
                        }),
                    })),
                    "Type": t.state_group({
                        "Bonnetje": t.group({}),
                        "Inkoop (met crediteur)": t.group({
                            "Crediteur": t.text_global("Pseudo Reference"),
                            "Factuurnummer": t.text_global("Benaming")
                        }),
                        "Loonheffing": t.group({
                            "Ronde": t.text_global("Pseudo Reference"),
                        }),
                        "Salaris": t.group({
                            "Ronde": t.text_global("Pseudo Reference"),
                            "Medewerker": t.text_global("Pseudo Reference"),
                        }),
                    }),
                })),
                "Inkoop saldo": t.group({
                    "Grootboekrekening": t.text_global("Pseudo Reference"),
                }),
                "Overige balans items": t.dictionary(t.group({
                    "Beginsaldo": t.number_global("Bedrag"),
                    "Grootboekrekening": t.text_global("Pseudo Reference"),
                    "Memoriaal boekingen": t.dictionary(t.group({
                        "Bedrag": t.number_global("Bedrag"),
                        "Datum": t.number_global("Datum"),
                        "Grootboekrekening": t.text_global("Pseudo Reference"),
                        "Omschrijving": t.text_global("Omschrijving"),
                    })),
                    "Nieuw": t.state_group({
                        "Ja": t.group({}),
                        "Nee": t.group({
                            "Jaar": t.text_global("Pseudo Reference"),
                            "Balans item": t.text_global("Pseudo Reference"),
                        }),
                    }),
                })),
                "Resultaat grootboekrekeningen": t.dictionary(t.group({})),
                "Salarisrondes": t.dictionary(t.group({})),
                "Startdatum boekjaar": t.number_global("Datum"),
                "Verkoop saldo": t.group({
                    "Grootboekrekening": t.text_global("Pseudo Reference"),
                }),
                "Verkopen": t.dictionary(t.group({
                    "Afhandeling": t.state_group({
                        "Mutaties": t.group({}),
                        "Rekening courant": t.group({
                            "Rekening courant": t.text_global("Pseudo Reference")
                        }),
                    }),
                    "Betalingstermijn": t.number_global("Dagen"),
                    "BTW-periode": t.text_global("Pseudo Reference"),
                    "Brondocument": t.state_group({
                        "Toegevoegd": t.group({
                            "Document": t.text_global("Bestandsnaam")
                        }),
                    }),
                    "Contracttype": t.state_group({
                        "Project": t.group({
                            "Project": t.text_global("Pseudo Reference"),
                            "Offerte": t.text_global("Pseudo Reference"),
                        }),
                        "Licentieovereenkomst": t.group({
                            "Overeenkomst": t.text_global("Pseudo Reference"),
                        }),
                    }),
                    "Datum": t.number_global("Datum"),
                    "Debiteur": t.text_global("Pseudo Reference"),
                    "Regels": t.dictionary(t.group({
                        "BTW-regime": t.state_group({
                            "Intracommunautair": t.group({}),
                            "Standaard": t.group({
                                "BTW-categorie": t.text_global("Pseudo Reference"),
                            }),
                            "Binnenland: heffing verlegd": t.group({}),
                        }),
                        "Bedrag exclusief BTW": t.number_global("Bedrag"),
                        "Contracttype": t.state_group({
                            "Project": t.group({
                                "Opbrengst": t.text_global("Pseudo Reference"),
                            }),
                            "Los": t.group({}),
                            "Licentieovereenkomst": t.group({
                                "Periode": t.text_global("Pseudo Reference")
                            }),
                        }),
                        "Omschrijving": t.text_global("Omschrijving"),
                        "Type": t.state_group({
                            "Opbrengsten": t.group({
                                "Grootboekrekening": t.text_global("Pseudo Reference"),
                            }),
                            "Balans": t.group({
                                "Balans item": t.text_global("Pseudo Reference"),
                            }),
                        }),
                    })),
                })),
                "Verrekenposten": t.dictionary(t.group({
                    "Mutaties": t.dictionary(t.group({
                        "Bedrag": t.number_global("Bedrag"),
                        "Afhandeling": t.state_group({
                            "Inkoop": t.group({
                                "Jaar": t.text_global("Pseudo Reference"),
                                "Inkoop": t.text_global("Pseudo Reference"),
                            }),
                            "Informele rekening": t.group({
                                "Informele rekening": t.text_global("Pseudo Reference")
                            }),
                            "Verkoop": t.group({
                                "Jaar": t.text_global("Pseudo Reference"),
                                "Verkoop": t.text_global("Pseudo Reference"),
                            }),
                            "BTW-periode": t.group({
                                "Jaar": t.text_global("Pseudo Reference"),
                                "BTW-periode": t.text_global("Pseudo Reference"),
                            }),
                        })
                    }))
                })),
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
            "Leveranciers": t.dictionary(t.group({})),
            "Medewerkers": t.dictionary(t.group({})),
        }))
    }
)